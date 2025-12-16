(function () {
	const STORAGE_KEY = 'fitgenie.workout_builder.v1';

	const safeParse = (value) => {
		try {
			return JSON.parse(value);
		} catch {
			return null;
		}
	};

	const readState = () => {
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			return safeParse(raw ?? '{}') ?? {};
		} catch {
			return {};
		}
	};

	const writeState = (next) => {
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
		} catch {
			// Ignore storage failures (e.g., private browsing / quota / disabled)
		}
	};

	const setResponse = ({ responseKey, stepNumber, questionText, answer }) => {
		const current = readState();
		const next = {
			...current,
			updatedAt: new Date().toISOString(),
			responses: {
				...(current.responses ?? {}),
				[responseKey]: {
					step: stepNumber,
					question: questionText,
					answer: answer ?? ''
				}
			}
		};
		writeState(next);
	};

	const getResponse = (responseKey) => {
		const state = readState();
		return state?.responses?.[responseKey] ?? null;
	};

	const clear = () => {
		try {
			localStorage.removeItem(STORAGE_KEY);
		} catch {
			// ignore
		}
	};

	const bindTextarea = ({ textareaId, responseKey, questionText, stepNumber, saveOnIds = [] }) => {
		const textarea = document.getElementById(textareaId);
		if (!(textarea instanceof HTMLTextAreaElement)) return;

		const save = () => {
			setResponse({
				responseKey,
				stepNumber,
				questionText,
				answer: textarea.value
			});
		};

		// Hydrate
		const saved = getResponse(responseKey);
		if (saved) textarea.value = saved.answer ?? '';

		textarea.addEventListener('input', save);
		textarea.addEventListener('blur', save);

		for (const id of saveOnIds) {
			const el = document.getElementById(id);
			el?.addEventListener('click', save);
		}

		window.addEventListener('beforeunload', save);
	};

	window.fitgenieWorkoutBuilderStorage = {
		STORAGE_KEY,
		readState,
		setResponse,
		getResponse,
		bindTextarea,
		clear
	};
})();
