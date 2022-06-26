import { Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router, Route, Routes, useLocation
  } from "react-router-dom"

import UnderProgressComponent from "./../pages/constants/underbuilding";
import { routes } from "../providers/constants";
import SidebarListing from "./sidebarListing";
import { getLocalStorageItem } from "../utils/appUtils";

export const FullApp = () => {

    const [pageName, setPageName] = useState(routes[0].name);
    const routingHandler = (name) => {
        setPageName(name)
    }

    return (
        <Router>
            <Routes>
            {
                routes.map((route, ind) => {
                let Component = UnderProgressComponent;
                if(route.Component!==undefined){
                    Component = route.Component
                }
                return(
                    <Route
                        key={route.name}
                        path={route.route}
                        element={ 
                            <React.Fragment>

                                <Grid container>
                                    <Grid item xs={12} sm={2} md={2}>
                                        <SidebarListing routingHandler = {routingHandler} listItems={routes}/>
                                    </Grid>
                                    <Grid item xs={12} sm={10} md={10}>
                                        <Grid container> 
                                            <Grid item xs={8} sm={10} md={10}>
                                                <Typography variant="h4">
                                                    {pageName}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={8} sm={2} md={2}>

                                            </Grid>
                                        </Grid>
                                        {React.createElement(Component, {})}
                                    </Grid>
                                </Grid>
                            </React.Fragment>
                        }
                        />
                    )
                })
            }
            
            
            </Routes>
        </Router>
       
    )
}