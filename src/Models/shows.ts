export interface Show {
    id: number
    name: string
    genres: string[]
    status: string
    rating: { average?: number }
    image?: { medium: string }
    summary?: string
    cast?: Cast[]
}

export interface Cast {
    person: {
        id: number
        name: string
        image?: { medium: string }
    }
    character: {
        name: string
    }
}
