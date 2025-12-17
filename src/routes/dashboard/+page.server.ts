import type { PageServerLoad } from './$types';

// Dashboard now reads the workout plan from Web Storage on the client.
// We keep a minimal server load to clean up any legacy cookie and return no data.
export const load: PageServerLoad = async ({ cookies }) => {
    // Optional cleanup for older versions that used cookies
	cookies.delete('fitgenie_user_responses', { path: '/' });
    return {};
};
