"use client"
import Link from 'next/link'
import { SidebarLink } from '.'

import { twMerge } from 'tailwind-merge'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
  const pathname = usePathname()
  return (
    <div className='p-3'>
      {SidebarLink.map(link => (

        <Link href={link.url} className={twMerge("mt-5  flex items-center h-12 rounded-lg w-full",
          "hover:bg-gray-50 hover:border-l-4 hover:border-blue-300 hover:shadow-lg hover:shadow-gray-900/5 ",
          link.url === pathname ? "bg-gray-50 border-l-4 border-blue-500 shadow-lg shadow-gray-900/10 " : ""
        )} key={link.url}>
          {link.icons}
          <span className=' text-lg ml-3'>{link.title}</span>
        </Link>
      ))}


    </div>
  )
}

export default Sidebar