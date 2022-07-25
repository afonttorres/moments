import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { authUtil } from "../../utils/auth";
import { AddIcon, MBFooter, MBFooterItem, MBFooterRow } from "./Footer.styled";

export const Footer = (props) => {
    const path = useLocation().pathname;
    const location = path;

    const [output, setOutput] = useState([]);

    useEffect(() => {
        let log = authUtil.getLoggedUser();
        setOutput([
            { button: "home", content: <i className="fa-solid fa-house"></i> },
            { button: "search", content: <i className="fa-solid fa-magnifying-glass"></i> },
            { button: "upload", content: "+" },
            { button: "notifications", content: <i className="fa-solid fa-bell"></i> },
            { button: log ? "profile" : "log-in", content: <i className="fa-solid fa-circle-user"></i> }
        ])
    }, [])

    return (
        <MBFooter>
            <MBFooterRow>{output.map((item, key) => key !== 2 ? <MBFooterItem key={key} color={(!location.includes('profile/') && location.includes(item.button)) ? `var(--interaction-color)` : `var(--font-color-plain-noBg)`}><Link to={`/${item.button}`}>{item.content}</Link></MBFooterItem> : <AddIcon key={key}><Link to={`/${item.button}`}>{item.content}</Link></AddIcon>)}
            </MBFooterRow>
        </MBFooter>
    )
}