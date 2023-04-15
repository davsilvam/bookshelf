import { FC } from 'react'

// components
import { CommentCard } from './'

// hooks
import { useComments } from '../hooks'

interface CommentsProps {
  id: number
}

export const CommentsContainer: FC<CommentsProps> = ({ id }) => {
  const { data: comments } = useComments(id)

  return (
    <section className="flex w-full flex-col gap-3 pb-6">
      <h3 className="text-xl">Comentários</h3>
      {comments && comments.length > 0 ? (
        comments?.map(comment => (
          <CommentCard comment={comment} key={comment.id} />
        ))
      ) : (
        <p className="font-semibold text-cadet">Sem comentários.</p>
      )}
    </section>
  )
}
