import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { NavWrapper, NavTitleRow, NavItemsColDT, NavItemsRowDT, NavItemsColMB, NavItemsRowMB, NavItem } from "./Nav.styled";
import { MainTitle } from '../../pages/Styles.styled';
import { PBurgerButton } from "../Buttons";
import { AuthService } from "../../services/AuthService";

export const Nav = (props) => {

    const [location, setLocation] = useState(useLocation(0).pathname.toString().substring(1, (useLocation(0).pathname.toString().length)))
    const [dtOutput, setDToutput] = useState(["upload", "search", "notifications", "sign in"]);
    const [mbOutput, setMBoutput] = useState([{ content: <i className="fa-regular fa-bookmark"></i>, linkTo: 'saved' }, { content: <i className="fa-regular fa-heart"></i>, linkTo: 'favorites' }]);
    const [title, setTitle] = useState("Moments");
    const [profileUsername, setProfileUsername] = useState(props.user ? props.user.username : 'Profile');
    const [style, setStyle] = useState();
    const [loggedUser, setLoggedUser] = useState();


    useEffect(()=>{setLoggedUser(AuthService.getAuth())},[])
    useEffect(() => {
        setProfileUsername(props.user ? props.user.username : 'Profile');
    }, [props.user])

    useEffect(() => {
        modifyDToutput();
        modifyMBoutput();
    }, [location, title, profileUsername, loggedUser]);

    useEffect(() => {
        let path =  window.location.pathname;
        path !== location ? setLocation(path.substring(1, path.length)) : setLocation(location)
    }, [window.location.pathname])

    const modifyDToutput = () => {
        let data;
        if (!location.includes('home') || location !== '') data = ["home", "upload", "search", "notifications", loggedUser ? 'profile' : 'log in'];
        if (location === "") { data.splice(data.indexOf('home'), 1); setDToutput(data); return; }
        if (location === 'profile' || location.includes('profile')) setTitle(profileUsername);
        if (location.includes('profile/')) { setDToutput(data); return; }
        data.splice(data.indexOf(location), 1);
        setDToutput(data);
    }

    const modifyMBoutput = () => {
        if (location.includes('profile')) {
            if(!props.user || !loggedUser) return;
            if ((props.user.id !== loggedUser.id)) { setMBoutput([]); return; }
            setMBoutput([{ content: <PBurgerButton /> }]);
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
        <NavWrapper color={location.includes('profile') ? `var(--no-bg)` : `var(--main-bg)`}>
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