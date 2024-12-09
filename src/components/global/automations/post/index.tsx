import { useAutomationPosts } from '@/hooks/use-automations'
import { useQueryAutomationPosts } from '@/hooks/user-queries'
import React from 'react'
import TriggerButton from '../trigger-button'
import { InstagramPostProps } from '@/types/posts.type'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Loader from '../../loader'

type Props = {
  id: string
}

const PostButton = ({ id }: Props) => {
  const { data } = useQueryAutomationPosts()
  const { posts, onSelectPost, mutate, isPending } = useAutomationPosts(id)

  return (
    <TriggerButton label="Attach a post">
      {data?.status === 200 ? (
        <div className="flex flex-col gap-y-4 w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {data.data.data.map((post: InstagramPostProps) => (
              <div
                className="relative aspect-square rounded-lg cursor-pointer overflow-hidden"
                key={post.id}
                onClick={() =>
                  onSelectPost({
                    postid: post.id,
                    media: post.media_url,
                    mediaType: post.media_type,
                    caption: post.caption,
                  })
                }
              >
                {posts.find((p) => p.postid === post.id) && (
                  <CheckCircle
                    fill="white"
                    stroke="black"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
                  />
                )}
                <Image
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  src={post.media_url}
                  alt="post image"
                  className={cn(
                    'hover:opacity-75 transition duration-300',
                    posts.find((p) => p.postid === post.id) && 'opacity-75'
                  )}
                />
              </div>
            ))}
          </div>
          <Button
            onClick={mutate}
            disabled={posts.length === 0}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 w-full text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition-colors duration-300"
          >
            <Loader state={isPending}>Attach Post</Loader>
          </Button>
        </div>
      ) : (
        <p className="text-indigo-200 text-center">No posts found!</p>
      )}
    </TriggerButton>
  )
}

export default PostButton

