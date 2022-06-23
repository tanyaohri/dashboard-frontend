import React from 'react'
import { SidebarListMeta } from '../../providers/constants'
import SidebarListing from './sidebarListing'

function Dashboard() {
    
  return (
    <div>
      
      <SidebarListing
        
        listItems={SidebarListMeta}
        
      />
      
    </div>
  )
}

export default Dashboard
