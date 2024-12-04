import { client } from "@/lib/db"
import { currentUser } from "@clerk/nextjs/server"

export const onBoardUser = async () => {
    try {
        const auth = await currentUser()
        if(!auth) {
            return {
                status: 403
            }
        }

        const user = await client.user.findUnique({
            where: {
                clerkId: auth.id,
            },
            select: {
                firstname: true,
                lastname: true
            }
        })

        if(user) {
            return {
                status: 200,
                data: user
            }
        }

        //create user
        const newUser = await client.user.create({
            data: {
                clerkId: auth.id,
                firstname: auth.id || "",
                lastname: auth.lastName || "",
                email: auth.emailAddresses[0].emailAddress,
            },
            select: {
                firstname: true,
                lastname: true,
            }
        })
        if (newUser) {
            return {
                status: 201,
                data: newUser,
            }
        }
        return {
            status: 401
        }
    } catch (error) {
        console.log(error)
        return {
            status: 500
        }
    }
}