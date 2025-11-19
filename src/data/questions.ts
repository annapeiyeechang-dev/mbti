import { Question } from '../types/quiz';

export const questions: Question[] = [
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
    text: "When making decisions, you rely more on...",
    dimension: 'TF',
    options: [
      { text: "Logic and objective analysis", value: 'T' },
      { text: "Personal values and how it affects others", value: 'F' }
    ]
  },
  {
    id: 3,
    text: "You prefer to...",
    dimension: 'JP',
    options: [
      { text: "Plan things in advance and stick to schedules", value: 'J' },
      { text: "Keep your options open and be spontaneous", value: 'P' }
    ]
  },
  {
    id: 4,
    text: "When learning something new, you focus on...",
    dimension: 'SN',
    options: [
      { text: "Concrete facts and practical applications", value: 'S' },
      { text: "Theories, patterns, and future possibilities", value: 'N' }
    ]
  },
  {
    id: 5,
    text: "After a long week, you recharge by...",
    dimension: 'EI',
    options: [
      { text: "Going out and socializing with friends", value: 'E' },
      { text: "Staying home and enjoying alone time", value: 'I' }
    ]
  },
  {
    id: 6,
    text: "You're more interested in...",
    dimension: 'SN',
    options: [
      { text: "What is real and present", value: 'S' },
      { text: "What could be and future possibilities", value: 'N' }
    ]
  },
  {
    id: 7,
    text: "When someone is upset, you're more likely to...",
    dimension: 'TF',
    options: [
      { text: "Offer practical solutions to fix the problem", value: 'T' },
      { text: "Provide emotional support and empathy", value: 'F' }
    ]
  },
  {
    id: 8,
    text: "Your workspace is usually...",
    dimension: 'JP',
    options: [
      { text: "Organized and structured", value: 'J' },
      { text: "Flexible and adaptable to your mood", value: 'P' }
    ]
  },
  {
    id: 9,
    text: "You prefer conversations that are...",
    dimension: 'SN',
    options: [
      { text: "Practical and about real experiences", value: 'S' },
      { text: "Abstract and about ideas and concepts", value: 'N' }
    ]
  },
  {
    id: 10,
    text: "In group projects, you tend to...",
    dimension: 'EI',
    options: [
      { text: "Take charge and coordinate with everyone", value: 'E' },
      { text: "Work independently on your part", value: 'I' }
    ]
  },
  {
    id: 11,
    text: "You make decisions...",
    dimension: 'TF',
    options: [
      { text: "With your head (logic first)", value: 'T' },
      { text: "With your heart (feelings first)", value: 'F' }
    ]
  },
  {
    id: 12,
    text: "You prefer to...",
    dimension: 'JP',
    options: [
      { text: "Have things decided and settled", value: 'J' },
      { text: "Keep exploring new options", value: 'P' }
    ]
  }
];
