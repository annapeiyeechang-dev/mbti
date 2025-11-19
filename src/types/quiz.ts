export interface Question {
  id: number;
  text: string;
  dimension: 'EI' | 'SN' | 'TF' | 'JP';
  options: {
    text: string;
    value: 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
  }[];
}

export interface PersonalityResult {
  type: string;
  title: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  careers: string[];
  emoji: string;
  color: string;
  funFact: string;
}
