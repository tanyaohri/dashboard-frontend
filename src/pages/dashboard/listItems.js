import React from "react";
import {
   Grid,
    Typography,
    Divider,
    Button
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
        graphListData.map((entry, ind) => {
            return (
                <React.Fragment>
                    <Grid container spacing={0} style={{marginLeft:-60}}>
                        <Grid item
                            xs={12}
                            sm={12}
                            md={12}
                        >
                            <Button fullWidth className={classes.labelStyle}>
                                { entry.label }
                            </Button>
                        </Grid>
                        <Grid item
                            xs={12}
                            sm={12}
                            md={12}
                        >
                            <Button fullWidth className={classes.valueStyle}>
                                { entry.value }
                            </Button>
                        </Grid>
                    </Grid>
                    {graphListData.length-1!==ind && <Divider style={{marginLeft:-90, maxWidth:250}} variant="fullWidth"/>} 
                </React.Fragment>
                
            )
        })
    )
}