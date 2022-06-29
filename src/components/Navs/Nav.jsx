import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from 'react-router-dom';
import { NavWrapper, NavTitleRow, NavItemsColDT, NavItemsRowDT, NavItemsColMB, NavItemsRowMB, NavItem } from "./Nav.styled";
import { Col, MainTitle } from '../../pages/Styles.styled';
import { PBurgerButton } from "../Buttons";

export const Nav = (props) => {

    const [location] = useState(useLocation(0).pathname.toString().substring(1, (useLocation(0).pathname.toString().length)))
    const [dtOutput, setDToutput] = useState(["upload", "search", "notifications", "sign in"]);
    const [mbOutput, setMBoutput] = useState([{ content: <i className="fa-regular fa-bookmark"></i>, linkTo: 'saved' }, { content: <i className="fa-regular fa-heart"></i>, linkTo: 'favorites' }]);
    const [title, setTitle] = useState("Moments");
    const [profileAlias, setProfileAlias] = useState();
    const [style, setStyle] = useState();

    useEffect(() => {
        const log = JSON.parse(localStorage.getItem('log'));
        console.log(log);
        if(!log) return;
        setProfileAlias(log ? log.alias : 'Profile');
        modifyDToutput();
        modifyMBoutput();
    }, [location, profileAlias, title]);

    const modifyDToutput = () => {
        let data;
        if (!location.includes('home') || location !== '') data = ["home", "upload", "search", "notifications", "profile"];
        if (location == "") { data.splice(data.indexOf('home'), 1); setDToutput(data); return; }
        if (location.includes('profile')) setTitle(profileAlias);
        data.splice(data.indexOf(location), 1)
        setDToutput(data);
    }

    const modifyMBoutput = () => {
        if (location == 'profile') {
            setMBoutput([{ content: <PBurgerButton/> }]);
            setStyle({
                height: '50%',
                width: '50%',
                lineHeight: 'calc(10vh * 0.5)',
                borderRadius: '50%',
                backgroundColor: ' rgba(255, 255, 255, 70%)',
                opacity: '100%'
            })
        }
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
                <NavItemsRowMB>{mbOutput.map((item, key) =>
                    <NavItem style={style} key={key}>{item.linkTo ?
                        <Link to={`/${item.linkTo}`}>{item.content}</Link>
                        :
                        item.content}
                    </NavItem>)}
                </NavItemsRowMB>
            </NavItemsColMB>
        </NavWrapper>
    )
}