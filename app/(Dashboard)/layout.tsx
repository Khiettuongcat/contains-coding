import Sidebar from '@/components/contains/sidebar'
import { Container } from 'lucide-react'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex items-center'>
            <div className='fixed top-0 left-0 right-0 w-72 h-full  bg-white border-r-2 border-l-neutral-500'>

                <div className="flex items-center p-2 border-b-2 h-20 mb-4">
                    <Container size={40} className='text-blue-500 mr-2' />
                    <h1 className='ml-1 text-xl font-semibold '>Contai Coding</h1>
                </div>

                <Sidebar />
            </div>
            <div className='p-4 ml-72'>{children}</div>
        </div>
    )
}

export default layout