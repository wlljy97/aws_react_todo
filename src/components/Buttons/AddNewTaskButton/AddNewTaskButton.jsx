import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import { FaPlus } from 'react-icons/fa';
import { isRightSubSidebarState } from '../../../store/sidebarStore';
import { useRecoilState } from 'recoil';

function AddNewTaskButton({ target, setTarget }) {
    const [ isRightSubSidebar, setIsRightSubSidebar ] = useRecoilState(isRightSubSidebarState);
    
    const handleOpenClick = (e) => {
        if(target === e.target) { // 자기 자신을 클릭 하지 않으면 닫히지 않게
            setIsRightSubSidebar(false);
            setTarget(null);
        } else if(target === null){ // 자기 자신을 클릭 했을 때 닫히게
            setIsRightSubSidebar(true)
            setTarget(e.target);
        } else {
            setTarget(e.target);
        }
    }

    return (
        <button css={S.SLayout} onClick={handleOpenClick}>
            <FaPlus css={S.SIcon} />
            <span css={S.SName}>Add New Task</span>
        </button>
    );
}

export default AddNewTaskButton;