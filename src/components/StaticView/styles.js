import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) =>
    createStyles({
        root: {
            display: "flex",
            minWidth: 320,
            maxWidth: 500,
            flexDirection: "column", //change to row for horizontal layout
            "& .MuiCardHeader-root": {
            backgroundColor: "yellow"
            },
            "& .MuiCardHeader-title": {
            backgroundColor: "#FCFCFC"
            },
            "& .MuiCardHeader-subheader	": {
            backgroundImage: "linear-gradient(to bottom right, #090977, #00d4ff);"
            },
            "& .MuiCardContent-root": {
            backgroundImage: "linear-gradient(to bottom right, #00d4ff, #00ff1d);"
            }
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
            fontSize: 14,
            backgroundImage: "linear-gradient(to bottom right, #8c9d9b, #bdcdbf);"
        }
    })
);

