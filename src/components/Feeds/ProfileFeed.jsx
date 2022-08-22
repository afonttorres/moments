import React from "react";
import { ProfileFeedContainer, FeedImg } from "./Feed.styled";
import { Link, useLocation, useParams } from "react-router-dom";
import { Col, TextCapi } from "../../pages/Styles.styled";
import { AuthService } from "../../services/AuthService";

export const ProfileFeed = (props) => {

    const location = useLocation().pathname;
    const { profileId } = useParams();

    const isLogged = AuthService.isLogged(profileId);

    return (
        <>{props.moments ?
            <ProfileFeedContainer>{props.moments.length >= 1 ?
                props.moments.map((moment, key) => (
                    <Link key={key} to={`/profile/${moment.creator.id}/detail/${moment.id}`}><FeedImg key={key} imgUrl={moment.imgUrl} /></Link>
                )).reverse() :
                <Col><TextCapi>{location === "/profile" || isLogged ? "You don't have any moments yet." : "This user doesn't have any moments yet."}</TextCapi></Col>
            }
            </ProfileFeedContainer>
            :
            null}
        </>

    )
}