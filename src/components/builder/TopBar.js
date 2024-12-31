import Link from 'next/link'
import React from 'react'
import { Github } from 'lucide-react'


function TopBar() {
    return (
        <div className="fixed top-0 left-0 right-0 h-14 bg-white shadow-md z-[100] flex items-center px-4">
            <Link href="/">
                <div className="flex items-center me-auto cursor-pointer">
                    <img src="/favicon.ico" alt="GitHub Logo" className="h-8 w-8 mr-2" />

                    <h1 className="text-xl font-semibold text-gray-800">
                        GitHub Actions Builder
                    </h1>
                </div>
            </Link>

            <div className="flex-1 flex w-full justify-end items-center">
                {/* Github Contribution button */}
                <a
                    href="https://github.com/Saptarshi-Chakraborty/github-actions-builder" target="_blank" rel="noopener noreferrer" className="flex items-center text-white bg-slate-950 hover:bg-slate-900 px-4 py-2 rounded-md text-sm font-medium">
                    <Github className="h-5 w-5" />
                    <span className='ms-2'>Contribute on GitHub</span>
                </a>

            </div>

        </div>
    )
}

export default TopBar

