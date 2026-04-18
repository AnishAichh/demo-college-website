-- Database Schema for HSOE College Website
-- Compatible with Neon PostgreSQL

-- Departments Table
CREATE TABLE IF NOT EXISTS departments (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  code TEXT NOT NULL UNIQUE,
  icon TEXT,
  description TEXT,
  students_count TEXT,
  labs_count INTEGER,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Programs Table
CREATE TABLE IF NOT EXISTS programs (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  subtitle TEXT,
  type TEXT NOT NULL, -- 'undergraduate', 'postgraduate', 'research'
  icon TEXT,
  color TEXT,
  description TEXT,
  duration TEXT,
  eligibility TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Program_Departments junction table
CREATE TABLE IF NOT EXISTS program_departments (
  id SERIAL PRIMARY KEY,
  program_id INTEGER REFERENCES programs(id) ON DELETE CASCADE,
  department_id INTEGER REFERENCES departments(id) ON DELETE CASCADE,
  UNIQUE(program_id, department_id)
);

-- Events Table
CREATE TABLE IF NOT EXISTS events (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  date TEXT NOT NULL,
  location TEXT,
  type TEXT, -- 'Cultural', 'Technical', 'Career', 'Alumni', etc.
  description TEXT,
  image_url TEXT,
  is_featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- News Table
CREATE TABLE IF NOT EXISTS news (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  date TEXT NOT NULL,
  category TEXT, -- 'Admissions', 'Achievements', 'Campus', 'Events', 'Research', 'Campus Life'
  description TEXT,
  image_url TEXT,
  is_featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Admissions Table
CREATE TABLE IF NOT EXISTS admissions (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  program TEXT NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'pending', -- 'pending', 'approved', 'rejected'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Placement Companies Table
CREATE TABLE IF NOT EXISTS placement_companies (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  logo_url TEXT,
  website TEXT,
  description TEXT,
  is_top_tier BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Placement Statistics Table
CREATE TABLE IF NOT EXISTS placement_stats (
  id SERIAL PRIMARY KEY,
  placement_percentage DECIMAL(5,2),
  highest_package TEXT,
  average_package TEXT,
  total_recruiters INTEGER,
  academic_year TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Research Areas Table
CREATE TABLE IF NOT EXISTS research_areas (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  image_url TEXT,
  is_featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Research Projects Table
CREATE TABLE IF NOT EXISTS research_projects (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  area_id INTEGER REFERENCES research_areas(id) ON DELETE CASCADE,
  funding_source TEXT,
  status TEXT, -- 'ongoing', 'completed', 'proposed'
  start_date DATE,
  end_date DATE,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Contact Enquiries Table (already exists, but adding for completeness)
CREATE TABLE IF NOT EXISTS contact_enquiries (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Faculty Table
CREATE TABLE IF NOT EXISTS faculty (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  department_id INTEGER REFERENCES departments(id) ON DELETE SET NULL,
  position TEXT, -- 'Professor', 'Associate Professor', 'Assistant Professor', etc.
  specialization TEXT,
  image_url TEXT,
  is_hod BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Hero Slides Table
CREATE TABLE IF NOT EXISTS hero_slides (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  subtitle TEXT,
  image_url TEXT NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_departments_code ON departments(code);
CREATE INDEX IF NOT EXISTS idx_programs_type ON programs(type);
CREATE INDEX IF NOT EXISTS idx_events_date ON events(date);
CREATE INDEX IF NOT EXISTS idx_news_date ON news(date);
CREATE INDEX IF NOT EXISTS idx_news_category ON news(category);
CREATE INDEX IF NOT EXISTS idx_admissions_status ON admissions(status);
CREATE INDEX IF NOT EXISTS idx_placement_companies_tier ON placement_companies(is_top_tier);
CREATE INDEX IF NOT EXISTS idx_research_areas_featured ON research_areas(is_featured);
CREATE INDEX IF NOT EXISTS idx_faculty_department ON faculty(department_id);
CREATE INDEX IF NOT EXISTS idx_hero_slides_active ON hero_slides(is_active);
CREATE INDEX IF NOT EXISTS idx_hero_slides_order ON hero_slides(sort_order);
