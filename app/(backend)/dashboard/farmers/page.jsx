import PageHeader from '@/components/backend/layout/PageHeader'
import TableActions from '@/components/backend/layout/TableActions'
import { Search, Trash2 , Download } from 'lucide-react'
import React from 'react'


export default function Farmers() {
  return (
    <div>
      <PageHeader
       title="Farmers" 
       href="/dashboard/farmers/new"
        linkTitle="Add Farmer"
        />
          <TableActions/>
    
      <div className="py-8">
          <h2>Table</h2>
      </div>
    </div>
  )
}

