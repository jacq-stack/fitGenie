import OpenAI from 'openai';
import { env } from '$env/dynamic/private';

// Initialize OpenAI client
export const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY
});

// Types for user responses
export interface OnboardingResponse {
  step: number;
  question: string;
  answer: string;
}

export interface OnboardingResponses {
  fitnessLevel?: OnboardingResponse;
  primaryGoal?: OnboardingResponse;
  limitations?: OnboardingResponse;
  trainingDaysPerWeek?: OnboardingResponse;
  equipmentAccess?: OnboardingResponse;
  routinePreference?: OnboardingResponse;
}

export interface UserOnboardingData {
  updatedAt: string;
  responses: OnboardingResponses;
}

// Types for workout plan
export interface Exercise {
  name: string;
  sets: number;
  reps: number;
  rir: string;
  notes: string;
}

export interface Phase {
  phase: string;
  goal: string;
  frequency: string;
  exercises: Exercise[];
  progression: string;
}

export interface WorkoutPlan {
  group: string;
  phases: Phase[];
}

// System prompt for workout generation
const WORKOUT_GENERATION_PROMPT = `# Instruction
You are a resistance training expert. Based on the user's answers to the onboarding questions, create a personalized workout plan using the exercises and phases from the provided resistance training guidelines. The workout plan should follow the structure of the example provided and return the response in JSON format.

# Context
Use the following resistance training guidelines to create the workout plan:

1. **Familiarization Phase**: For beginners or those recovering from injuries. Focus on basic exercises, proper form, and gradual progression.
2. **Infinite Prescription Phase**: For intermediate users. Structured workouts with compound movements and progressive overload.
3. **Advanced Prescription Phase**: For experienced lifters seeking performance gains.

Include exercises from the following categories:
- Vertical Push: Dumbbell press, Banded press, Shoulder press machine, Barbell press
- Vertical Pull: Band pull down, Lat pull down machine, Jumping pull up, Strict pull up, Weighted pull up
- Horizontal Push: Wall push up, Chest press machine, Kneeling push up, Band-assisted push up, Push up, Weighted push up, Bench press
- Horizontal Pull: Standing row, Banded row, Row machine, Inverted row, Barbell row
- Hip Hinge: Good morning, Banded good morning, Side-handle deadlift, Single leg deadlift, Barbell deadlift
- Squat: Assisted squat, Chair squat, Air squat, Banded squat, Split squat, Step-up, Leg press machine, Barbell squat

# Example Workout Plan
{
  "group": "People New to Resistance Training Recovering from a Leg Injury",
  "phases": [
    {
      "phase": "Familiarization (Modified)",
      "goal": "Maintain upper body strength and gently reintroduce leg exercises.",
      "frequency": "2 days/week",
      "exercises": [
        {
          "name": "Dumbbell Press",
          "sets": 1,
          "reps": 6,
          "rir": "2-4",
          "notes": "Seated to reduce leg strain."
        },
        {
          "name": "Band Pull Down",
          "sets": 1,
          "reps": 6,
          "rir": "2-4",
          "notes": "Focus on scapular retraction."
        },
        {
          "name": "Wall Push Up",
          "sets": 1,
          "reps": 6,
          "rir": "2-4",
          "notes": "Minimal leg engagement."
        },
        {
          "name": "Banded Row",
          "sets": 1,
          "reps": 6,
          "rir": "2-4",
          "notes": "Strengthen upper back."
        },
        {
          "name": "Seated Leg Extension",
          "sets": 1,
          "reps": 8,
          "rir": "2-4",
          "notes": "Light weight, controlled movement."
        },
        {
          "name": "Glute Bridge",
          "sets": 1,
          "reps": 8,
          "rir": "2-4",
          "notes": "Strengthen glutes without knee strain."
        }
      ],
      "progression": "Increase sets to 3 over 4 weeks. If leg exercises are pain-free, progress to Infinite Prescription (Modified)."
    },
    {
      "phase": "Infinite Prescription (Modified)",
      "goal": "Rebuild leg strength safely.",
      "frequency": "3 days/week",
      "exercises": [
        {
          "name": "Dumbbell Shoulder Press",
          "sets": 3,
          "reps": 6,
          "rir": "2-4",
          "notes": "Seated for stability."
        },
        {
          "name": "Lat Pull Down",
          "sets": 3,
          "reps": 6,
          "rir": "2-4",
          "notes": "Wide grip to engage lats."
        },
        {
          "name": "Incline Dumbbell Press",
          "sets": 3,
          "reps": 6,
          "rir": "2-4",
          "notes": "Reduces shoulder strain."
        },
        {
          "name": "Seated Cable Row",
          "sets": 3,
          "reps": 6,
          "rir": "2-4",
          "notes": "Neutral spine, controlled pull."
        },
        {
          "name": "Step-Ups",
          "sets": 3,
          "reps": 6,
          "rir": "2-4",
          "notes": "Use a low bench, controlled pace."
        },
        {
          "name": "Bodyweight Squat",
          "sets": 3,
          "reps": 6,
          "rir": "2-4",
          "notes": "Only if pain-free, shallow depth."
        }
      ],
      "progression": "Gradually increase depth and weight for leg exercises. Avoid pain or discomfort in the injured leg."
    }
  ]
}

# Important
- Respond ONLY with valid JSON matching the WorkoutPlan structure
- Do not include any markdown formatting or code blocks
- Ensure all exercises are appropriate for the user's fitness level, equipment access, and any limitations
- Consider the user's primary goal when designing the workout plan
- Match the training frequency to the user's commitment level
- Select only one exercise per category and do not provide alternative options.
- Use a fixed frequency for the workout plan.
`;


export async function generateWorkoutPlan(
  userOnboardingData: UserOnboardingData
): Promise<WorkoutPlan> {
  console.log('\n=== Starting Workout Generation ===');
  console.log('User Onboarding Data:', JSON.stringify(userOnboardingData, null, 2));

  try {
    console.log('\n📞 Calling OpenAI API with model: gpt-5-mini');
    const startTime = Date.now();

    const completion = await openai.chat.completions.create({
      model: 'gpt-5-mini',
      messages: [
        {
          role: 'system',
          content: WORKOUT_GENERATION_PROMPT
        },
        {
          role: 'user',
          content: `Generate a personalized workout plan based on the following user responses:\n\n${JSON.stringify(userOnboardingData, null, 2)}`
        }
      ],
      response_format: { type: 'json_object' }
    });

    const elapsedTime = Date.now() - startTime;
    console.log(`\n✅ OpenAI API response received in ${elapsedTime}ms`);
    console.log('Tokens used:', {
      prompt: completion.usage?.prompt_tokens,
      completion: completion.usage?.completion_tokens,
      total: completion.usage?.total_tokens
    });

    const content = completion.choices[0]?.message?.content;

    if (!content) {
      console.error('❌ No content in OpenAI response');
      throw new Error('No response from OpenAI');
    }

    console.log('\n📝 Raw OpenAI Response:');
    console.log(content);

    const workoutPlan: WorkoutPlan = JSON.parse(content);

    console.log('\n🏋️ Generated Workout Plan:');
    console.log(JSON.stringify(workoutPlan, null, 2));
    console.log('\n=== Workout Generation Complete ===\n');

    return workoutPlan;
  } catch (error) {
    console.error('\n❌ Error generating workout plan:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    throw new Error('Failed to generate workout plan');
  }
}
