import { Button, Card, CardContent, Grid } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";


const data = [
    {
        label:"Unresolved",
        value:60
    },
    {
        label:"Overdue",
        value:16
    },
    {
        label:"Open",
        value:43
    },
    {
        label:"On Hold",
        value:64
    },
    
]

export const CardListView = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container spacing={2}>

            {
                data.map((entry) => (
                    <Grid item xs={12} sm={6} md={3}>
                        <Card style={{maxHeight:"134px"}}> 
                            <CardContent>
                                <Button size="small" className={classes.cardHeadStyle} fullWidth>
                                    {entry.label}
                                </Button>
                                <Button size="small" fullWidth className={classes.cardContentStyle}>
                                    {entry.value}
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))
            }
            </Grid>
        </React.Fragment> 
    )
}