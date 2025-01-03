API endpoints (in REST):
interface UpdateAPI {
  // Updates Management
  GET /api/v1/updates
    Query params: 
      team_id?: string
      status?: 'draft' | 'shared' | 'reviewed'
      start_date?: string
      end_date?: string
      limit?: number
      offset?: number
    Returns: {
      updates: Update[]
      total: number
    }

  GET /api/v1/updates/:id
    Returns: Update & {
      responses: UpdateResponse[]
    }

  POST /api/v1/updates
    Body: {
      team_id: string
      period_start: string // YYYY-MM-DD
      period_end: string
      responses: {
        question_id: string
        response_text: string
      }[]
      sentiment?: string
    }

  PATCH /api/v1/updates/:id
    Body: {
      status?: 'shared' | 'reviewed'
      responses?: {
        question_id: string
        response_text: string
      }[]
      sentiment?: string
    }

  // Team Management
  GET /api/v1/teams/:id/members
    Returns: TeamMember[]

  GET /api/v1/teams/:id/updates
    Query params: same as GET /updates
    Returns: {
      updates: Update[]
      total: number
    }
}