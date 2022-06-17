import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from 'react-router-dom';
import { AddIcon, MBFooter, MBFooterItem, MBFooterRow } from "./Footer.styled";

export const Footer = (props) => {
    const [location, setLocation] = useState(window.location.pathname);
    const [output] = useState([
        { button: "home", content: <i className="fa-solid fa-house"></i> },
        { button: "search", content: <i className="fa-solid fa-magnifying-glass"></i> },
        { button: "upload", content: "+" },
        { button: "notifications", content: <i className="fa-solid fa-bell"></i> },
        { button: "profile", content: <i className="fa-solid fa-circle-user"></i> }
    ]);
    
    console.log(window.location.pathname)
    console.log(location.includes(output[0].button))
    return (
        <MBFooter>
            <MBFooterRow>{output.map((item, key) => key !== 2 ? <MBFooterItem key={key} color={location.includes(item.button) ? `var(--interaction-color)` : `var(--font-color-plain-noBg)`}><Link to={`/${item.button}`}>{item.content}</Link></MBFooterItem> : <AddIcon key={key}><Link to={`/${item.button}`}>{item.content}</Link></AddIcon>)}
            </MBFooterRow>
        </MBFooter>
    )
}

//