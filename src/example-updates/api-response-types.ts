// API response types:
interface Update {
  id: string
  user_id: string
  team_id: string
  period_start: string // YYYY-MM-DD
  period_end: string
  status: 'draft' | 'shared' | 'reviewed'
  sentiment?: string
  shared_at?: string
  reviewed_at?: string
  reviewed_by?: string
  created_at: string
  user: {
    name: string
    email: string
    pronouns?: string
    role?: string
  }
}

interface UpdateResponse {
  id: string
  update_id: string
  question_id: string
  response_text: string
  created_at: string
  question: {
    question_text: string
    question_type: string
  }
}

interface TeamMember {
  user_id: string
  team_id: string
  role: string
  user: {
    name: string
    email: string
    pronouns?: string
  }
}