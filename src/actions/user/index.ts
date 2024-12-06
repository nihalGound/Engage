"use server"

import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { createUser, findUser } from "./queries"

export const onCurrentUser = async () => {
    try {
        const user = await currentUser()
        if (!user) return redirect("/sign-in")
    
        return user;
    } catch (error) {
        console.log(error)
        return null
    }
}

export const onBoardUser = async () => {
    try {
        const user = await onCurrentUser()
        const found = await findUser(user?.id!)
        if (found) {
            if (found.integrations.length > 0) {
                const today = new Date()
                const time_left = found.integrations[0].expiresAt?.getTime()! - today.getTime()

                const days = Math.floor(time_left/(1000*3600*24))
                if(days < 5) {
                    console.log("refresh")
                    //refresh the integration token for instagram before expiration
                    // WIP: create a function for refreshing token of instagram integration
                }
            }
            return {
                status: 200,
                data: {
                    firstname: found.firstname,
                    lastname: found.lastname,
                }
            }
        }

        //create new user
        const newUser = await createUser(
            user?.id!,
            user?.firstName!,
            user?.lastName!,
            user?.emailAddresses[0].emailAddress!,
        )

        if(newUser) {
            return {
                status: 201,
                data: newUser,
            }
        }
        return {
            status: 402
        }
    } catch (error) {
        console.log(error)
        return {status: 500}
    }
}

export const getSubscriptionInfo = async () => {
    try {
        const user = await onCurrentUser()
        const subscription = await findUser(user?.id!)
        if(subscription) {
           return {
            subscription: subscription.subscription?.plan
           }
        }
        return null
    } catch (error) {
        console.log(error)
        return null
    }
}

export const onUserInfo = async () => {
    try {
        const user = await onCurrentUser()
        const profile = await findUser(user?.id!)
        if(profile) return { status: 200, data: profile}
        return {status: 404}
    } catch (error) {
        console.log(error)
        return {
            status: 500
        }
    }
}


