import React from "react";
import { SearchForm } from "../../components/Forms/SearchForm";
import { SearchFeed } from '../../components/Feeds/SearchFeed';
import { View } from "../../pages/Styles.styled";
export const VSearcher = () => {
    return (
        <View>
            <SearchForm heightMB={'fit-content'} heightDT={'fit-content'}/>
            <SearchFeed />
        </View>
    )
}