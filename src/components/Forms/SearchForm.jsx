import React from "react";
import { useState, useEffect } from "react";
import { SearcherForm, Input, FCancelCol, SearchBar, FIconCol } from "./Forms.styled";
import { SearchButton } from '../../components/Buttons/SearchButton';
import { Row } from "../../pages/Styles.styled";
import { CancelButton } from "../Buttons";
import { validationUtil } from "../../utils/validation";

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
        setIsCancelled(false);
        e.preventDefault();
        if (!sanitize()) return;
        props.searchMoment(search.toLowerCase().trim());
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
        if (!validationUtil.validationSum(search, 'search')) return true;
        if (isCancelled) return;
        props.openModal(validationUtil.validationSum(search, 'search'));
    }

    return (
        <SearcherForm heightMB={props.heightMB} heightDT={props.heightDT} onSubmit={handleSubmit}>
            <Row>
                <SearchBar border={search !== "" ? `2px solid var(--ux-border-color)` : `1px solid var(--border-color)`}>
                    <FIconCol color={search !== "" ? '--interaction-color' : '--font-color-plain-noBg'}>
                        <SearchButton type='submit' />
                    </FIconCol>
                    <Input
                        onChange={handleChange}
                        typeof="search"
                        name="search"
                        placeholder="Search"
                        value={search}
                    />
                </SearchBar>
                <FCancelCol>
                    <CancelButton type='reset' action={cancel} />
                </FCancelCol>
            </Row>
        </SearcherForm>
    )
}