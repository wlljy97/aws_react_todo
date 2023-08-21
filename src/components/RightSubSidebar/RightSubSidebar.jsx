import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import { useRecoilState } from 'recoil';
import { isRightSubSidebarState } from '../../store/sidebarStore';

function RightSubSidebar({ children }) {
    const [ isRightSubSidebar, setIsRightSubSidebar ] = useRecoilState(isRightSubSidebarState);

    
    return (
        <div css={S.SLayout(isRightSubSidebar)}>
            {children}
        </div>
    );
}

export default RightSubSidebar;