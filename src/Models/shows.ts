export type ShowArray = Show[]

export interface Show {
    id: number
    name: string
    genres: string[]
    status: string
    rating: { average?: number }
    image?: { medium: string }
    summary?: string
}
