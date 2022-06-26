import { makeStyles } from "@material-ui/styles";
import { theme } from "../../providers/constants";

export default makeStyles((prop) => ({
    container:{
        marginLeft:20,
        marginTop:25
    },
    routeLabelStyle:{
        textTransform:"none",
        fontSize:"16",
        marginLeft:"-20",
        marginBottom:"10",
        fontWeight:400,
        color:theme.sidebar.text.child.inactive
    },
    listContainer:{
        marginLeft:20
    },
    paper:{
        minWidth:1122, 
        minHeight:546,
        borderRadius:8
    },
    subtitle:{
        fontFamily: 'Mulish',
        fontWeight: 400,
        fontSize: 12,
        letterSpacing: 0.1,
        color: "#9FA2B4",

    },
    btnStyle:{
        fontFamily: 'Mulish',
        fontWeight: 400,
        fontStyle:"normal",
        textTransform:"none",
        fontSize: 12,
        letterSpacing: 0.1,
        color: "#9FA2B4",
        "&:hover": {
            backgroundColor: "#FFF"
        }
    },
    startIcon:{
        marginTop:20
    },
    labelStyle:{

    },
    valueStyle:{
        marginLeft:20
    }
}));