'use client'

import { Button } from '@/components/ui/button'
import React from 'react'
import Loader from '../loader'
import { AutomationDuoToneWhite } from '@/icons'

const CreateAutomation = () => {
  const handleCreateAutomation = () => {
    // WIP: Implement create automation function
    console.log('Create automation clicked');
  };

  return (
    <Button
      className="lg:px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
      onClick={handleCreateAutomation}
    >
      <Loader state={false}>
        <AutomationDuoToneWhite />
        <p className="lg:inline hidden">Create an Automation</p>
      </Loader>
    </Button>
  )
}

export default CreateAutomation

