import React, { useEffect, useState } from "react";
import { generalServices } from "../../services/generalServices";
import { Link, useLocation, useParams } from 'react-router-dom';
import { AddIcon, MBFooter, MBFooterItem, MBFooterRow } from "./Footer.styled";

export const Footer = (props) => {
    const path = window.location.pathname;
    const [location, setLocation] = useState(path);
    const [output] = useState([
        { button: "home", content: <i className="fa-solid fa-house"></i> },
        { button: "search", content: <i className="fa-solid fa-magnifying-glass"></i> },
        { button: "upload", content: "+" },
        { button: "notifications", content: <i className="fa-solid fa-bell"></i> },
        { button: "profile", content: <i className="fa-solid fa-circle-user"></i> }
    ]);

    return (
        <MBFooter>
            <MBFooterRow>{output.map((item, key) => key !== 2 ? <MBFooterItem key={key} color={location.includes(item.button) ? `var(--interaction-color)` : `var(--font-color-plain-noBg)`}><Link to={`/${item.button}`}>{item.content}</Link></MBFooterItem> : <AddIcon key={key}><Link to={`/${item.button}`}>{item.content}</Link></AddIcon>)}
            </MBFooterRow>
        </MBFooter>
    )
}

//