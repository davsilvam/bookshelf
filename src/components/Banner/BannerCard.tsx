import { ChevronRight, Star } from 'lucide-react'
import { Movie } from 'types/api'
import { BannerTag } from './BannerTag'

interface BannerCardProps {
  movie: Movie
}

export function BannerCard({ movie }: BannerCardProps) {
  return (
    <div
      className={`flex h-full flex-col justify-end gap-5 bg-opacity-75 bg-cover bg-top px-10 py-8 shadow-banner`}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      <div className="flex items-center gap-3">
        <BannerTag>🔥 Bombando</BannerTag>
        {movie.vote_average > 8.5 && <BannerTag>⭐ Queridinho</BannerTag>}
      </div>

      <strong className="font-alt text-7xl uppercase text-bunker-50">
        {movie.title}
      </strong>

      <div className="flex items-center gap-10">
        <button className="flex items-center gap-1 rounded-lg bg-bunker-50 px-8 py-3 font-semibold text-bunker-950">
          Sobre o filme <ChevronRight className="h-4 w-4" />
        </button>

        <div className="mt-2 flex items-center gap-5 font-alt text-4xl font-medium text-bunker-50">
          <Star className="mb-1.5 h-8 w-8 fill-pizazz text-pizazz" />
          {movie.vote_average}
        </div>
      </div>
    </div>
  )
}
