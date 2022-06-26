import React from "react";
import { SearchForm } from "../../components/Forms/SearchForm";
import { SearchFeed } from '../../components/Feeds/SearchFeed';
import { MainContainer, View } from "../../pages/Styles.styled";
export const VSearcher = (props) => {
    return (
        <MainContainer>
            <View>
                <SearchForm heightMB={'fit-content'} heightDT={'fit-content'} searchMoment={props.searchMoment} cancelSearch={props.cancelSearch}/>
                <SearchFeed suggestions={props.suggestions} search={props.search}/>
            </View>
        </MainContainer>
    )
}