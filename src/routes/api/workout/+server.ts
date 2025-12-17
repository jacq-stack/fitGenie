import { json, type RequestHandler } from '@sveltejs/kit';
import { generateWorkoutPlan, type UserOnboardingData, type WorkoutPlan } from '$lib/services/openai';

const USER_RESPONSES_COOKIE = 'fitgenie_user_responses';
const WORKOUT_PLAN_COOKIE = 'fitgenie_workout_plan';

const safeParseJson = (value: string): unknown => {
	try {
		return JSON.parse(value);
	} catch {
		return null;
	}
};

/**
 * POST /api/workout
 * Generate a personalized workout plan based on user onboarding data.
 *
 * Updated: Returns JSON only and no longer stores the workout plan in cookies.
 */
export const POST: RequestHandler = async ({ request, cookies }) => {
	try {
		let userOnboardingData: UserOnboardingData | null = null;

		// Prefer explicit request body if provided
		try {
			userOnboardingData = (await request.json()) as UserOnboardingData;
		} catch {
			// No/invalid body — we'll try cookies below
		}

		// Fallback to cookie (set by static/workout-builder/storage.js)
		if (!userOnboardingData?.responses) {
			const fromCookie = cookies.get(USER_RESPONSES_COOKIE);
			if (fromCookie) {
				const parsed = safeParseJson(decodeURIComponent(fromCookie));
				if (parsed && typeof parsed === 'object') {
					userOnboardingData = parsed as UserOnboardingData;
				}
			}
		}

		if (!userOnboardingData?.responses || Object.keys(userOnboardingData.responses).length === 0) {
			return json({ error: 'Missing user onboarding responses' }, { status: 400 });
		}

  // Generate workout plan using OpenAI
  const workoutPlan: WorkoutPlan = await generateWorkoutPlan(userOnboardingData);

  // IMPORTANT: Do NOT store the workout plan in cookies anymore.
  // Optional cleanup: delete legacy cookie if it exists.
  cookies.delete(WORKOUT_PLAN_COOKIE, { path: '/' });

  return json({ success: true, workoutPlan });
	} catch (error) {
		console.error('Error in workout generation endpoint:', error);
		return json(
			{
				error: 'Failed to generate workout plan',
				message: error instanceof Error ? error.message : 'Unknown error'
			},
			{ status: 500 }
		);
	}
};
