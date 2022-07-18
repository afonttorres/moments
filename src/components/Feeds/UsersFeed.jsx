import React from "react"
import { Avatar } from "../Avatar/Avatar"
import { UserFeed } from "./Feed.styled"
import { authUtil } from "../../utils/auth";

export const UsersFeed = ({ users }) => {

    return (
        <UserFeed>
            {users.map((user, key) => (
                <>{parseInt(user.id) !== parseInt(authUtil.getLoggedUser()) ? <Avatar key={key} width={'17.5%'} user={user} /> : null}</>
            ))}
        </UserFeed>
    )
}
