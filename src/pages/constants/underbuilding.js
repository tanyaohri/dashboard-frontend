import { Button, Container, Grid, Typography } from "@material-ui/core";
import {useLocation, useNavigate} from "react-router-dom"
import React from "react";

const UnderProgressComponent = () => {

    const location = useLocation();
    const navigate = useNavigate();
    return (
        <Container>
            <Grid container>
                <Grid item xs={3} md={2} sm={2}>

                </Grid>
                <Grid item xs={8} >
                    
                    <Typography variant="h4">
                    Current Page [{location.pathname}] is under progress !
                    </Typography> 
                    
                </Grid>
                <Grid item xs={3} md={2} sm={2}>
                </Grid>

                
            </Grid>
            <br/>
            <br/>
            <br/>

            <Grid container spacing={5}>
                <Grid item xs={12} md={5} sm={5} alignContent="center">
                </Grid>
                <Grid item xs={12} md={5} sm={5} alignContent="center">
                    <Button variant="contained" color="primary" onClick={() => navigate("/", {replace:true})}>
                        Go to home Page
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default UnderProgressComponent