import React from "react";
import { Link } from "react-router-dom";
import { TitleRow, FeedImg, LikesSavesFeed } from "../../components/Feeds/Feed.styled";
import { MainTitle, View } from "../../pages/Styles.styled";

export const VLikesAndSaves = ({ moments, adj }) => {

    return (
        <View>
            <TitleRow>
                <MainTitle>Your {adj} moments</MainTitle>
            </TitleRow>
            <LikesSavesFeed>
                {moments.map((moment, key) => (
                    <Link to={`/profile/${moment.creator.id}/detail/${moment.id}`}><FeedImg imgUrl={moment.imgUrl} /></Link>
                )).reverse()}
            </LikesSavesFeed>
        </View>
    )
}