
import { getSelf } from './auth-service';
import { db } from './db'

const getRecommended = async () => {
  let userId;
  try {
    const self = await getSelf()
    userId = self.id

  } catch (error) {
    userId = null
  }
  let users = []
  if (userId) {
    users = await db.user.findMany({
      where: {
        NOT: {
          id: userId
        }
      }
    })
  } else {
    users = await db.user.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })
  }

  return users
}

export default getRecommended
