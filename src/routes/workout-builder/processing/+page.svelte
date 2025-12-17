<script lang="ts">
	import { goto } from '$app/navigation';
	import { onDestroy, onMount } from 'svelte';
	import type { UserOnboardingData } from '$lib/services/openai';

	type ApiResponse =
		| { success: true; workoutPlan: unknown }
		| { error: string; message?: string };

	const USER_RESPONSES_COOKIE = 'fitgenie_user_responses';

	const statusMessages = [
		'Analyzing your responses...',
		'Processing your fitness profile...',
		'Crafting your personalized plan...'
	];

	let currentMessageIndex = 0;
	let statusMessage = statusMessages[currentMessageIndex];
	let messageInterval: ReturnType<typeof setInterval> | null = null;

	let isError = false;
	let errorMessage = "We couldn't generate your workout plan. Please try again.";

	const getCookie = (name: string) => {
		const value = `; ${document.cookie}`;
		const parts = value.split(`; ${name}=`);
		if (parts.length === 2) {
			return parts.pop()?.split(';').shift() ?? null;
		}
		return null;
	};

	const readUserOnboardingDataFromCookie = (): UserOnboardingData | null => {
		const raw = getCookie(USER_RESPONSES_COOKIE);
		if (!raw) return null;
		try {
			return JSON.parse(decodeURIComponent(raw)) as UserOnboardingData;
		} catch {
			return null;
		}
	};

	const startStatusAnimation = () => {
		messageInterval = setInterval(() => {
			currentMessageIndex = (currentMessageIndex + 1) % statusMessages.length;
			statusMessage = statusMessages[currentMessageIndex];
		}, 2500);
	};

	const stopStatusAnimation = () => {
		if (messageInterval) clearInterval(messageInterval);
		messageInterval = null;
	};

	const runGeneration = async () => {
		isError = false;
		errorMessage = "We couldn't generate your workout plan. Please try again.";

		const userData = readUserOnboardingDataFromCookie();
		if (!userData?.responses || Object.keys(userData.responses).length === 0) {
			await goto('/workout-builder/1');
			return;
		}

		try {
			const res = await fetch('/api/workout', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(userData)
			});

   const data = (await res.json()) as ApiResponse;

			if (!res.ok || 'error' in data) {
				throw new Error('error' in data ? data.message || data.error : 'Failed to generate workout');
			}

   // Save the workout plan to Web Storage (client-side) and navigate to dashboard
   if ('success' in data && data.success) {
       try {
           localStorage.setItem('fitgenie_workout_plan', JSON.stringify(data.workoutPlan));
       } catch {
           // If localStorage fails, continue to dashboard; the page will show a fallback message
       }
   }

   await goto('/dashboard');
		} catch (err) {
			isError = true;
			errorMessage = err instanceof Error ? err.message : 'Failed to generate workout plan';
			stopStatusAnimation();
		}
	};

	const onRetry = async () => {
		stopStatusAnimation();
		startStatusAnimation();
		await runGeneration();
	};

	onMount(() => {
		// Simple dark mode toggle based on system preference
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.documentElement.classList.add('dark');
		}

		startStatusAnimation();
		void runGeneration();
	});

	onDestroy(() => {
		stopStatusAnimation();
	});
</script>

<svelte:head>
	<title>Creating Your Workout Plan - FitGenie</title>
</svelte:head>

<div class="relative flex min-h-screen flex-col overflow-x-hidden">
	<!-- Header -->
	<header class="flex items-center justify-between px-6 py-5 md:px-10 lg:px-40">
		<div class="flex items-center gap-3">
			<div class="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-text-main">
				<span class="material-symbols-outlined text-2xl">fitness_center</span>
			</div>
			<h2 class="text-xl font-bold leading-tight tracking-tight">FitGenie</h2>
		</div>
	</header>

	<!-- Main Content -->
	<main class="flex flex-1 flex-col items-center justify-center px-4 py-8 md:px-10">
		<div class="flex w-full max-w-[640px] flex-col items-center gap-10">
			{#if !isError}
				<!-- Loading Spinner -->
				<div class="relative">
					<div class="h-24 w-24 rounded-full border-4 border-border-light dark:border-border-dark"></div>
					<div
						class="absolute inset-0 h-24 w-24 animate-spin rounded-full border-4 border-transparent border-t-primary"
					></div>
					<div class="absolute inset-0 flex items-center justify-center">
						<span class="material-symbols-outlined text-5xl text-primary animate-pulse">
							psychology
						</span>
					</div>
				</div>

				<!-- Status Message -->
				<div class="text-center">
					<h1
						class="status-message text-3xl font-black leading-tight tracking-tight text-text-main dark:text-text-light md:text-4xl"
					>
						{statusMessage}
					</h1>
					<p class="mt-4 text-lg font-normal leading-relaxed text-muted-light dark:text-muted-dark">
						Our agent is crafting a personalized workout plan just for you
					</p>
				</div>

				<!-- Progress Dots -->
				<div class="flex items-center gap-2">
					<div class="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
					<div class="h-2 w-2 rounded-full bg-primary animate-pulse" style="animation-delay: 0.2s"></div>
					<div class="h-2 w-2 rounded-full bg-primary animate-pulse" style="animation-delay: 0.4s"></div>
				</div>
			{:else}
				<!-- Error State -->
				<div class="w-full flex flex-col items-center gap-6">
					<div class="flex h-20 w-20 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
						<span class="material-symbols-outlined text-4xl text-red-600 dark:text-red-400">
							error
						</span>
					</div>
					<div class="text-center">
						<h2 class="text-2xl font-bold text-text-main dark:text-text-light mb-2">Something went wrong</h2>
						<p class="text-lg text-muted-light dark:text-muted-dark">{errorMessage}</p>
					</div>
					<button
						on:click={onRetry}
						class="flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold tracking-wide text-[#181811] shadow-lg shadow-primary/20 transition-transform hover:scale-[1.02] active:scale-[0.98]"
					>
						<span class="material-symbols-outlined">refresh</span>
						<span>Try Again</span>
					</button>
					<a
						href="/workout-builder/1"
						class="text-sm font-bold text-muted-light dark:text-muted-dark hover:text-text-main dark:hover:text-text-light transition-colors"
					>
						Start Over
					</a>
				</div>
			{/if}
		</div>
	</main>

	<!-- Decorative Background Elements -->
	<div class="pointer-events-none fixed -bottom-40 -right-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl dark:bg-primary/5"></div>
	<div class="pointer-events-none fixed -left-40 top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl dark:bg-primary/5"></div>
</div>

<style>
	@keyframes fadeIn {
		0% {
			opacity: 0;
			transform: translateY(10px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.status-message {
		animation: fadeIn 0.5s ease-in-out;
	}
</style>
