import { makeStyles } from "@material-ui/styles";
import { theme } from "../../providers/constants";

export default makeStyles((prop) => ({
    container:{
        marginLeft:20,
        marginTop:25
    },
    routeLabelStyle:{
        textTransform:"none",
        fontSize:"16px",
        marginLeft:"-20px",
        marginBottom:"10px",
        fontWeight:400,
        color:theme.sidebar.text.child.inactive
    },
    listContainer:{
        marginLeft:20
    }
}));