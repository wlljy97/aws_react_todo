import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HiCalendar } from 'react-icons/hi';
import * as S from "./style";
import { useLocation, useNavigate } from 'react-router-dom';

function List({ title, list }) {
    const navigate = useNavigate();

    const location = useLocation();
    const pathName = location.pathname
    
    const handleLinkClick = (path) => {
        navigate(path);
    }
    
    return (
        <div css={S.SLayout}>
            <h2 css={S.STitle}>{title}</h2>
            <ul css={S.SListContainer}>
                {list.map(item => {
                    const isSelected = pathName.startsWith(item.path);
                    return(
                        <li css={S.SListBox(isSelected)} key={item.id} onClick={() => {
                            handleLinkClick(item.path);
                        }}>
                            <HiCalendar />
                            <span css={S.SListName(isSelected)}>{item.name}</span>
                            {!!item.count && (<div css={S.SCount(isSelected)}>{item.count}</div>)}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default List;