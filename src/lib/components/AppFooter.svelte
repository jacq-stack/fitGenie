<script lang="ts">
	const year = new Date().getFullYear();
</script>

<footer
	class="border-t border-[#e6e6db] dark:border-[#3e3e32] py-12 px-4 sm:px-10 bg-white dark:bg-[#1a190b]"
>
	<div class="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
		<div class="flex items-center gap-2">
			<span class="material-symbols-outlined text-primary">fitness_center</span>
			<span class="font-bold text-text-main dark:text-white">FitGenie</span>
		</div>

		<div class="flex flex-wrap justify-center gap-8">
			<a
				class="text-text-muted hover:text-primary transition-colors text-sm font-medium"
				href="#privacy-policy">Privacy Policy</a
			>
			<a
				class="text-text-muted hover:text-primary transition-colors text-sm font-medium"
				href="#terms-of-service">Terms of Service</a
			>
			<a
				class="text-text-muted hover:text-primary transition-colors text-sm font-medium"
				href="#contact">Contact</a
			>
		</div>

		<p class="text-text-muted text-sm">© {year} FitGenie.</p>
	</div>
</footer>
