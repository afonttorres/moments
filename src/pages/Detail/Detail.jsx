import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import moments from '../../mockData.json';
import { VDetailDT } from "../../views/VDetail/VDetailDT";
import { VDetailMB } from "../../views/VDetail/VDetailMB";
import { HiddenContainerDT, HiddenContainerMB } from "../Pages.styled";

export const MomentDetail = () => {

    const findMoment = () => {
        let foundMoment = moments.filter(moment => moment.id == id);
        foundMoment = foundMoment[0];
        return foundMoment;
    }

    const [id, setId] = useState(useParams().id)
    const [moment, setMoment] = useState(findMoment());
    
    return (
        <>
            <HiddenContainerMB>
                <VDetailDT moment={moment} />
            </HiddenContainerMB>
            <HiddenContainerDT>
                <VDetailMB moment={moment} />
            </HiddenContainerDT>
        </>
    )
};