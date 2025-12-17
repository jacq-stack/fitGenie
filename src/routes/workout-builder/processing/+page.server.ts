import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
	// Fast redirects only — do NOT call OpenAI here.
	// The client page will load, show animations, and trigger generation via /api/workout.
	const existingPlan = cookies.get('fitgenie_workout_plan');
	if (existingPlan) {
		throw redirect(303, '/dashboard');
	}

	const userResponsesCookie = cookies.get('fitgenie_user_responses');
	if (!userResponsesCookie) {
		throw redirect(303, '/workout-builder/1');
	}

	return {};
};
