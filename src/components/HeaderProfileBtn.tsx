"use client";
import { UserButton } from '@clerk/nextjs'
import { User } from 'lucide-react'
import React from 'react'

const HeaderProfileBtn = () => {
  return (
    <>
    <UserButton>
        <UserButton.MenuItems>
            <UserButton.Link
            label='profile'
            labelIcon = {<User className='size-4'/>}
            href = '/profile'
            />
        </UserButton.MenuItems>
    </UserButton>
    </>
  )
}

export default HeaderProfileBtn
