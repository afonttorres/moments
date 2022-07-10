import React from "react"
import { Avatar } from "../Avatar/Avatar"
import { UserFeed } from "./Feed.styled"
import {dataService, DataService} from '../../services/dataServices';

export const UsersFeed = ({ users }) => {
    return (
        <UserFeed>
            {users.map((user, key) => (
            <>{user.id !== dataService.getLoggedUser() ? <Avatar key={key} width={'17.5%'} user={user}/> : null}</>
            ))}
        </UserFeed>
    )
}