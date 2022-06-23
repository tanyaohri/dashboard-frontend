import { ReactComponent as DashboardIcon } from "./file/dashboardlogo.svg";
import { ReactComponent as TicketIcon } from "./file/ticket.svg";
import { ReactComponent as IdeaIcon } from "./file/idea.svg";
import { ReactComponent as OverviewIcon } from "./file/overviewActiveIcon.svg";
import { ReactComponent as ArticleIcon } from "./file/articlesIcon.svg";
import { ReactComponent as AgentIcon } from "./file/agentIcon.svg";
import { ReactComponent as ContactIcon } from "./file/contact.svg";
import { ReactComponent as SubscriptionIcon } from "./file/subscription.svg";
import { ReactComponent as SettingsIcon } from "./file/settings.svg";

import { SvgIcon } from "@material-ui/core";

const HeaderLogo = (props) => {
    return (
        <SvgIcon>
            <DashboardIcon {...props} />
        </SvgIcon>
    )
}

const overviewActiveLogo = (props) => {
    return (
        <SvgIcon>
            <OverviewIcon {...props} />
        </SvgIcon>
    )
}

const TicketLogo = (props) => {
    return (
        <SvgIcon>
            <TicketIcon {...props} />
        </SvgIcon>
    )
}

const IdeaLogo = (props) => {
    return (
        <SvgIcon>
            <IdeaIcon {...props} />
        </SvgIcon>
    )
}

const ArticleLogo = (props) => {
    return (
        <SvgIcon>
            <ArticleIcon {...props} />
        </SvgIcon>
    )
}

const AgentLogo = (props) => {
    return (
        <SvgIcon>
            <AgentIcon {...props} />
        </SvgIcon>
    )
}

const ContactLogo = (props) => {
    return (
        <SvgIcon>
            <ContactIcon {...props} />
        </SvgIcon>
    )
}

const SettingLogo = (props) => {
    return (
        <SvgIcon>
            <SettingsIcon {...props} />
        </SvgIcon>
    )
}

const SubscriptionLogo = (props) => {
    return (
        <SvgIcon>
            <SubscriptionIcon {...props} />
        </SvgIcon>
    )
}

export {
    HeaderLogo,
    overviewActiveLogo,
    IdeaLogo,
    AgentLogo,
    ArticleLogo,
    TicketLogo,
    ContactLogo,
    SettingLogo,
    SubscriptionLogo
}