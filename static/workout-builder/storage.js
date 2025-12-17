(function () {
	const COOKIE_NAME = 'fitgenie_user_responses';

	const safeParse = (value) => {
		try {
			return JSON.parse(value);
		} catch {
			return null;
		}
	};

	// Helper to get cookie value
	const getCookie = (name) => {
		const value = `; ${document.cookie}`;
		const parts = value.split(`; ${name}=`);
		if (parts.length === 2) {
			return parts.pop().split(';').shift();
		}
		return null;
	};

	const readState = () => {
		try {
			const cookieValue = getCookie(COOKIE_NAME);
			if (!cookieValue) return {};
			return safeParse(decodeURIComponent(cookieValue)) ?? {};
		} catch {
			return {};
		}
	};

	const writeState = (next) => {
		try {
			// Save to cookie (7 days expiry)
			document.cookie = `${COOKIE_NAME}=${encodeURIComponent(JSON.stringify(next))}; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Lax`;
		} catch {
			// Ignore storage failures
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
			// Clear cookie by setting max-age to 0
			document.cookie = `${COOKIE_NAME}=; path=/; max-age=0`;
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
		COOKIE_NAME,
		readState,
		setResponse,
		getResponse,
		bindTextarea,
		clear
	};
})();
