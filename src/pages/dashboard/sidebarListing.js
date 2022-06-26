import React from 'react'
import { Sidebar } from '../../components/Sidebar'
import LabelWithValue from '../../components/StaticView/labelWithValue'
import { SiderbarTitle } from '../../providers/constants'
import {Avatar, Button, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import useStyles from "./styles";
import { setLocalStorageItem } from '../../utils/appUtils';

export const SidebarListing = (
    {
        listItems,
        limit,
        isScrollable
    }
) => {
    const classes = useStyles();
    const handleRouteChange = (index) => {
        setLocalStorageItem("activeRoute", index);
    }
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
               
                {listItems.length && listItems.map((item, ind) => {
                    if(item.icon === null || item.name ===null){
                        return (
                            <Divider style={{border:"0.001em solid #DFE0EB", opacity:0.3, height:0, marginTop:20}}/>
                        )
                    }

                    return (

                        <React.Fragment>
                            <Button 
                                key={ind}
                                onClick={() => handleRouteChange(ind)}
                                startIcon={item.icon}
                                fullWidth size="medium"
                                className={classes.listItem}
                                classes={{ startIcon: classes.sidebarStyle}}
                            > 
                                {item.name}
                            </Button>    
                        </React.Fragment>
                    )

                })}
            </Sidebar>
        </React.Fragment>
    )
}

export default SidebarListing
