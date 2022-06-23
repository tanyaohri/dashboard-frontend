export const COMPONENTS= {
    label_with_val: {
        horizontal: "horizontal",
        vertical: "vertical",
    },
    graph:{
        view_type:{
            pie:"pieChart",
            line:"lineChart",
            bar:"barChart"
        }
    }
    
}


const colors = {
    grey_100: "#DDE2FF",
    grey_300: "#A4A6B3",
    grey_700: "#363740",
    blue_600:""
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

export const datatables={
    userColsMeta:{
        
    }
}
