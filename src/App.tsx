import { FC } from 'react'
import { FavoritesProvider } from './contexts/FavoritesContext'
import { RouterPage } from './router'

export const App: FC = () => {
  return (
    <FavoritesProvider>
      <RouterPage />
    </FavoritesProvider>
  )
}
