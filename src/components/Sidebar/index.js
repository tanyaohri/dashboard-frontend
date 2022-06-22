import PropTypes, { any, bool, func, string } from "prop-types";
import {
    Box, Drawer, Toolbar,
    Button, ButtonGroup
} from "@material-ui/core";

import useStyle from "./styles";

export const Sidebar = ({
    children, 
    isOpen=true,
    setOpen,
    position="left",
    title="Title Name",
    footerSection=null
}) => {

    const classes = useStyle();

    return (
        <Drawer
            elevation={0}
            variant="persistent"
            className={classes.dawer}
            classes={{ paper:classes.drawerPaper }}
            open={isOpen}
            anchor={position}
            BackdropProps={{invisible:true}}
        >
            <Box borderBottom={0.5} className={{}}>
                <Toolbar
                    variant="dense"
                >
                    {title}
                </Toolbar>
            </Box>

            {children}
            {
                footerSection && (
                    <ButtonGroup>
                        <Button> Close </Button>
                    </ButtonGroup>
                )
            }
        </Drawer>
    )
    
}

Sidebar.propTypes = {
    children:any,
    isOpen:bool,
    setOpen:func,
    position:string,
    title:string,
    footerSection:string
}