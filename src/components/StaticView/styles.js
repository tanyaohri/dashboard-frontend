import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) =>
    createStyles({
        root: {
            display: "flex",
            minWidth: 320,
            maxWidth: 500,
            flexDirection: "column", 
                // "& .MuiCardHeader-root": {
                //    
                // },
                // "& .MuiCardHeader-title": {
                //    
                // },
                // "& .MuiCardHeader-subheader	": {
                //    
                // },
                // "& .MuiCardContent-root": {
                //    
                // }
        },
        header: {},
        content: {
            display: "flex",
            flexWrap: "wrap"
        },
        contentItem: {
            flex: "calc(50% - 4px)",
            "@media (max-width: 500px)": {
            flex: "100%"
            }
        },
        textContent: {
            fontSize: 18,
            textAlign: "center",
            border: "1px solid black"
        },
        footer: {
        }
    })
);

