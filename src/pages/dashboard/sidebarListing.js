import React from 'react'
import { Sidebar } from '../../components/Sidebar'
import LabelWithValue from '../../components/StaticView/labelWithValue'
import { SiderbarTitle } from '../../providers/constants'
import {Avatar, List, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import useStyles from "./styles";

export const SidebarListing = (
    {
        listItems,
        limit,
        isScrollable
    }
) => {
    const classes = useStyles();
    return (
        <React.Fragment>
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
                <List className={classes.listContainer} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {
                        listItems.length && listItems.map((item, ind) => {
                            return (
                                <ListItem>
                                  <ListItemAvatar>
                                      {item.icon}
                                  </ListItemAvatar>
                                  <ListItemText className={classes.routeLabelStyle} primary={item.name} />
                                </ListItem>
                            )
                        })
                    }
                </List>
            </Sidebar>
        </React.Fragment>
    )
}

export default SidebarListing
