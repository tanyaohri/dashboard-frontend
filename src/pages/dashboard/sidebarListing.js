import React from 'react'
import { Sidebar } from '../../components/Sidebar'
import LabelWithValue from '../../components/StaticView/labelWithValue'
import { SiderbarTitle } from '../../providers/constants'
import {Grid, Button} from "@material-ui/core";
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
                <Grid container spacing={3}>
                    {
                        listItems.length && listItems.map((item, ind) => {
                            return (
                                <Grid item xs={12} sm={12} md={12} xl={12}>
                                    <Button 
                                        fullWidth
                                        startIcon={item.icon}
                                        className={classes.btnStyle}
                                    >
                                        {item.name}
                                    </Button>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Sidebar>
        </React.Fragment>
    )
}

export default SidebarListing
