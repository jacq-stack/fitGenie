<script lang="ts">
	import AppFooter from '$lib/components/AppFooter.svelte';
	import AppHeader from '$lib/components/AppHeader.svelte';
</script>

<svelte:head>
	<title>FitGenie</title>
</svelte:head>

<div class="relative flex min-h-screen w-full flex-col">
	<!-- TopNavBar -->
	<AppHeader />
	<main class="flex-grow">
		<!-- HeroSection -->
		<section class="relative overflow-hidden pt-10 pb-16 lg:pt-24 lg:pb-32 px-4 sm:px-10">
			<div class="max-w-[1280px] mx-auto">
				<div class="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
					<!-- Content -->
					<div class="flex flex-col gap-8 flex-1 text-center lg:text-left">
						<div class="flex flex-col gap-4">
							<h1
								class="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tighter text-text-main dark:text-white"
							>
								Forge Your <span class="relative inline-block px-2"
									>Ultimate<span
										class="absolute inset-x-0 bottom-2 h-3 bg-primary/40 -z-10 rounded-sm transform -rotate-1"
									></span></span
								> Resistance Routine.
							</h1>
							<h2
								class="text-lg sm:text-xl text-text-main/80 dark:text-white/80 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0"
							>
								The simplest tool to design, track, and optimize your strength training. No sign-up
								required—just start lifting.
							</h2>
						</div>
						<div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
							<a
								href="/workout-builder/1"
								class="group flex h-14 items-center justify-center rounded-full bg-primary px-8 text-black text-base font-bold tracking-wide transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
							>
								<span>Create My Workout</span>
								<span
									class="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform"
									>arrow_forward</span
								>
							</a>
						</div>
					</div>
					<!-- Image -->
					<div class="flex-1 w-full lg:w-auto relative group">
						<div
							class="absolute -inset-4 bg-primary/20 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"
						></div>
						<div
							aria-label="Black and white photo of heavy dumbbells on a rack in a modern gym"
							class="relative w-full aspect-[4/3] bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-all duration-500 ease-out"
							data-alt="Black and white photo of heavy dumbbells on a rack in a modern gym"
							role="img"
							style="background-image: url('/images/workout.png'); background-size: cover; background-position: center; filter: grayscale(100%);"
						>
							<div class="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- FeatureSection -->
		<section class="py-20 bg-white dark:bg-[#1f1e0d] px-4 sm:px-10">
			<div class="max-w-[1280px] mx-auto">
				<div class="flex flex-col gap-12">
					<div class="flex flex-col gap-4 max-w-3xl">
						<h2
							class="text-3xl sm:text-4xl font-bold tracking-tight text-text-main dark:text-white"
						>
							Why Choose Workout Creator?
						</h2>
						<p class="text-lg text-text-muted dark:text-gray-400">
							Everything you need to build the perfect resistance training program without the
							clutter.
						</p>
					</div>
					<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
						<!-- Feature 1 -->
						<div
							class="group flex flex-col gap-6 rounded-lg border border-[#e6e6db] dark:border-[#3e3e32] bg-background-light dark:bg-background-dark p-8 hover:border-primary/50 transition-colors"
						>
							<div
								class="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-black"
							>
								<span class="material-symbols-outlined text-3xl">library_books</span>
							</div>
							<div class="flex flex-col gap-2">
								<h3 class="text-xl font-bold text-text-main dark:text-white">Smart Library</h3>
								<p class="text-text-muted dark:text-gray-400 leading-relaxed">
									Access 500+ resistance exercises categorized by muscle group and equipment type.
								</p>
							</div>
						</div>
						<!-- Feature 2 -->
						<div
							class="group flex flex-col gap-6 rounded-lg border border-[#e6e6db] dark:border-[#3e3e32] bg-background-light dark:bg-background-dark p-8 hover:border-primary/50 transition-colors"
						>
							<div
								class="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-black"
							>
								<span class="material-symbols-outlined text-3xl">drag_indicator</span>
							</div>
							<div class="flex flex-col gap-2">
								<h3 class="text-xl font-bold text-text-main dark:text-white">Drag &amp; Drop</h3>
								<p class="text-text-muted dark:text-gray-400 leading-relaxed">
									Build sophisticated routines in seconds. Reorder sets and exercises intuitively.
								</p>
							</div>
						</div>
						<!-- Feature 3 -->
						<div
							class="group flex flex-col gap-6 rounded-lg border border-[#e6e6db] dark:border-[#3e3e32] bg-background-light dark:bg-background-dark p-8 hover:border-primary/50 transition-colors"
						>
							<div
								class="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-black"
							>
								<span class="material-symbols-outlined text-3xl">print</span>
							</div>
							<div class="flex flex-col gap-2">
								<h3 class="text-xl font-bold text-text-main dark:text-white">Print &amp; Go</h3>
								<p class="text-text-muted dark:text-gray-400 leading-relaxed">
									Export clean, formatted PDF summaries instantly to take with you to the gym.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- CTASection -->
		<section class="py-24 px-4 sm:px-10">
			<div class="max-w-[960px] mx-auto">
				<div
					class="rounded-xl bg-text-main dark:bg-white text-white dark:text-text-main overflow-hidden relative"
				>
					<!-- Abstract Background Pattern -->
					<div
						class="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-primary rounded-full opacity-20 blur-3xl"
					></div>
					<div
						class="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-primary rounded-full opacity-20 blur-3xl"
					></div>
					<div
						class="relative z-10 flex flex-col items-center justify-center gap-8 px-6 py-16 sm:py-20 text-center"
					>
						<div class="flex flex-col gap-4 max-w-2xl">
							<h2 class="text-3xl sm:text-5xl font-black leading-tight tracking-tight">
								Ready to get stronger?
							</h2>
							<p class="text-lg opacity-80 font-normal leading-relaxed">
								Start building your custom workout plan today. No credit card, no sign-up, just
								gains.
							</p>
						</div>
						<a
							href="/workout-builder/1"
							class="flex h-12 sm:h-14 min-w-[200px] items-center justify-center rounded-full bg-primary px-8 text-black text-base sm:text-lg font-bold tracking-wide hover:scale-105 transition-transform"
						>
							<span class="truncate">Start Building Now</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	</main>
	<!-- Footer -->
	<AppFooter />
</div>
