<!DOCTYPE html>
<html class="light" lang="en"
	><head>
		<meta charset="utf-8" />
		<title>Your Custom Workout Plan</title>
		<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
		<link
			href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500;600;700&amp;family=Noto+Sans:wght@400;500;600;700&amp;display=swap"
			rel="stylesheet"
		/>
		<link
			href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
			rel="stylesheet"
		/>
		<link
			href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
			rel="stylesheet"
		/>
		<script id="tailwind-config">
			tailwind.config = {
				darkMode: 'class',
				theme: {
					extend: {
						colors: {
							primary: '#f9f506',
							'background-light': '#f8f8f5',
							'background-dark': '#23220f'
						},
						fontFamily: {
							display: ['Spline Sans', 'sans-serif']
						},
						borderRadius: { DEFAULT: '1rem', lg: '2rem', xl: '3rem', full: '9999px' }
					}
				}
			};
		</script>
	</head>
	<body class="bg-background-light dark:bg-background-dark font-display">
		<div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
			<!-- Top Navbar -->
			<header
				class="flex items-center justify-between whitespace-nowrap border-b border-solid border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#1a190b] px-10 py-3 sticky top-0 z-50"
			>
				<div class="flex items-center gap-4 text-neutral-900 dark:text-white">
					<div class="size-6 text-primary">
						<span class="material-symbols-outlined text-2xl">fitness_center</span>
					</div>
					<h2
						class="text-neutral-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]"
					>
						FitPlan Pro
					</h2>
				</div>
				<div class="flex flex-1 justify-end gap-8">
					<div class="hidden md:flex items-center gap-9">
						<a
							class="text-neutral-900 dark:text-neutral-200 text-sm font-medium leading-normal hover:text-primary transition-colors"
							href="#">Dashboard</a
						>
						<a
							class="text-neutral-900 dark:text-neutral-200 text-sm font-medium leading-normal hover:text-primary transition-colors"
							href="#">My Plan</a
						>
						<a
							class="text-neutral-900 dark:text-neutral-200 text-sm font-medium leading-normal hover:text-primary transition-colors"
							href="#">Exercises</a
						>
						<a
							class="text-neutral-900 dark:text-neutral-200 text-sm font-medium leading-normal hover:text-primary transition-colors"
							href="#">Profile</a
						>
					</div>
					<div
						class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-primary/50"
						data-alt="User profile picture placeholder"
					></div>
				</div>
			</header>
			<div class="layout-container flex h-full grow flex-col">
				<div class="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
					<div class="layout-content-container flex flex-col max-w-[1200px] flex-1">
						<!-- Page Heading -->
						<div class="flex flex-wrap justify-between gap-3 p-4 items-end">
							<div class="flex min-w-72 flex-col gap-3">
								<h1
									class="text-neutral-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]"
								>
									Your Custom Resistance Plan
								</h1>
								<p
									class="text-neutral-500 dark:text-neutral-400 text-base font-normal leading-normal max-w-2xl"
								>
									A structured approach to building strength and mastering movement. Follow the
									phases in order to maximize your gains and prevent injury.
								</p>
							</div>
							<button
								class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary text-neutral-900 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-yellow-400 transition-colors"
							>
								<span class="truncate">Start Workout</span>
							</button>
						</div>
						<!-- Phase 1: Familiarization -->
						<section class="mt-8 mb-12">
							<div class="flex items-center gap-3 px-4 pb-3 pt-5">
								<div
									class="flex items-center justify-center size-8 rounded-full bg-primary text-neutral-900 font-bold"
								>
									1
								</div>
								<h2
									class="text-neutral-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]"
								>
									Phase 1: Familiarization
								</h2>
							</div>
							<!-- Phase 1 Stats -->
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
										Learn movement patterns
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
										2x / Week
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
										Focus on form. Do not increase weight until technique is perfect.
									</p>
								</div>
							</div>
							<!-- Phase 1 Table -->
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
											<tr>
												<td class="px-4 py-4 text-neutral-900 dark:text-white text-sm font-medium"
													>Goblet Squat</td
												>
												<td class="px-4 py-4 text-neutral-600 dark:text-neutral-400 text-sm"
													>3 x 10</td
												>
												<td class="px-4 py-4 text-neutral-600 dark:text-neutral-400 text-sm">3-4</td
												>
												<td class="px-4 py-4 text-neutral-600 dark:text-neutral-400 text-sm"
													>Focus on depth and keeping chest up</td
												>
											</tr>
											<tr>
												<td class="px-4 py-4 text-neutral-900 dark:text-white text-sm font-medium"
													>Push Ups</td
												>
												<td class="px-4 py-4 text-neutral-600 dark:text-neutral-400 text-sm"
													>3 x 10</td
												>
												<td class="px-4 py-4 text-neutral-600 dark:text-neutral-400 text-sm">3-4</td
												>
												<td class="px-4 py-4 text-neutral-600 dark:text-neutral-400 text-sm"
													>Knees or toes, full range of motion</td
												>
											</tr>
											<tr>
												<td class="px-4 py-4 text-neutral-900 dark:text-white text-sm font-medium"
													>Dumbbell Row</td
												>
												<td class="px-4 py-4 text-neutral-600 dark:text-neutral-400 text-sm"
													>3 x 12</td
												>
												<td class="px-4 py-4 text-neutral-600 dark:text-neutral-400 text-sm">3-4</td
												>
												<td class="px-4 py-4 text-neutral-600 dark:text-neutral-400 text-sm"
													>Squeeze shoulder blade at the top</td
												>
											</tr>
											<tr>
												<td class="px-4 py-4 text-neutral-900 dark:text-white text-sm font-medium"
													>Glute Bridge</td
												>
												<td class="px-4 py-4 text-neutral-600 dark:text-neutral-400 text-sm"
													>3 x 15</td
												>
												<td class="px-4 py-4 text-neutral-600 dark:text-neutral-400 text-sm">2-3</td
												>
												<td class="px-4 py-4 text-neutral-600 dark:text-neutral-400 text-sm"
													>Squeeze glutes at top, hold for 1s</td
												>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</section>
						<!-- Divider -->
						<div
							class="mx-4 border-t border-dashed border-neutral-300 dark:border-neutral-700 my-4"
						></div>
						<!-- Phase 2: Infinite Prescription -->
						<section class="mt-8 mb-12">
							<div class="flex items-center gap-3 px-4 pb-3 pt-5">
								<div
									class="flex items-center justify-center size-8 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold"
								>
									2
								</div>
								<h2
									class="text-neutral-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]"
								>
									Phase 2: Infinite Prescription
								</h2>
							</div>
							<!-- Phase 2 Stats -->
							<div class="flex flex-wrap gap-4 p-4">
								<div
									class="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#1a190b] shadow-sm border border-neutral-100 dark:border-neutral-800"
								>
									<div class="flex items-center gap-2">
										<span class="material-symbols-outlined text-neutral-500">fitness_center</span>
										<p
											class="text-neutral-500 dark:text-neutral-400 text-base font-medium leading-normal"
										>
											Goal
										</p>
									</div>
									<p
										class="text-neutral-900 dark:text-white tracking-light text-xl font-bold leading-tight"
									>
										Hypertrophy &amp; Strength
									</p>
								</div>
								<div
									class="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#1a190b] shadow-sm border border-neutral-100 dark:border-neutral-800"
								>
									<div class="flex items-center gap-2">
										<span class="material-symbols-outlined text-neutral-500">date_range</span>
										<p
											class="text-neutral-500 dark:text-neutral-400 text-base font-medium leading-normal"
										>
											Frequency
										</p>
									</div>
									<p
										class="text-neutral-900 dark:text-white tracking-light text-xl font-bold leading-tight"
									>
										3-4x / Week
									</p>
								</div>
								<div
									class="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-primary/10 border border-primary/20"
								>
									<div class="flex items-center gap-2">
										<span class="material-symbols-outlined text-neutral-700 dark:text-neutral-300"
											>upgrade</span
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
										Increase load by 2.5kg when RIR &gt; 2 consistently.
									</p>
								</div>
							</div>
							<!-- Phase 2 Table -->
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
											<tr>
												<td class="px-4 py-4 text-neutral-900 dark:text-white text-sm font-medium"
													>Barbell Back Squat</td
												>
												<td class="px-4 py-4 text-neutral-600 dark:text-neutral-400 text-sm"
													>4 x 6</td
												>
												<td class="px-4 py-4 text-neutral-600 dark:text-neutral-400 text-sm">2</td>
												<td class="px-4 py-4 text-neutral-600 dark:text-neutral-400 text-sm"
													>Brace core, maintain neutral spine</td
												>
											</tr>
											<tr>
												<td class="px-4 py-4 text-neutral-900 dark:text-white text-sm font-medium"
													>Bench Press</td
												>
												<td class="px-4 py-4 text-neutral-600 dark:text-neutral-400 text-sm"
													>4 x 8</td
												>
												<td class="px-4 py-4 text-neutral-600 dark:text-neutral-400 text-sm">2</td>
												<td class="px-4 py-4 text-neutral-600 dark:text-neutral-400 text-sm"
													>Control the descent</td
												>
											</tr>
											<tr>
												<td class="px-4 py-4 text-neutral-900 dark:text-white text-sm font-medium"
													>Romanian Deadlift</td
												>
												<td class="px-4 py-4 text-neutral-600 dark:text-neutral-400 text-sm"
													>3 x 10</td
												>
												<td class="px-4 py-4 text-neutral-600 dark:text-neutral-400 text-sm">2-3</td
												>
												<td class="px-4 py-4 text-neutral-600 dark:text-neutral-400 text-sm"
													>Feel the stretch in hamstrings</td
												>
											</tr>
											<tr>
												<td class="px-4 py-4 text-neutral-900 dark:text-white text-sm font-medium"
													>Overhead Press</td
												>
												<td class="px-4 py-4 text-neutral-600 dark:text-neutral-400 text-sm"
													>3 x 8</td
												>
												<td class="px-4 py-4 text-neutral-600 dark:text-neutral-400 text-sm">2</td>
												<td class="px-4 py-4 text-neutral-600 dark:text-neutral-400 text-sm"
													>Keep glutes squeezed</td
												>
											</tr>
											<tr>
												<td class="px-4 py-4 text-neutral-900 dark:text-white text-sm font-medium"
													>Pull Ups</td
												>
												<td class="px-4 py-4 text-neutral-600 dark:text-neutral-400 text-sm"
													>3 x AMRAP</td
												>
												<td class="px-4 py-4 text-neutral-600 dark:text-neutral-400 text-sm">1</td>
												<td class="px-4 py-4 text-neutral-600 dark:text-neutral-400 text-sm"
													>Use assistance band if needed</td
												>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<!-- Phase 2 Action -->
							<div class="px-4 mt-4 flex justify-end">
								<button
									class="flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-[#1a190b] px-6 py-3 text-neutral-900 dark:text-white text-sm font-bold shadow-sm hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
								>
									<span class="material-symbols-outlined text-[20px]">download</span>
									Export to PDF
								</button>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	</body></html
>
