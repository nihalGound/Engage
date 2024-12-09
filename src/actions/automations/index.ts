"use server";

import { onCurrentUser } from "../user";
import { findUser } from "../user/queries";
import { addKeyWord, addListener, addPost, addTrigger, createAutomation, deleteAutomation, deleteKeywordQuery, findAutomation, getAutomations, updateAutomation } from "./queries";

export const getAllAutomations = async () => {
  try {
    const user = await onCurrentUser();
    const automations = await getAutomations(user?.id!);
    if (automations) return { status: 200, data: automations.automations };
    return { status: 404, data: [] };
  } catch (error) {
    return { status: 500, data: [] };
  }
};

export const getAutomationInfo = async (id: string) => {
  try {
    await onCurrentUser();
    const automation = await findAutomation(id);
    if (automation) return { status: 200, data: automation };

    return { status: 404 };
  } catch (error) {
    return { status: 500 };
  }
};

export const updateAutomationName = async (
  automationId: string,
  data: {
    name?: string;
    active?: boolean;
    automation?: string;
  }
) => {
  try {
    const user = await onCurrentUser();
    const automations = await getAutomations(user?.id!);
    const automation = automations?.automations.find(
      (auto) => auto.id === automationId
    );
    if (!automation) {
      return {
        status: 404,
        data: "Oops! automation not found",
      };
    }
    const update = await updateAutomation(automationId, data);
    if (update) {
      return { status: 200, data: "Automation successfully updated" };
    }
    return { status: 404, data: "Oops! could not find automation" };
  } catch (error) {
    return {
      status: 500,
      data: "Oops! something went wrong",
    };
  }
};

export const activateAutomation = async (id: string, state: boolean) => {
  try {
    const user = await onCurrentUser()
    const automations = await getAutomations(user?.id!);
    const automation = automations?.automations.find(
      (auto) => auto.id === id
    );
    if (!automation) {
      return {
        status: 404,
        data: "Oops! automation not found",
      };
    }
    const update = await updateAutomation(id,{active: state})
    if (update) {
      return  {
        status: 200,
        data: `Automation ${state ? 'activated' : 'disabled'}`,
      }
    }
    return { status: 404, data: 'Automation not found' }
  } catch (error) {
    return { status: 500, data: 'Oops! something went wrong' }
  }
}

export const createAutomations = async (id?: string) => {
  try {
    const user = await onCurrentUser()
    const create = await createAutomation(user?.id!,id)
    if (create) return {status: 200, data: "Automation created", res: create}
    return {status: 404, data: "Oops! something went wrong"}
  } catch (error) {
    return { status: 500, data: 'Internal server error' }
  }
}

export const saveListener = async(
  automationId: string,
  listener: "SMARTAI" | "MESSAGE",
  prompt: string,
  reply?: string
) => {
  try {
    await onCurrentUser()
    const create = await addListener(automationId,listener,prompt,reply)
    if(create) return {status: 200, data: "Listener created"}
    return { status: 404, data: "Cant save listener"}
  } catch (error) {
    return {status: 500, data: "Oops! something went wrong"}
  }
}

export const saveTrigger = async (automationId: string, trigger: string[]) => {
  try {
    await onCurrentUser()
    const create = await addTrigger(automationId,trigger)
    if(create) return {status: 200, data: "Trigger saved"}
    return {status: 404,data: "Cannot save trigger"}
  } catch (error) {
    return {status: 500, data: "Oops! something went wrong"}
  }
}

export const saveKeyword = async (automationId: string, keyword: string) => {
  try {
    await onCurrentUser()
    const create = await addKeyWord(automationId,keyword)
    if(create) return {status: 200, data: "Keyword added successfully"}
    return {status: 404, data: "Cannot add this keyword"}
  } catch (error) {
    return {status: 500, data: "Oops! something went wrong"}
  }
}

export const deleteKeyword = async (id: string) => {
  try {
    await onCurrentUser()
    const deleted = await deleteKeywordQuery(id)
    if(deleted) return {status: 200, data: "Keyword deleted"}
    return {status: 400, data: "Keyword not found"}
  } catch (error) {
    return {status: 500, data: "Oops! something went wrong"}
  }
}

export const getProfilePosts = async() => {
  try {
    const user = await onCurrentUser()
    const profile = await findUser(user?.id!)
    const posts = await fetch(
      `${process.env.INSTAGRAM_BASE_URL}/me/media?fields=id,caption,media_url,media_type,timestamp&limit=10&access_token=${profile?.integrations[0].token}`
    )
    const parsed = await posts.json()
    if(parsed) return {
      status: 200,
      data: parsed
    }
    return {status: 404}
  } catch (error) {
    return {status: 500}
  }
}

export const savePosts = async (
  automationId: string,
  posts: {
    postid: string
    caption?: string
    media: string
    mediaType: 'IMAGE' | 'VIDEO' | 'CAROSEL_ALBUM' 
  }[]
) => {
  try {
    await onCurrentUser()
    const create = await addPost(automationId,posts)
    if(create) return {status: 200, data: "Posts attached"}
    return {status: 404, data: "Automation not found"}
  } catch (error) {
    return {status: 500, data: "Oops! something went wrong"}
  }
}

export const removeAutomation = async (id: string) => {
  try {
    const user = await onCurrentUser()
    await deleteAutomation(user?.id!,id);
    return {
      status: 200
    }
  } catch (error) {
    return {
      status: 500
    }
  }
}


