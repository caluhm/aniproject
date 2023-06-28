'use client'

import { IoMdArrowRoundBack } from 'react-icons/io'
import { useRouter } from 'next/navigation'

export default function BackButton() {
    const router = useRouter()

    return (
        <button 
            className="absolute top-0 left-0 mt-2.5 ml-2.5 bg-blue-400 hover:bg-blue-500 transition-colors ease-in-out duration-200 px-2 py-1 rounded-md flex items-center justify-center gap-1 z-50 drop-shadow-md"
            onClick={() => router.back()}
        >
            <IoMdArrowRoundBack className='w-6 h-6 text-neutral-100'/>
            <span className="text-sm font-semibold text-neutral-100">Back</span>
        </button>
    )
}