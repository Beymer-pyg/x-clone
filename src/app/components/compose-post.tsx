'use client'

import { ComposePostTextArea } from './compose-post-textarea'
import { ComposePostButton } from './compose-post-button'
import { addPost } from '../Actions/add-post-action'
import { useRef } from 'react'

export function ComposePost({ userAvatarUrl }: { userAvatarUrl: string }) {
  const formRef = useRef<HTMLFormElement>(null)

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await addPost(formData)
        formRef.current?.reset()
      }}
      className='flex flex-row p-3 border-b border-white/20'
    >
      <img
        className='rounded-full w-10 h-10 object-contain mr-4'
        src={userAvatarUrl}
      />
      <div className='flex flex-1 flex-col  gap-y-4'>
        <ComposePostTextArea />
        <ComposePostButton />
      </div>
    </form>
  )
}
