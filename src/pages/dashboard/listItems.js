import React from "react";
import {
   Grid,
    Typography,
    Divider
} from "@material-ui/core"
import useStyles from "./styles";
import LabelWithValue from "../../components/StaticView/labelWithValue";

const graphListData = [
    {
        label:"Resolved",
        value:449
    },
    {
        label:"Received",
        value:429
    },
    {
        label:"Average first response time",
        value:"33m"
    },
    {
        label:"Average response time",
        value:"3h 8m"
    },
    {
        label:"Resolution within SLA",
        value:"94%"
    },

]

export const GraphDataList = () => {

    const classes = useStyles();
    return (
        graphListData.map((entry) => {
            return (
                <Grid container spacing={3} style={{marginLeft:-70}}>
                    <Grid item
                        xs={12}
                        sm={12}
                        md={12}
                    >
                        <Typography className={classes.labelStyle}>
                            { entry.label }
                        </Typography>
                    </Grid>
                    <Grid item
                        xs={12}
                        sm={12}
                        md={12}
                    >
                        <Typography className={classes.valueStyle}>
                            { entry.value }
                        </Typography>
                    </Grid>
                  
             </Grid>
            )
        })
    )
}