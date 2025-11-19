import { Question } from '../types/quiz';

export const questions: Question[] = [
  // Extraversion vs Introversion (E/I) - 8 questions
  {
    id: 1,
    text: "At a party, you're more likely to...",
    dimension: 'EI',
    options: [
      { text: "Mingle with everyone and make new friends", value: 'E' },
      { text: "Stick with a small group of close friends", value: 'I' }
    ]
  },
  {
    id: 2,
    text: "After a long week, you recharge by...",
    dimension: 'EI',
    options: [
      { text: "Going out and socializing with friends", value: 'E' },
      { text: "Staying home and enjoying alone time", value: 'I' }
    ]
  },
  {
    id: 3,
    text: "In group projects, you tend to...",
    dimension: 'EI',
    options: [
      { text: "Take charge and coordinate with everyone", value: 'E' },
      { text: "Work independently on your part", value: 'I' }
    ]
  },
  {
    id: 4,
    text: "When meeting new people, you...",
    dimension: 'EI',
    options: [
      { text: "Feel energized and excited", value: 'E' },
      { text: "Feel drained and need recovery time", value: 'I' }
    ]
  },
  {
    id: 5,
    text: "Your ideal weekend involves...",
    dimension: 'EI',
    options: [
      { text: "Multiple social activities and events", value: 'E' },
      { text: "Quiet time with a book or hobby", value: 'I' }
    ]
  },
  {
    id: 6,
    text: "In conversations, you prefer to...",
    dimension: 'EI',
    options: [
      { text: "Think out loud and talk through ideas", value: 'E' },
      { text: "Think things through before speaking", value: 'I' }
    ]
  },
  {
    id: 7,
    text: "You feel most comfortable...",
    dimension: 'EI',
    options: [
      { text: "Being the center of attention", value: 'E' },
      { text: "Observing from the sidelines", value: 'I' }
    ]
  },
  {
    id: 8,
    text: "When working on a problem, you prefer to...",
    dimension: 'EI',
    options: [
      { text: "Brainstorm with others", value: 'E' },
      { text: "Work through it alone first", value: 'I' }
    ]
  },

  // Sensing vs Intuition (S/N) - 8 questions
  {
    id: 9,
    text: "When learning something new, you focus on...",
    dimension: 'SN',
    options: [
      { text: "Concrete facts and practical applications", value: 'S' },
      { text: "Theories, patterns, and future possibilities", value: 'N' }
    ]
  },
  {
    id: 10,
    text: "You're more interested in...",
    dimension: 'SN',
    options: [
      { text: "What is real and present", value: 'S' },
      { text: "What could be and future possibilities", value: 'N' }
    ]
  },
  {
    id: 11,
    text: "You prefer conversations that are...",
    dimension: 'SN',
    options: [
      { text: "Practical and about real experiences", value: 'S' },
      { text: "Abstract and about ideas and concepts", value: 'N' }
    ]
  },
  {
    id: 12,
    text: "When reading instructions, you...",
    dimension: 'SN',
    options: [
      { text: "Follow them step-by-step carefully", value: 'S' },
      { text: "Skim them and figure it out as you go", value: 'N' }
    ]
  },
  {
    id: 13,
    text: "You trust...",
    dimension: 'SN',
    options: [
      { text: "Experience and proven methods", value: 'S' },
      { text: "Intuition and innovative approaches", value: 'N' }
    ]
  },
  {
    id: 14,
    text: "When describing something, you focus on...",
    dimension: 'SN',
    options: [
      { text: "Specific details and facts", value: 'S' },
      { text: "The big picture and overall meaning", value: 'N' }
    ]
  },
  {
    id: 15,
    text: "You're more drawn to...",
    dimension: 'SN',
    options: [
      { text: "Practical, hands-on activities", value: 'S' },
      { text: "Theoretical and imaginative pursuits", value: 'N' }
    ]
  },
  {
    id: 16,
    text: "When solving problems, you prefer...",
    dimension: 'SN',
    options: [
      { text: "Tried-and-true solutions", value: 'S' },
      { text: "Novel and creative approaches", value: 'N' }
    ]
  },

  // Thinking vs Feeling (T/F) - 8 questions
  {
    id: 17,
    text: "When making decisions, you rely more on...",
    dimension: 'TF',
    options: [
      { text: "Logic and objective analysis", value: 'T' },
      { text: "Personal values and how it affects others", value: 'F' }
    ]
  },
  {
    id: 18,
    text: "When someone is upset, you're more likely to...",
    dimension: 'TF',
    options: [
      { text: "Offer practical solutions to fix the problem", value: 'T' },
      { text: "Provide emotional support and empathy", value: 'F' }
    ]
  },
  {
    id: 19,
    text: "You make decisions...",
    dimension: 'TF',
    options: [
      { text: "With your head (logic first)", value: 'T' },
      { text: "With your heart (feelings first)", value: 'F' }
    ]
  },
  {
    id: 20,
    text: "In disagreements, you value...",
    dimension: 'TF',
    options: [
      { text: "Being right and logical", value: 'T' },
      { text: "Maintaining harmony and understanding", value: 'F' }
    ]
  },
  {
    id: 21,
    text: "When giving feedback, you prioritize...",
    dimension: 'TF',
    options: [
      { text: "Honesty and directness", value: 'T' },
      { text: "Kindness and tact", value: 'F' }
    ]
  },
  {
    id: 22,
    text: "You're more motivated by...",
    dimension: 'TF',
    options: [
      { text: "Achievement and competence", value: 'T' },
      { text: "Helping others and making connections", value: 'F' }
    ]
  },
  {
    id: 23,
    text: "When evaluating ideas, you focus on...",
    dimension: 'TF',
    options: [
      { text: "Whether they're logical and efficient", value: 'T' },
      { text: "How they impact people and relationships", value: 'F' }
    ]
  },
  {
    id: 24,
    text: "You're better at...",
    dimension: 'TF',
    options: [
      { text: "Analyzing situations objectively", value: 'T' },
      { text: "Understanding people's emotions", value: 'F' }
    ]
  },

  // Judging vs Perceiving (J/P) - 8 questions
  {
    id: 25,
    text: "You prefer to...",
    dimension: 'JP',
    options: [
      { text: "Plan things in advance and stick to schedules", value: 'J' },
      { text: "Keep your options open and be spontaneous", value: 'P' }
    ]
  },
  {
    id: 26,
    text: "Your workspace is usually...",
    dimension: 'JP',
    options: [
      { text: "Organized and structured", value: 'J' },
      { text: "Flexible and adaptable to your mood", value: 'P' }
    ]
  },
  {
    id: 27,
    text: "You prefer to...",
    dimension: 'JP',
    options: [
      { text: "Have things decided and settled", value: 'J' },
      { text: "Keep exploring new options", value: 'P' }
    ]
  },
  {
    id: 28,
    text: "When starting a project, you...",
    dimension: 'JP',
    options: [
      { text: "Create a detailed plan first", value: 'J' },
      { text: "Jump in and figure it out as you go", value: 'P' }
    ]
  },
  {
    id: 29,
    text: "Deadlines make you feel...",
    dimension: 'JP',
    options: [
      { text: "Motivated and focused", value: 'J' },
      { text: "Stressed and constrained", value: 'P' }
    ]
  },
  {
    id: 30,
    text: "You prefer a lifestyle that is...",
    dimension: 'JP',
    options: [
      { text: "Structured with clear routines", value: 'J' },
      { text: "Flexible and open to change", value: 'P' }
    ]
  },
  {
    id: 31,
    text: "When making plans with friends, you...",
    dimension: 'JP',
    options: [
      { text: "Schedule everything in advance", value: 'J' },
      { text: "Prefer to decide in the moment", value: 'P' }
    ]
  },
  {
    id: 32,
    text: "You feel most satisfied when...",
    dimension: 'JP',
    options: [
      { text: "Tasks are completed and checked off", value: 'J' },
      { text: "You have freedom to explore new things", value: 'P' }
    ]
  }
];
