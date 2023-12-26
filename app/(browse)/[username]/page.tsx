import { isFollowingUser } from '@/lib/follow-service'
import getUserByUsername from '@/lib/user-service'
import { notFound } from 'next/navigation'
import Actions from './_components/action'

interface Userpageprops {
  params: {
    username: string
  }
}
const Userpage = async ({ params }: Userpageprops) => {
  const user = await getUserByUsername(params.username)
  if (!user) {
    notFound()
  }
  const isFollowing = await isFollowingUser(user.id)
  return (
    <div>
      {user?.username}
      <p>{`${isFollowing}`}</p>
      <Actions isFollowing={isFollowing} userId={user.id} />
    </div>
  );
}

export default Userpage
