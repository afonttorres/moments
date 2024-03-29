import React from "react"
import { Avatar } from "../Avatar/Avatar"
import { UserFeed } from "./Feed.styled"

export const UsersFeed = ({ users }) => {

    return (
        <UserFeed>
            {users.length > 0 ? users.map((user, key) => (
                <Avatar key={key} width={'17.5%'} user={user} />
            )) : null}
        </UserFeed>
    )
}
