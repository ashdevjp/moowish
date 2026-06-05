export interface Movie {
  id: number
  title: string
  name?: string
  overview: string
  poster_path: string
  backdrop_path: string
  vote_average: number
  release_date?: string
  first_air_date?: string
  genre_ids: number[]
  media_type?: string
}

export interface MovieDetail extends Movie {
  genres: { id: number; name: string }[]
  runtime?: number
  number_of_seasons?: number
  status: string
  tagline?: string
  videos?: {
    results: {
      key: string
      type: string
      site: string
    }[]
  }
  credits?: {
    cast: {
      id: number
      name: string
      character: string
      profile_path: string
    }[]
  }
}

export type Mood =
  | 'happy'
  | 'sad'
  | 'stressed'
  | 'bored'
  | 'exhausted'
  | 'excited'
  | 'chill'
  | 'motivated'

export interface MoodConfig {
  emoji: string
  label: string
  description: string
  color: string
  bgColor: string
  cowLine: string
}

export interface WatchlistItem {
  id: string
  movie_id: number
  movie_title: string
  poster_path: string
  added_at: string
  status: 'want_to_watch' | 'watched'
}