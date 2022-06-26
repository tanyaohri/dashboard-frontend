import { ReactComponent as DashboardIcon } from "./Icons/file/dashboardlogo.svg";
import { ReactComponent as TicketIcon } from "./Icons/file/ticket.svg";
import { ReactComponent as IdeaIcon } from "./Icons/file/idea.svg";
import { ReactComponent as OverviewIcon } from "./Icons/file/overviewActiveIcon.svg";
import { ReactComponent as ArticleIcon } from "./Icons/file/articlesIcon.svg";
import { ReactComponent as AgentIcon } from "./Icons/file/agentsIcon.svg";
import { ReactComponent as ContactIcon } from "./Icons/file/contact.svg";
import { ReactComponent as SubscriptionIcon } from "./Icons/file/subscription.svg";
import { ReactComponent as SettingsIcon } from "./Icons/file/settings.svg";
import { ReactComponent as DividerGreyIcon } from "./Icons/file/divider_grey.svg";
import { ReactComponent as DividerBlueIcon } from "./Icons/file/divider_blue.svg";

import { SvgIcon } from "@material-ui/core";

const HeaderLogo = (props) => {
    return (
        <SvgIcon>
            <DashboardIcon {...props} />
        </SvgIcon>
    )
}

const OverviewActiveLogo = (props) => {
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


const BlueDividerIcon = (props) => {
    return (
        <SvgIcon>
            <DividerBlueIcon {...props} />
        </SvgIcon>
    )
}

const GreyDividerIcon = (props) => {
    return (
        <SvgIcon>
            <DividerGreyIcon {...props} />
        </SvgIcon>
    )
}
export {
    HeaderLogo,
    OverviewActiveLogo,
    IdeaLogo,
    AgentLogo,
    ArticleLogo,
    TicketLogo,
    ContactLogo,
    SettingLogo,
    SubscriptionLogo,
    GreyDividerIcon,
    BlueDividerIcon
}