import React from "react";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";

export default function Widget({
    children,
    shadowLevel=3,
    title,
    subtitle,
    footer,
    minWidth=420,
    minHeight=320

}) {

    const classes = useStyles();
    return (
        <React.Fragment>
            <Card 
                className={classes.root} 
                style={{
                    minWidth:minWidth,
                    minHeight:minHeight
                }}
            >
                <CardHeader
                    className={classes.header}
                    component={Typography}
                    title={title}
                    subheader={subtitle}
                />
                <CardContent className={classes.content}>
                    {children}
                </CardContent>

                {
                    footer && (
                        <div className={classes.footer}>
                            <Typography>
                                {footer}
                            </Typography>
                        </div>
                    )
                }
                
            </Card>
        </React.Fragment>

    )
}

