"use server"

import { client } from "@/lib/db"

export const findUser = async (clerkId: string) => {
    try {
        return await client.user.findUnique({
            where: {
                clerkId: clerkId,
            },
            include: {
                subscription: true,
                integrations: {
                    select: {
                        id: true,
                        token: true,
                        expiresAt: true,
                        name: true,
                    },
                },
            },
        })
    } catch (error) {
        console.log(error)
        return null
    }
}

export const createUser = async (
    clerkId: string,
    firstname: string,
    lastname: string,
    email: string
) => {
    try {
        return await client.user.create({
            data: {
                clerkId:clerkId,
                email: email,
                lastname: lastname || "",
                firstname: firstname || "",
                subscription: {
                    create: {},
                },
            },
            select: {
                firstname: true,
                lastname: true,
            }
        })
    } catch (error) {
        console.log(error)
        return null
    }
}

export const updateSubscription  = async (
    clerkId: string,
    props: {customerId?: string; plan?: "PRO" | "FREE"}
) => {
    try {
        return await client.user.update({
            where: {
                clerkId,
            },
            data: {
                subscription: {
                    update: {
                        data: {
                            ...props,
                        },
                    },
                },
            },
        })
    } catch (error) {
        console.log(error)
        return null
    }
}