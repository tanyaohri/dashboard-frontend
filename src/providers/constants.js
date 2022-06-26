import { AgentLogo, ArticleLogo, ContactLogo, HeaderLogo, IdeaLogo, OverviewActiveLogo, SettingLogo, SubscriptionLogo, TicketLogo } from "./Icons"

export const COMPONENTS = {
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

export const SiderbarTitle = 
{
        
        icon: <HeaderLogo viewBox="0 4 42 34" />,
        name: "Dashboard"
    }
      
export const SidebarListMeta = [
   
    {
        route : "/overview",
        icon: <OverviewActiveLogo  viewBox="0 0 15 12" /> ,
        name: "Overview"
    },
    {
        route : "/ticket",
        icon: <TicketLogo/> ,
        name: "Tickets"
    },
    {
        route : "/contacts",
        icon: <ContactLogo/> ,
        name: "Contacts"
    },
    {
        route : "/agents",
        icon: <AgentLogo/> ,
        name: "Agents"
    },
    {
        route : "/articles",
        icon: <ArticleLogo/> ,
        name: "Articles"
    },
    {
        route : "/articles",
        icon: null ,
        name: null
    },
    {
        route : "/settings",
        icon: <SettingLogo/> ,
        name: "Settings"
    },
    {
        route : "/subscription",
        icon: <SubscriptionLogo/> ,
        name: "Subscription",

    }

]


