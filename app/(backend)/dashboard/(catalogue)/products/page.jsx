
import PageHeader from '@/components/backend/layout/PageHeader'
import TableActions from '@/components/backend/layout/TableActions'
import { Search, Trash2 , Download } from 'lucide-react'
import React from 'react'


export default function page() {
  return (
    <div>
      <PageHeader
       title="Products" 
       href="/dashboard/products/new"
        linkTitle="Add Product"
        />
          <TableActions/>
    
      <div className="py-8">
          <h2>Table</h2>
      </div>
    </div>
  )
}
