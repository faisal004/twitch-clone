'use client'
import { onBlock } from '@/actions/block'
import { onFollow, onUnfollow } from '@/actions/follow'
import { Button } from '@/components/ui/button'
import { useTransition } from 'react'
import { toast } from 'sonner'
interface ActionProps {
  isFollowing: boolean
  userId: string
}
const Actions = ({ isFollowing, userId }: ActionProps) => {
  const [isPending, startTransition] = useTransition()
  const handleFollow = () => {
    startTransition(() => {
      onFollow(userId)
        .then((data) =>
          toast.success(`You are now following ${data.following.username}`),
        )
        .catch(() => toast.error('Something went wrong'))
    })
  }
  const handleUnFollow = () => {
    startTransition(() => {
      onUnfollow(userId)
        .then((data) =>
          toast.success(`You have unfollowed ${data.following.username}`),
        )
        .catch(() => toast.error('Something went wrong'))
    })
  }
  const onClick = () => {
    if (isFollowing) {
      handleUnFollow()
    } else {
      handleFollow()
    }
  }
  const handleBlock = () => {
    startTransition(() => {
      onBlock(userId)
        .then((data) =>
          toast.success(`Blocked the user ${data?.blocked.username}`),
        )
        .catch(() => toast.error('Something went wrong'))
    })
  }
  return (
    <>
      <Button disabled={isPending} onClick={onClick} variant="primary">
        {isFollowing ? 'Unfollow' : 'Follow'}
      </Button>
      <Button onClick={handleBlock} disabled={isPending}>
        Block
      </Button>
    </>
  )
}

export default Actions
