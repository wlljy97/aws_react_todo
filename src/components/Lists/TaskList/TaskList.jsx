import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import { FaChevronRight } from 'react-icons/fa';
import { useRecoilState } from 'recoil';
import { isRightSubSidebarState } from '../../../store/sidebarStore';

function TaskList({ target, setTarget }) {

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

    const handleCheckBoxClick = (e) => {
        // 버블링 방지
        e.stopPropagation(); // checkBox를 클릭해도 rightbar가 나오지 않게
    }
    return (
        <ul css={S.SLayout}>
            <li css={S.SListBox} onClick={handleOpenClick}>
                <div css={S.SListContent}>
                    <input css={S.SCheckBox} type="checkbox" onClick={handleCheckBoxClick} />
                    <span>Research content ideas</span>
                </div>
                <FaChevronRight/>
            </li>
            
        </ul>
    );
}

export default TaskList;