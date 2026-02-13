
export enum AppView {
  CHAT = 'CHAT',
  SETTINGS = 'SETTINGS',
  VIDEO = 'VIDEO',
  HISTORY = 'HISTORY',
  VALIDATOR = 'VALIDATOR'
}

export interface FatwaMessage {
  id: string;
  role: 'user' | 'model';
  content: string;
  timestamp: Date;
  // Added groundingSources to comply with Google Search grounding requirements
  groundingSources?: any[];
}

export interface KnowledgeSource {
  id: string;
  bookName: string;
  author?: string;
  category: 'طهارة' | 'صلاة' | 'معاملات' | 'أخرى';
}

export interface UserProfile {
  name: string;
  contact: string;
  onboarded: boolean;
}
