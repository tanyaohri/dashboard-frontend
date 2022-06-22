import { makeStyles } from "@material-ui/styles";
import {theme} from "./../../providers/constants"


export default makeStyles((prop) => ({
    header:{
        
    },
    dawer:{
        width:theme.sidebar.itemListWidth,
        flexShrink:0,
        background:theme.sidebar.background
    },
    drawerPaper:{
        width:theme.sidebar.itemListWidth,
        background:theme.sidebar.background
    }
}))
