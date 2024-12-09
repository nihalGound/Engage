"use client"
import ActivateAutomationButton from '@/components/global/activate-automation-button'
import { MobileSidebar } from '@/components/global/infobar'
import { Input } from '@/components/ui/input'
import { updateAutomationsKey } from '@/constants/react-query-variables'
import { useEditAutomation } from '@/hooks/use-automations'
import { useMutationDataState } from '@/hooks/use-mutation-data'
import { usePath } from '@/hooks/user-nav'
import { useQueryAutomation } from '@/hooks/user-queries'
import { ChevronRight, PencilIcon } from 'lucide-react'
import React from 'react'

type Props = {
    id: string,
    slug: string
}

const AutomationsBreadCrumb = ({id, slug}: Props) => {
    const {page} = usePath()
    const {data} = useQueryAutomation(id)
    const {edit, enableEdit, inputRef, isPending} = useEditAutomation(id)
    const {latestVariable} = useMutationDataState([updateAutomationsKey])

    return (
        <div className="rounded-xl sm:rounded-full w-full p-3 sm:p-5 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 backdrop-filter backdrop-blur-lg flex flex-col sm:flex-row items-start sm:items-center gap-3 border border-indigo-500/30">
            <div className="flex items-center w-full sm:w-auto">
                <MobileSidebar slug={slug} page={page} />
                <div className="flex items-center gap-x-2 min-w-0 flex-grow ml-2 sm:ml-2">
                    <p className="text-indigo-200 text-sm truncate">Automations</p>
                    <ChevronRight
                        className="flex-shrink-0 text-indigo-300"
                        size={16}
                    />
                    <span className="flex gap-x-2 items-center min-w-0 flex-grow">
                        {edit ? (
                            <Input
                                ref={inputRef}
                                placeholder={
                                    isPending ? latestVariable.variables : 'Add a new name'
                                }
                                className="bg-transparent h-auto outline-none text-sm border-none p-0 text-white placeholder-indigo-300"
                            />
                        ) : (
                            <p className="text-white text-sm truncate">
                                {latestVariable?.variables
                                    ? latestVariable?.variables.name
                                    : data?.data?.name}
                            </p>
                        )}
                        {!edit && (
                            <button
                                className="cursor-pointer hover:opacity-75 duration-100 transition flex-shrink-0"
                                onClick={enableEdit}
                            >
                                <PencilIcon size={14} className="text-indigo-300" />
                            </button>
                        )}
                    </span>
                </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto sm:ml-auto justify-between sm:justify-end">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-3">
                    <p className="hidden lg:block text-indigo-200 text-xs whitespace-nowrap">
                        All states are automatically saved
                    </p>
                    <p className="text-indigo-200 text-xs whitespace-nowrap">
                        Changes Saved
                    </p>
                </div>
                <ActivateAutomationButton id={id} />
            </div>
        </div>
    )
}

export default AutomationsBreadCrumb

