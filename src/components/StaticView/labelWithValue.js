import React from 'react'
import { any, number, object, string } from 'prop-types';
import {
    Grid,
    Typography
} from "@material-ui/core";


import { componentUtil } from '../../utils';


const LabelWithValue = ({
    label,
    value,
    labelStyle = { fontWeight:600 },
    valueStyle,
    labelVariant="h6",
    valueVariant="h6",
    labelPercent=100,
    valuePercent=100
}) => {

    const { computeGridProp } = componentUtil;

    const areaProp = {
        label : computeGridProp(labelPercent),
        value : computeGridProp(valuePercent)
    }
    
    return (
        <Grid container>
            <Grid item
                xs={12}
                sm={areaProp.label}
                md={areaProp.label}
            >
                <Typography style={{...labelStyle}} variant={labelVariant}>
                    { label }
                </Typography>
            </Grid>
            <Grid item
                xs={12}
                sm={areaProp.value}
                md={areaProp.value}
            >
                <Typography variant={valueVariant}>
                    { value }
                </Typography>
            </Grid>
                
        </Grid>
    )
}

LabelWithValue.propTypes = {
    label:any,
    value:any,
    labelVariant:string,
    valueVariant:string,
    labelStyle:object,
    valueStyle:object,
    labelPercent:number,
    valuePercent:number
}

export default LabelWithValue

