<script lang="ts">
	import { onMount } from 'svelte';
	import type { WorkoutPlan } from '$lib/services/openai';
	import AppFooter from '$lib/components/AppFooter.svelte';
	import AppHeader from '$lib/components/AppHeader.svelte';

	let workoutPlan: WorkoutPlan | null = null;

	onMount(() => {
		try {
			const raw = localStorage.getItem('fitgenie_workout_plan');
			workoutPlan = raw ? (JSON.parse(raw) as WorkoutPlan) : null;
		} catch {
			workoutPlan = null;
		}
	});
</script>

<svelte:head>
	<title>Your Custom Workout Plan</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500;600;700&family=Noto+Sans:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="bg-background-light dark:bg-background-dark font-display">
	<div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
		<AppHeader />

		<div class="layout-container flex h-full grow flex-col">
			<div class="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
				<div class="layout-content-container flex flex-col max-w-[1200px] flex-1">
					{#if !workoutPlan}
						<div class="p-4 mb-4 rounded-lg border border-yellow-300 bg-yellow-50 text-yellow-800">
							<p>No workout plan found. Please generate one first.</p>
							<a href="/workout-builder/1" class="underline font-semibold">Go to Workout Builder</a>
						</div>
					{:else}
						<!-- Dynamic Page Heading -->
						<div class="flex flex-wrap justify-between gap-3 p-4 items-end">
							<div class="flex min-w-72 flex-col gap-3">
								<h1
									class="text-neutral-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]"
								>
									Your Custom Workout Plan
								</h1>
								<p
									class="text-neutral-500 dark:text-neutral-400 text-base font-normal leading-normal max-w-2xl"
								>
									{workoutPlan.group}
								</p>
							</div>
						</div>

						{#each workoutPlan.phases as phase, idx}
							<section class="mt-8 mb-12">
								<div class="flex items-center gap-3 px-4 pb-3 pt-5">
									<div
										class="flex items-center justify-center size-8 rounded-full {idx % 2 === 0 ? 'bg-primary text-neutral-900' : 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900'} font-bold"
									>
										{idx + 1}
									</div>
									<h2
										class="text-neutral-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]"
									>
										{phase.phase}
									</h2>
								</div>
								<!-- Phase Stats -->
								<div class="flex flex-wrap gap-4 p-4">
									<div
										class="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#1a190b] shadow-sm border border-neutral-100 dark:border-neutral-800"
									>
										<div class="flex items-center gap-2">
											<span class="material-symbols-outlined text-neutral-500">flag</span>
											<p
												class="text-neutral-500 dark:text-neutral-400 text-base font-medium leading-normal"
											>
												Goal
											</p>
										</div>
										<p
											class="text-neutral-900 dark:text-white tracking-light text-xl font-bold leading-tight"
										>
											{phase.goal}
										</p>
									</div>
									<div
										class="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#1a190b] shadow-sm border border-neutral-100 dark:border-neutral-800"
									>
										<div class="flex items-center gap-2">
											<span class="material-symbols-outlined text-neutral-500">calendar_today</span>
											<p
												class="text-neutral-500 dark:text-neutral-400 text-base font-medium leading-normal"
											>
												Frequency
											</p>
										</div>
										<p
											class="text-neutral-900 dark:text-white tracking-light text-xl font-bold leading-tight"
										>
											{phase.frequency}
										</p>
									</div>
									<div
										class="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-primary/10 border border-primary/20"
									>
										<div class="flex items-center gap-2">
											<span class="material-symbols-outlined text-neutral-700 dark:text-neutral-300"
											>trending_up</span
											>
											<p
												class="text-neutral-700 dark:text-neutral-300 text-base font-medium leading-normal"
											>
												Progression
											</p>
										</div>
										<p
											class="text-neutral-900 dark:text-white tracking-light text-lg font-semibold leading-tight"
										>
											{phase.progression}
										</p>
									</div>
								</div>
								<!-- Phase Table -->
								<div class="px-4 py-3 @container">
									<div
										class="flex overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-[#1a190b]"
									>
										<table class="flex-1 w-full">
											<thead>
											<tr class="bg-neutral-50 dark:bg-neutral-900">
												<th
													class="px-4 py-3 text-left text-neutral-900 dark:text-white text-sm font-bold leading-normal"
												>Exercise</th
												>
												<th
													class="px-4 py-3 text-left text-neutral-900 dark:text-white text-sm font-bold leading-normal"
												>Sets x Reps</th
												>
												<th
													class="px-4 py-3 text-left text-neutral-900 dark:text-white text-sm font-bold leading-normal flex items-center gap-1"
												>
													RIR
													<span
														class="material-symbols-outlined text-[16px] text-neutral-400 cursor-help"
														title="Reps in Reserve: How many more reps you could do with good form"
													>help</span
												>
												</th>
												<th
													class="px-4 py-3 text-left text-neutral-900 dark:text-white text-sm font-bold leading-normal"
												>Notes</th
												>
											</tr>
											</thead>
											<tbody class="divide-y divide-neutral-200 dark:divide-neutral-700">
												{#each phase.exercises as ex}
													<tr>
														<td class="px-4 py-4 text-neutral-900 dark:text-white text-sm font-medium">{ex.name}</td>
														<td class="px-4 py-4 text-neutral-600 dark:text-neutral-400 text-sm">{ex.sets} x {ex.reps}</td>
														<td class="px-4 py-4 text-neutral-600 dark:text-neutral-400 text-sm">{ex.rir}</td>
														<td class="px-4 py-4 text-neutral-600 dark:text-neutral-400 text-sm">{ex.notes}</td>
													</tr>
												{/each}
											</tbody>
										</table>
									</div>
								</div>
							</section>
							{#if idx < workoutPlan.phases.length - 1}
								<!-- Divider between phases -->
								<div class="mx-4 border-t border-dashed border-neutral-300 dark:border-neutral-700 my-4"></div>
							{/if}
						{/each}
					{/if}
				</div>
			</div>
		</div>
	</div>
	<AppFooter />
</div>