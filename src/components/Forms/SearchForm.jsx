import React from "react";
import { useState } from "react";
import { Button, SearcherForm, Input, SCancelCol, SearchBar, SIconCol } from "./Forms.styled";
import { SearchButton } from '../../components/Buttons/SearchButton';
import { Col, DetailText, Row } from "../../pages/Styles.styled";
import { CancelButton } from "../Buttons";
export const SearchForm = (props) => {

    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!sanitize()) return;
        props.searchMoment(search.toLowerCase());
        resetValues();
    }

    const resetValues = () => {
        setSearch('');
    }

    const cancel = () => {
        resetValues();
        props.cancelSearch();
    }

    const sanitize = () => {
        if (search === undefined || search == "") { props.openModal('Search input might be empty.'); return false; }
        if (typeof search !== 'string') { props.openModal('Wrong type of input!'); return false; }
        return true;
    }

    return (
        <SearcherForm heightMB={props.heightMB} heightDT={props.heightDT} onSubmit={handleSubmit}>
            <Row>
                <SearchBar border={search !== "" ? `2px solid var(--ux-border-color)` : `1px solid var(--border-color)`}>
                    <SIconCol color={search !== "" ? '--interaction-color' : '--font-color-plain-noBg'}>
                        <SearchButton type='submit' />
                    </SIconCol>
                    <Input
                        onChange={handleChange}
                        typeof="search"
                        name="search"
                        placeholder="Search"
                        value={search}
                    />
                </SearchBar>
                <SCancelCol>
                    <CancelButton action={cancel} />
                </SCancelCol>
            </Row>
        </SearcherForm>
    )
}