-- WorkOS Dashboard Schema
-- Run this in your Supabase SQL editor to set up the database

-- Persona knowledge entries scraped from the web
CREATE TABLE IF NOT EXISTS knowledge_entries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  persona TEXT NOT NULL CHECK (persona IN ('ceo','cro','cmo','cfo','cto','cpo','ciso','general')),
  leader_name TEXT NOT NULL,
  source_type TEXT NOT NULL CHECK (source_type IN ('article','social','report','podcast','interview')),
  source_url TEXT,
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  content_hash TEXT NOT NULL UNIQUE, -- SHA-256 for deduplication
  scraped_at TIMESTAMPTZ DEFAULT now(),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Skill-to-persona mappings (mirrors SKILL_REGISTRY but allows runtime updates)
CREATE TABLE IF NOT EXISTS skill_mappings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  skill_id TEXT NOT NULL UNIQUE,
  skill_name TEXT NOT NULL,
  description TEXT,
  persona TEXT NOT NULL CHECK (persona IN ('ceo','cro','cmo','cfo','cto','cpo','ciso','general')),
  source TEXT NOT NULL CHECK (source IN ('custom','community')),
  path TEXT NOT NULL,
  is_duplicate BOOLEAN DEFAULT false,
  duplicate_of TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Feed items for the terminal display
CREATE TABLE IF NOT EXISTS feed_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  persona TEXT NOT NULL CHECK (persona IN ('ceo','cro','cmo','cfo','cto','cpo','ciso','general')),
  leader_name TEXT NOT NULL,
  source TEXT NOT NULL,
  title TEXT NOT NULL,
  url TEXT,
  summary TEXT NOT NULL,
  item_type TEXT NOT NULL CHECK (item_type IN ('article','social','report','podcast','interview')),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_knowledge_persona ON knowledge_entries(persona);
CREATE INDEX IF NOT EXISTS idx_knowledge_leader ON knowledge_entries(leader_name);
CREATE INDEX IF NOT EXISTS idx_knowledge_hash ON knowledge_entries(content_hash);
CREATE INDEX IF NOT EXISTS idx_feed_persona ON feed_items(persona);
CREATE INDEX IF NOT EXISTS idx_feed_created ON feed_items(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_skills_persona ON skill_mappings(persona);

-- Enable Row Level Security
ALTER TABLE knowledge_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE skill_mappings ENABLE ROW LEVEL SECURITY;
ALTER TABLE feed_items ENABLE ROW LEVEL SECURITY;

-- Public read access (dashboard is read-only for viewers)
CREATE POLICY "Public read access" ON knowledge_entries FOR SELECT USING (true);
CREATE POLICY "Public read access" ON skill_mappings FOR SELECT USING (true);
CREATE POLICY "Public read access" ON feed_items FOR SELECT USING (true);

-- Service role can insert/update (API routes use service key)
CREATE POLICY "Service role write" ON knowledge_entries FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role write" ON skill_mappings FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role write" ON feed_items FOR ALL USING (true) WITH CHECK (true);
