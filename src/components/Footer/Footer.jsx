import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from 'react-router-dom';
import { AddIcon, MBFooter, MBFooterItem, MBFooterRow } from "./Footer.styled";

export const Footer = (props) => {
    const [output] = useState([<i className="fa-solid fa-house"></i>, <i className="fa-solid fa-magnifying-glass"></i>, "+", <i className="fa-solid fa-bell"></i>, <i className="fa-solid fa-circle-user"></i>]);
    return (
        <MBFooter>
            <MBFooterRow>{output.map((item, key) => key !== 2 ? <MBFooterItem key={key}>{item}</MBFooterItem> : <AddIcon key={key}>{item}</AddIcon>)}
            </MBFooterRow>
        </MBFooter>
    )
}

//