import { makeStyles } from "@material-ui/styles";
import { theme } from "../../providers/constants";

export default makeStyles((prop) => ({
    listItem:{
        justifyContent:"flex-start",
        marginTop:20,
        color:"#A4A6B3",
        fontSize:16,
        textTransform:"none",
        letterSpacing: "0.2px",
        "&:hover": {
            backgroundColor: "#9FA2B4",
            opacity: 0.2,
        },
        "&:hover": {
            color:"#FFF"
        }
    },
    sidebarStyle:{
        marginLeft:25,
        marginTop:2,
        color:"white"
    },
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
        minWidth:1050, 
        minHeight:546,
        maxHeight:546,
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
        fontFamily: 'Mulish',
        fontWeight: 600,
        fontStyle:"normal",
        textTransform:"none",
        fontSize: 16,
        color:"#9FA2B4",
        "&:hover": {
            backgroundColor: "#FFF"
        }
    },
    cardHeadStyle:{
        fontFamily: 'Mulish',
        fontWeight: 600,
        fontStyle:"normal",
        textTransform:"none",
        fontSize: 19,
        color:"#9FA2B4",
        "&:hover": {
            backgroundColor: "#FFF"
        }
    },
    cardContentStyle:{
        lineHeight:-10,
        fontFamily: 'Mulish',
        fontWeight: 700,
        fontStyle:"normal",
        textTransform:"none",
        fontSize: 40,
        color:"#252733",
        "&:hover": {
            backgroundColor: "#FFF"
        }
    },
    
    valueStyle:{
        fontFamily: 'Mulish',
        fontWeight: 700,
        fontStyle:"normal",
        textTransform:"none",
        fontSize: 24,
        color:"#252733",
        "&:hover": {
            backgroundColor: "#FFF"
        }
    }
}));