import { UserButton } from '@clerk/nextjs'
import React from 'react'
import {Button} from '../../../../components/ui/button'
import Link from "next/link";
function DashboardHeader() {
  return (
    <div className='p-5 shadow-sm border-b flex justify-end gap-3'>
        <div>
            <UserButton afterSignOutUrl='/'/>
        </div>
        <div>
            <Link href={"/sign-up"}>
              <Button variant="outline" className="rounded-full font-bold">
                LogOut
              </Button>
          </Link>
        </div>
       
    </div>
  )
}

export default DashboardHeader