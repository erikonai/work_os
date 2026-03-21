export type PersonaId = "ceo" | "cro" | "cmo" | "cfo" | "cto" | "cpo" | "ciso" | "general";

export interface Persona {
  id: PersonaId;
  title: string;
  fullTitle: string;
  prefix: string;
  description: string;
  skills: Skill[];
  leaders: Leader[];
  feedItems: FeedItem[];
  color: string;
}

export interface Skill {
  id: string;
  name: string;
  description: string;
  persona: PersonaId;
  source: "custom" | "community";
  path: string;
  isDuplicate?: boolean;
  duplicateOf?: string;
}

export interface Leader {
  name: string;
  title: string;
  company: string;
  domain: string;
  linkedinUrl?: string;
  twitterHandle?: string;
  reason: string;
}

export interface FeedItem {
  id: string;
  timestamp: string;
  persona: PersonaId;
  leader: string;
  source: string;
  title: string;
  url?: string;
  summary: string;
  type: "article" | "social" | "report" | "podcast" | "interview";
}

export interface DuplicateGroup {
  canonical: string;
  duplicates: string[];
  reason: string;
}
