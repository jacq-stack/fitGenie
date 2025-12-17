<script lang="ts">
  import { onMount } from 'svelte';

  onMount(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }

    try {
      (window as any).fitgenieWorkoutBuilderStorage?.bindTextarea({
        textareaId: 'training-days',
        responseKey: 'trainingDaysPerWeek',
        questionText: 'How many days per week are you able to commit to resistance training?',
        stepNumber: 4,
        saveOnIds: ['next-step']
      });
    } catch (e) {
      console.error('Failed to initialize workout builder storage binding (step 4):', e);
    }
  });
</script>

<svelte:head>
  <title>FitGenie Onboarding</title>
</svelte:head>

<div class="bg-background-light dark:bg-background-dark text-text-main dark:text-text-light font-display antialiased transition-colors duration-200">
  <div class="relative flex min-h-screen flex-col overflow-x-hidden">
      <!-- Header -->
      <header class="flex items-center justify-between px-6 py-5 md:px-10 lg:px-40">
        <div class="flex items-center gap-3">
          <div
            class="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-text-main"
          >
            <span class="material-symbols-outlined text-2xl">fitness_center</span>
          </div>
          <h2 class="text-xl font-bold leading-tight tracking-tight">FitGenie</h2>
        </div>
        <a
          href="/"
          class="group flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-colors hover:bg-black/5 dark:hover:bg-white/10 text-muted-light dark:text-muted-dark hover:text-text-main dark:hover:text-text-light"
        >
          <span>Skip</span>
          <span
            class="material-symbols-outlined text-lg transition-transform group-hover:translate-x-0.5"
            >arrow_forward</span
          >
        </a>
      </header>
      <!-- Main Content -->
      <main class="flex flex-1 flex-col items-center justify-center px-4 py-8 md:px-10">
        <div class="flex w-full max-w-[640px] flex-col gap-10">
          <!-- Progress Section -->
          <div class="flex flex-col gap-3">
            <div class="flex items-end justify-between px-1">
              <div class="flex flex-col">
                <span
                  class="text-xs font-bold uppercase tracking-wider text-muted-light dark:text-muted-dark"
                  >Step 4 of 6</span
                >
                <span class="text-sm font-medium text-text-main dark:text-text-light"
                  >Frequency</span
                >
              </div>
              <span class="text-sm font-bold text-text-main dark:text-text-light">67%</span>
            </div>
            <div
              class="h-2 w-full overflow-hidden rounded-full bg-border-light dark:bg-border-dark"
            >
              <div class="h-full w-[66.666%] rounded-full bg-primary"></div>
            </div>
          </div>
          <!-- Question Section -->
          <div class="flex flex-col gap-4">
            <h1
              class="text-3xl font-black leading-tight tracking-tight text-text-main dark:text-text-light md:text-4xl lg:text-5xl"
            >
              How many days per week are you able to commit to resistance training?
            </h1>
            <p class="text-lg font-normal leading-relaxed text-muted-light dark:text-muted-dark">
              We’ll tailor the weekly split so it fits your schedule and recovery.
            </p>
          </div>
          <!-- Input Section -->
          <div class="flex flex-col gap-6">
            <div class="relative group">
              <label class="sr-only" for="training-days">Your schedule response</label>
              <div
                class="absolute right-4 top-4 z-10 text-muted-light/50 dark:text-muted-dark/50 group-focus-within:text-primary transition-colors"
              >
                <span class="material-symbols-outlined">edit_note</span>
              </div>
              <textarea
                class="min-h-[200px] w-full resize-none rounded-lg border-2 border-border-light bg-surface-light p-6 text-lg leading-relaxed text-text-main shadow-sm outline-none transition-all placeholder:text-muted-light/60 focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-border-dark dark:bg-surface-dark dark:text-text-light dark:placeholder:text-muted-dark/50"
                id="training-days"
                placeholder="- 1-2 days per week.
- 3-4 days per week.
- 5+ days per week."
              ></textarea>
              <p class="mt-3 text-sm text-muted-light dark:text-muted-dark px-2">
                <span class="material-symbols-outlined align-middle text-base mr-1">info</span>
                If you’re unsure, pick the option you can do consistently.
              </p>
            </div>
            <!-- Action Buttons -->
            <div class="flex flex-col items-center justify-between gap-4 pt-4 sm:flex-row">
              <a
                id="back-step"
                href="/workout-builder/3"
                class="w-full sm:w-auto text-sm font-bold text-muted-light dark:text-muted-dark hover:text-text-main dark:hover:text-text-light transition-colors py-3 px-6 rounded-full text-center"
              >
                Back
              </a>
              <a
                id="next-step"
                href="/workout-builder/5"
                class="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold tracking-wide text-[#181811] shadow-lg shadow-primary/20 transition-transform hover:scale-[1.02] active:scale-[0.98] sm:w-auto sm:min-w-[200px]"
              >
                <span>Next Step</span>
                <span class="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </main>
      <!-- Decorative Background Element (Subtle) -->
      <div
        class="pointer-events-none fixed -bottom-40 -right-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl dark:bg-primary/5"
      ></div>
      <div
        class="pointer-events-none fixed -left-40 top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl dark:bg-primary/5"
      ></div>
  </div>
</div>
