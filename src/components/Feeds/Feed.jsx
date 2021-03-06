import React from "react";
import { MainContainer } from "../../pages/Styles.styled";
import { Card } from '../Cards/Card';
import { FeedContainer } from "./Feed.styled";

export const Feed = (props) => {

    return (
        <MainContainer>
            <FeedContainer>{props.moments.map((moment, key) =>
                <Card key={moment.id}
                    moment={moment} location={props.location}
                    update={props.update} erase={props.erase}
                    like={props.like}
                    save={props.save} />).reverse()}
            </FeedContainer>
        </MainContainer>
    )
}