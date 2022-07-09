import React from "react"
export const UsersFeed = ({ users }) => {

    console.log(users)
    return users.map((user) => user.username+' ');
}