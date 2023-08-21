import React, { useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import { isSidebarShowState, isRightSubSidebarState } from '../../store/sidebarStore';
import { useRecoilState } from 'recoil';

function MainContainer({ children }) {
    const [ isSidebarShow, setIsSidebarShow ] = useRecoilState(isSidebarShowState);

    const [ isRightSubSidebar, setIsRightSubSidebar ] = useRecoilState(isRightSubSidebarState);

    useEffect(() => {
        return () => { // 언마운트
            setIsRightSubSidebar(false);
        }
    }, []);

    return (
        <div css={S.SContainer(isSidebarShow, isRightSubSidebar)}>
            {children}
        </div>
    );
}

export default MainContainer;