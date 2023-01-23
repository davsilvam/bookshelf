import { createContext, FC, useContext, useState } from 'react'

interface FavoritesContext {
  favorites: number[]
  toogleFavorite: (id: number) => void
}

interface FavoritesProviderProps {
  children: React.ReactNode
}

const FavoritesContext = createContext<FavoritesContext | null>(null)

export const FavoritesProvider: FC<FavoritesProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<number[]>([315162])

  function toogleFavorite(id: number) {
    if (favorites.includes(id)) {
      return setFavorites(state => [...state.filter(item => item !== id)])
    }
    setFavorites(state => [...state, id])
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toogleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites(): FavoritesContext {
  const context = useContext(FavoritesContext)

  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesContext.')
  }

  return context
}
