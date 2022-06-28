import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from 'react-router-dom';
import { NavWrapper, NavTitleRow, NavItemsColDT, NavItemsRowDT, NavItemsColMB, NavItemsRowMB, NavItem } from "./Nav.styled";
import { MainTitle } from '../../pages/Styles.styled';

export const Nav = (props) => {

    const [location] = useState(useLocation(0).pathname.toString().substring(1, (useLocation(0).pathname.toString().length)))
    const [dtOutput, setDToutput] = useState(["upload", "search", "notifications", "sign in", "log in"]);
    const [mbOutput, setMBoutput] = useState([<i className="fa-regular fa-bookmark"></i>, <i className="fa-regular fa-heart"></i>]);
    const [title, setTitle] = useState("Moments");
    const [profileAlias, setProfileAlias] = useState()

    useEffect(() => {
        if (props.isLogged == undefined) return;
        modifyDToutput();
        modifyMBoutput();
        const log = JSON.parse(localStorage.getItem('log'));
        setProfileAlias(log ? log.alias : 'Profile')
    }, [props.isLogged, location, profileAlias, title]);

    const modifyDToutput = () => {
        let data;
        if (!location.includes('home') || location !== '') data = ["home", "upload", "search", "notifications", props.isLogged ? "profile" : "log in"];
        if (location == "") { data.splice(data.indexOf('home'), 1); setDToutput(data); return; }
        if (location.includes('profile')) setTitle(profileAlias);
        data.splice(data.indexOf(location), 1)
        setDToutput(data);
    }

    const modifyMBoutput = () => {
        if (location == 'profile') setMBoutput([<i className="fa-solid fa-bars"></i>])
    }
    
    return (
        <NavWrapper color={location == "profile" ? `var(--no-bg)` : `var(--main-bg)`}>
            <NavTitleRow>
                <MainTitle>{title}</MainTitle>
            </NavTitleRow>
            <NavItemsColDT>
                <NavItemsRowDT>{dtOutput.map((item, key) => <NavItem key={key}><Link to={`/${item.split(" ").join("-")}`}>{item}</Link></NavItem>)}
                </NavItemsRowDT>
            </NavItemsColDT>
            <NavItemsColMB>
                <NavItemsRowMB>{mbOutput.map((item, key) => <NavItem key={key}>{item}</NavItem>)}
                </NavItemsRowMB>
            </NavItemsColMB>
        </NavWrapper>
    )
}