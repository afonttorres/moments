import React from "react";
import { ProfileFeedContainer, FeedImg } from "./Feed.styled";
import { Link } from "react-router-dom";
import { Col, TextCapi } from "../../pages/Styles.styled";

export const ProfileFeed = (props) => {

    return (
        <>{props.moments ?
            <ProfileFeedContainer>{props.moments.length >= 1 ?
                props.moments.map((moment, key) => (
                    <Link key={key} to={`/profile/${moment.creator.id}/detail/${moment.id}`}><FeedImg key={key} imgUrl={moment.imgUrl} /></Link>
                )).reverse() :
                <Col><TextCapi>This user doesn't have any moments yet.</TextCapi></Col>
            }
            </ProfileFeedContainer>
            :
            null}
        </>

    )
}