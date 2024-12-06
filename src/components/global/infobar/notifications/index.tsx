import { Button } from '@/components/ui/button'
import { Bell } from 'lucide-react'

export const Notifications = () => {
  return (
    <Button className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors duration-200">
      <Bell
        className="text-indigo-300 hover:text-indigo-200 transition-colors duration-200"
        size={30}
      />
    </Button>
  )
}

