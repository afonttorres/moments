import React from "react";
import { useState } from "react";
import { Button, Form, Input, SCancelCol, SearchBar, SIconCol } from "./Forms.styled";
import { SearchButton } from '../../components/Buttons/SearchButton';
import { Col, DetailText, Row } from "../../pages/Styles.styled";
import { CancelButton } from "../Buttons";
export const SearchForm = (props) => {

    const [search, setSearch] = useState("");
    const [msg, setMsg] = useState("");

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.search(search);
        resetValues();
    }

    const resetValues = () => {
        setSearch('');
        setMsg('');
    }

    const cancel = () =>{
        resetValues();
        props.cancel();
    }

    return (
        <Form heightMB={props.heightMB} heightDT={props.heightDT} onSubmit={handleSubmit}>
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
                    <CancelButton action={cancel}/>
                </SCancelCol>
            </Row>
        </Form>
    )
}