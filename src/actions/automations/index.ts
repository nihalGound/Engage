"use server"

import { onCurrentUser } from "../user"
import { findAutomation, getAutomations } from "./queries"

export const getAllAutomations = async () => {
    try {
        const user = await onCurrentUser()
        const automations = await getAutomations(user?.id!)
        if (automations) return { status: 200, data: automations.automations }
        return { status: 404, data: [] }
    } catch (error) {
        return { status: 500, data: [] }
    }
}

export const getAutomationInfo = async (id: string) => {
    try {
        await onCurrentUser()
        const automation = await findAutomation(id)
        if (automation) return { status: 200, data: automation }

        return { status: 404 }
    } catch (error) {
        return { status: 500 }
    }
}