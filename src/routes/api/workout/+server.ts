import { json, type RequestHandler } from '@sveltejs/kit';
import { generateWorkoutPlan, type UserOnboardingData } from '$lib/services/openai';

/**
 * POST /api/workout
 * Generate a personalized workout plan based on user onboarding data
 */
export const POST: RequestHandler = async ({ request }) => {
	try {
		const userOnboardingData: UserOnboardingData = await request.json();

		// Validate required data
		if (!userOnboardingData.responses) {
			return json(
				{ error: 'Missing user onboarding responses' },
				{ status: 400 }
			);
		}

		// Generate workout plan using OpenAI
		const workoutPlan = await generateWorkoutPlan(userOnboardingData);

		return json({
			success: true,
			workoutPlan
		});
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
