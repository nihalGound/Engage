import React, { useEffect, useRef, useState } from "react"
import { useMutationData } from "./use-mutation-data"
import { createAutomations, deleteKeyword, removeAutomation, saveKeyword, saveListener, savePosts, saveTrigger, updateAutomationName } from "@/actions/automations"
import {z} from "zod"
import useZodForm from "./use-zod-form"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"
import { TRIGGER } from "@/redux/slices/automation"
import { addKeywordKey, addTriggerKey, attachPostsKey, createAutomationsKey, createListenerKey, deleteKeywordKey, queryUserAutomationKey, queryUserAutomationsKey, updateAutomationsKey } from "@/constants/react-query-variables"

export const useCreateAutomation = (onSuccess:()=>void,id?: string,) => {
    const {isPending,mutate} = useMutationData(
        [createAutomationsKey],
        () =>createAutomations(id),
        queryUserAutomationsKey,
        onSuccess
    )
    return {isPending,mutate}
}

export const useEditAutomation = (automationId: string) => {
    const [edit,setEdit] = useState(false)
    const inputRef = useRef<HTMLInputElement | null>(null)
    const enableEdit = () => setEdit(true)
    const disableEdit = () => setEdit(false)

    const {isPending,mutate} = useMutationData(
        [updateAutomationsKey],
        (data: {name: string}) =>
            updateAutomationName(automationId,{name: data.name}),
        queryUserAutomationKey,
        disableEdit
    )

    useEffect(() => {
        function handleClickOutside(this: Document, event: MouseEvent) {
            if (
                inputRef.current &&
                !inputRef.current.contains(event.target as Node | null)
            ) {
                if (inputRef.current.value !== "") {
                    mutate({name: inputRef.current.value})
                } else {
                    disableEdit()
                }
            }
        }
        document.addEventListener("mousedown",handleClickOutside)
        return () => document.removeEventListener("mousedown",handleClickOutside)
    },[])

    return {
        edit,
        enableEdit,
        disableEdit,
        inputRef,
        isPending
    }
}

export const useRemoveAutomation = (automatinId: string,onSuccess:() => void) => {
    const {isPending,mutate} = useMutationData(
        ["delete-automation"],
        () =>removeAutomation(automatinId),
        "user-automations",
        onSuccess
    )
    return {isPending,mutate}
}
export const useListener = (id: string) => {
    const [listener,setListener] = useState<"MESSAGE" | "SMARTAI" | null>(null)
    const promptSchema = z.object({
        prompt: z.string().min(1),
        reply: z.string()
    })

    const {isPending,mutate} = useMutationData(
        [createListenerKey],
        (data: {prompt: string; reply: string}) => 
            saveListener(id,listener || "MESSAGE",data.prompt,data.reply),
        queryUserAutomationsKey
    )
    const { errors, onFormSubmit, register, reset, watch } = useZodForm(
        promptSchema,
        mutate
      )
    
      const onSetListener = (type: 'SMARTAI' | 'MESSAGE') => setListener(type)
      return { onSetListener, register, onFormSubmit, listener, isPending }
}

export const useTriggers = (id: string) => {
    const types = useAppSelector((state) => state.AutomationReducer.trigger?.types)

    const dispatch : AppDispatch = useDispatch()

    const onSetTrigger = (type: "COMMENT" | "DM") =>
        dispatch(TRIGGER({trigger: {type}}))

    const {isPending,mutate} = useMutationData(
        [addTriggerKey],
        (data: {types: string[]}) => saveTrigger(id,data.types),
        queryUserAutomationsKey
    )

    const onSaveTrigger = () => mutate({types})
    return {types,onSetTrigger,onSaveTrigger,isPending}
}

export const useKeywords = (id: string) => {
    const [keyword,setKeyword] = useState('')
    const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setKeyword(e.target.value)

    const {mutate} = useMutationData(
        [addKeywordKey],
        (data: {keyword: string}) => saveKeyword(id,data.keyword),
        queryUserAutomationsKey,
        () => setKeyword('')
    )

    const onKeyPress = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            mutate({keyword})
            setKeyword('')
        }
    }

    const {mutate:deleteMutation} = useMutationData(
        [deleteKeywordKey],
        (data: {id: string}) => deleteKeyword(data.id),
        queryUserAutomationsKey
    )

    return { keyword, onValueChange, onKeyPress, deleteMutation }
}

export const useAutomationPosts = (id: string) => {
    const [posts, setPosts] = useState<
    {
      postid: string
      caption?: string
      media: string
      mediaType: 'IMAGE' | 'VIDEO' | 'CAROSEL_ALBUM'
    }[]
  >([])

  const onSelectPost = (post: {
    postid: string
    caption?: string
    media: string
    mediaType: 'IMAGE' | 'VIDEO' | 'CAROSEL_ALBUM'
  }) => {
    setPosts((prevItems) => {
      if (prevItems.find((p) => p.postid === post.postid)) {
        return prevItems.filter((item) => item.postid !== post.postid)
      } else {
        return [...prevItems, post]
      }
    })
  }

  const { mutate, isPending } = useMutationData(
    [attachPostsKey],
    () => savePosts(id, posts),
    queryUserAutomationKey,
    () => setPosts([])
  )
  return { posts, onSelectPost, mutate, isPending }
}
