import React from "react";
import { useState } from "react";
import { Button, SearcherForm, Input, SCancelCol, SearchBar, SIconCol } from "./Forms.styled";
import { SearchButton } from '../../components/Buttons/SearchButton';
import { Col, DetailText, Row } from "../../pages/Styles.styled";
import { CancelButton } from "../Buttons";
import { useEffect } from "react";
export const SearchForm = (props) => {

    const [search, setSearch] = useState('');
    const [isCancelled, setIsCancelled] = useState(false);

    useEffect(() => { }, [props])

    const handleChange = (e) => {
        setSearch(e.target.value);
        if (e.target.value.length >= 3) {
            if (!sanitize()) return;
            props.searchMoment(search.toLowerCase());
        }

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
        setIsCancelled(true);
        resetValues();
        props.cancelSearch();

    }

    const sanitize = () => {
        if ((search === undefined || search == "") && !isCancelled) { props.openModal('Search input might be empty.'); setSearch(''); return false; }
        if (typeof search !== 'string' || search == ' ') { props.openModal('Wrong type of input!'); setSearch(''); return false; }
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