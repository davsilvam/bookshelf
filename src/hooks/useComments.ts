// services
import { api } from '../services/api'
import { AxiosError } from 'axios'
import { useQuery } from '@tanstack/react-query'

// types
import { CommentResponse } from '../@types/tmdb'

// utils
import { MOVIE_REVIEWS_URL } from '../utils/apiEndpoints'

export function useComments(id: number) {
  async function getMovieComments() {
    try {
      const { data } = await api.get<CommentResponse>(MOVIE_REVIEWS_URL(id))
      return data.results
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.message)
      }
    }
  }

  const query = useQuery({
    queryKey: ['comments', id],
    queryFn: getMovieComments
  })

  return query
}
