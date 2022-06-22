export const COMPONENTS= {
    LABEL_VAL_VIEW: {
        HORIZONTAL: "horizontal",
        VERTICAL: "vertical",
    }
}


const colors = {
    grey_100: "#DDE2FF",
    grey_300: "#A4A6B3",
    grey_700: "#363740",
}

export const theme = {
sidebar: {
    itemListWidth:240,
    text: {
        parent: colors.grey_300, 
        child: {
            active: colors.grey_100,
            inactive:colors.grey_300
        }
    },
    background: colors.grey_700
}
}