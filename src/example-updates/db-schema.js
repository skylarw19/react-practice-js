// database schema:
// -- Users
// CREATE TABLE users (
//     id UUID PRIMARY KEY,
//     name VARCHAR(255) NOT NULL,
//     email VARCHAR(255) UNIQUE NOT NULL,
//     pronouns VARCHAR(100),
//     role VARCHAR(100),
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );

// -- Teams
// CREATE TABLE teams (
//     id UUID PRIMARY KEY,
//     name VARCHAR(255) NOT NULL,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );

// -- Team Members
// CREATE TABLE team_members (
//     team_id UUID REFERENCES teams(id),
//     user_id UUID REFERENCES users(id),
//     role VARCHAR(100),
//     PRIMARY KEY (team_id, user_id)
// );

// -- Updates
// CREATE TABLE updates (
//     id UUID PRIMARY KEY,
//     user_id UUID REFERENCES users(id),
//     team_id UUID REFERENCES teams(id),
//     period_start DATE NOT NULL,
//     period_end DATE NOT NULL,
//     status VARCHAR(50) DEFAULT 'draft', -- draft, shared, reviewed
//     sentiment VARCHAR(50),
//     shared_at TIMESTAMP,
//     reviewed_at TIMESTAMP,
//     reviewed_by UUID REFERENCES users(id),
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );

// -- Update Responses
// CREATE TABLE update_responses (
//     id UUID PRIMARY KEY,
//     update_id UUID REFERENCES updates(id),
//     question_id UUID REFERENCES update_questions(id),
//     response_text TEXT,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );

// -- Update Questions
// CREATE TABLE update_questions (
//     id UUID PRIMARY KEY,
//     question_text TEXT NOT NULL,
//     question_type VARCHAR(50), -- text, sentiment, etc
//     is_active BOOLEAN DEFAULT true,
//     sort_order INTEGER
// );