import PageHeader from '@/components/backend/layout/PageHeader'
import TableActions from '@/components/backend/layout/TableActions'


import React from 'react'

export default function page() {
  return (
    <div>
      <PageHeader title="Banners" linkTitle="Add Banner" href="/dashboard/banners/new" />
      {/*id, title, link, image */}
      <TableActions />
      <div className='py-4 px-8'>
        <h1>Table</h1>
      </div>
    </div>
  )
}