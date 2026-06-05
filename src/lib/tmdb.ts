import { Mood } from '@/types'
import { moodToGenres } from './moodMap'

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

export const getMoviesByMood = async (
  mood: Mood,
  mediaType: 'movie' | 'tv' = 'movie',
  page: number = 1
) => {
  const genres = moodToGenres[mood].join(',')
  const res = await fetch(
    `${BASE_URL}/discover/${mediaType}?api_key=${API_KEY}&with_genres=${genres}&sort_by=popularity.desc&page=${page}&vote_count.gte=100`
  )
  const data = await res.json()
  return data.results
}

export const searchMovies = async (query: string) => {
  const res = await fetch(
    `${BASE_URL}/search/multi?api_key=${API_KEY}&query=${query}`
  )
  const data = await res.json()
  return data.results.filter(
    (item: any) => item.media_type !== 'person'
  )
}

export const getMovieDetail = async (
  id: number,
  mediaType: 'movie' | 'tv'
) => {
  const res = await fetch(
    `${BASE_URL}/${mediaType}/${id}?api_key=${API_KEY}&append_to_response=videos,credits`
  )
  return res.json()
}

export const getImageUrl = (
  path: string,
  size: string = 'w500'
) => {
  if (!path) return '/placeholder.jpg'
  return `https://image.tmdb.org/t/p/${size}${path}`
}