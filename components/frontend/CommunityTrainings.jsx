import Link from 'next/link'
import React from 'react'
import CategoryCarousel from './CategoryCarousel'
import TrainingCarousel from './TrainingCarousel'
import { getData } from '@/lib/getData'

export default async function CommunityTrainings() {
  const trainings =await getData('trainings')
  return (
    <div className='bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 text-slate-800 overflow-hidden'>
        <div className="bg-slate-100 py-3 px-6 font-semibold border-b boder-gary-300  flex justify-between items-center">
          <h2>Zunz Community</h2>
          <Link className='bg-purple-700 hover:bg-purple-500 duration-300 transition-all text-slate-50 rounded-md px-4 py-2 ' href="#">
          See All
          </Link>
        </div>
        <div className="bg-white dark:bg-slate-700 px-4">
            <TrainingCarousel trainings={trainings}/>
          </div>
    </div>
  )
}
