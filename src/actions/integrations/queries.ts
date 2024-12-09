"use server"

import { client } from "@/lib/db"

export const updateIntegration = async (
    token: string,
    expire: Date,
    id: string
) => {
    return await client.integration.update({
        where:  {
            id,
        },
        data: {
            token,
            expiresAt: expire,
        }
    })
}

export const getIntegration = async (clerkId: string) => {
    return await client.user.findUnique({
        where: {
            clerkId,
        },
        select: {
            integrations: {
                where: {
                    name: "INSTAGRAM",
                }
            }
        }
    })
}

export const createIntegration = async (
    clerkId: string,
    token: string,
    expire: Date,
    igId?: string
) => {
    return await client.user.update({
        where: {
            clerkId,
        },
        data: {
            integrations: {
                create: {
                    token,
                    expiresAt: expire,
                    intagramId: igId,
                }
            }
        },
        select: {
            firstname: true,
            lastname: true,
        }
    })
}