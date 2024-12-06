import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import React from 'react'

const Search = () => {
  return (
    <div className="flex overflow-hidden gap-x-2 border border-indigo-700 bg-white/5 rounded-full px-4 py-2 items-center md:flex-1 w-fit backdrop-filter backdrop-blur-sm">
      <SearchIcon className="text-indigo-400" size={20} />
      <Input
        placeholder="Search by name, email or status"
        className="hidden md:block border-none outline-none ring-0 focus:ring-0 flex-1 bg-transparent text-white placeholder-indigo-300 "
      />
    </div>
  )
}

export default Search

