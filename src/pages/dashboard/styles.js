import { makeStyles } from "@material-ui/styles";
import { theme } from "../../providers/constants";

export default makeStyles((prop) => ({
    container:{
        marginLeft:20,
        marginTop:25
    },
    btnStyle:{
        justifyContent: "flex-start",
        marginLeft:25,
        textTransform:"none",
        fontSize:"16px",
        fontWeight:400,
        color:theme.sidebar.text.child.inactive
    }
}));