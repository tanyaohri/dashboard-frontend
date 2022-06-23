import React from 'react'
import { Sidebar } from '../../components/Sidebar'
import LabelWithValue from '../../components/StaticView/labelWithValue'
import { SiderbarTitle } from '../../providers/constants'

export const SidebarListing = (
    {
        listItems,
        limit,
        isScrollable
    }
) => {
  return (
      <div>
          <Sidebar 
              title={
                  <LabelWithValue
                      label={SiderbarTitle.icon}
                      value={SiderbarTitle.name}
                      valueVariant={"h6"}
                      labelVariant={ "h5"}
                      labelPercent={20}
                      valuePercent={20}
                  />
              }
          >
          
          
              
              {
                 listItems.length && listItems.map((item, ind) => {
                      return (
                          <LabelWithValue
                              label={item.icon}
                              value={item.name}
                              valueVariant={ "body1"}
                              labelPercent={10}
                              valuePercent={50}
                        />
                      )
                  })
              }
             
          </Sidebar>
      
    </div>
  )
}

export default SidebarListing
