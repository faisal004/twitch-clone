
import { db } from './db'

const getRecommended = async () => {
  const users = await db.user.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })
  return users
}

export default getRecommended
