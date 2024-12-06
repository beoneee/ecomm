'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function SearchForm() {
    const { register, handleSubmit, reset } = useForm()
    const router = useRouter()
    function handleSearch(data) {
        const { searchTerm } = data;
        console.log(searchTerm)
        reset()
        router.push(`/search?search=${searchTerm}`)
    }
    return (
        <div>
            <form
                onSubmit={handleSubmit(handleSearch)}
                className="flex items-center max-w-lg mx-auto">
                <label htmlFor="voice-search" className="sr-only">Search</label>
                <div className="relative w-full">
                    <input
                        {...register("searchTerm")}
                        type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="Search Products, Market, Farmers....." required />
                    <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z" />
                        </svg>
                    </button>
                </div>
                <button type="submit" className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-purple-800 rounded-lg border border-purple-700 hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
                    <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>Search
                </button>
            </form>

        </div>
    )
}