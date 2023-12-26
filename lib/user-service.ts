import { db } from "./db";

const getUserByUsername = async (username: string) => {
    const user = await db.user.findUnique({
        where: {
            username
        }
    })
    return user
}

export default getUserByUsername;