import React from "react";
import { useState } from "react";
import { Form, Input, SearchBar, SIconCol } from "./Forms.styled";
import { SearchButton } from '../../components/Buttons/SearchButton';
export const SearchForm = (props) => {

    const [search, setSearch] = useState("");
    const [msg, setMsg] = useState("");

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //action
        console.log(search);
        resetValues();
    }

    const resetValues = ()=>{
        setSearch('');
        setMsg('');
    }

    return (
        <Form heightMB={props.heightMB} heightDT={props.heightDT} onSubmit={handleSubmit}>
            <SearchBar border={search !== "" ? `2px solid var(--ux-border-color)` : `1px solid var(--border-color)`}>
                <SIconCol color={search !== "" ? '--interaction-color' : '--font-color-plain-noBg'}>
                    <SearchButton type='submit'/>
                </SIconCol>
                <Input
                    onChange={handleChange}
                    typeof="search"
                    name="search"
                    placeholder="Search"
                    value={search}
                />
            </SearchBar>
        </Form>
    )
}