import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./style";
import { HiMenu, HiSearch } from "react-icons/hi";

function Header({ isShow, menuToggleOnClick }) {
    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <h1 css={S.STitle}>Menu</h1>
                <button css={S.SToggleButton} onClick={menuToggleOnClick}><HiMenu /></button>
            </div>
            {isShow && (

            <div css={S.SSearchBox}>
                <HiSearch css={S.SSearchIcon} />
                <input css={S.SSearchInput} type="search" />
            </div>
            )}
            
        </div>
    );
}

export default Header;