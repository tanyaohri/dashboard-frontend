import React from "react";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";

export default function Widget({
    shadowLevel=3,
    title,
    subtitle
}) {

    const classes = useStyles();
    return (
        <React.Fragment>
            <Card className={classes.root}>
                <CardHeader
                    className={classes.header}
                    component={Typography}
                    title={title}
                    subheader={subtitle}
                />
                <CardContent className={classes.content}>
                    <div className={`${classes.contentItem} ${classes.textContent}`}>
                        <div>Content 1</div>
                        <div>Content 2</div>
                    </div>
                    <div className={classes.contentItem}>
                        <img src="https://picsum.photos/220" />
                    </div>
                </CardContent>
                <div className={classes.footer}>
                <Typography>Footer Text</Typography>
                </div>
            </Card>
            <div style={{ marginTop: "40px", marginLeft: 20, textAlign: "left" }}>
                <a
                target="_blank"
                rel="noreferrer"
                href="https://smartdevpreneur.com/tailoring-the-material-ui-card-component/"
                >
                Read more about the Material-UI Card component here
                </a>
            </div>
            
        </React.Fragment>

    )
}

