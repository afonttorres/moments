import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Nav } from "../../components/Navs/Nav";
import { VLikesAndSaves } from "../../views/VLikesAndSaves/VLikesAndSaves";
import { momentAPIService } from "../../services/momentAPIService";
import { MainTitle, ViewContainer } from "../Styles.styled";

export const Saves = () =>{

    const [moments, setMoments] = useState();
    
    useEffect(()=>{
        getData();
    },[])

    const getData = () =>{
        momentAPIService.getUserSaves().then(res =>{
            if(!res) return;
            if(res.error) return;
            setMoments(res);
        })
    }

    return (
        <ViewContainer>
            <Nav />
            <>{moments ? <VLikesAndSaves moments={moments} adj={'saved'}/> : <MainTitle>You don't have any saved moment</MainTitle>}</>
            <Footer/>
        </ViewContainer>
    )
}