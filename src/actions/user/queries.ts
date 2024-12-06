"use server"

import { client } from "@/lib/db"

export const findUser = async (clerkId: string) => {
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
}

export const createUser = async (
    clerkId: string,
    firstname: string,
    lastname: string,
    email: string
) => {
    return await client.user.create({
        data: {
            clerkId: clerkId,
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
}

export const updateSubscription = async (
    clerkId: string,
    props: { customerId?: string; plan?: "PRO" | "FREE" }
) => {
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
}