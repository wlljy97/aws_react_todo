import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./style"
import Header from './Header/Header';
import List from './List/List';

function MainSidebar(props) {
    const [ isShow, setIsShow ] = useState(false);

    const handleMenuToggleClick = () => {
        setIsShow(!isShow);
    }

    const [ mainMenuListArray, setMainMenuListArray ] = useState ({
        tasks: [
            {
                id: 1,
                path: "/upcoming",
                icon: "",
                name: "Upcoming",
                count: 12
            },
            {
                id: 2,
                path: "/today",
                icon: "",
                name: "Today",
                count: 5
            },
            {
                id: 3,
                path: "/calendar",
                icon: "",
                name: "Calendar",
                count: 0
            },
            {
                id: 4,
                path: "/stickywall",
                icon: "",
                name: "Sticky Wall",
                count: 0
            }
        ],
    
        lists: [
            {
                id: 1,
                path: "",
                icon: "",
                name: "Personal",
                count: 0
            },
            {
                id: 2,
                path: "",
                icon: "",
                name: "Work",
                count: 0
            },
            {
                id: 3,
                path: "",
                icon: "",
                name: "Lisk 1",
                count: 0
            }
        ]

    });

    return (
        
        <div css={S.SLayout(isShow)}>
            <Header isShow={isShow} menuToggleOnClick={handleMenuToggleClick} />
            {isShow && (
                <>
                    <List title={"TASKS"} list={mainMenuListArray.tasks}/>
                    <List title={"LISTS"} list={mainMenuListArray.lists}/>
                </>
            )}
        
        </div>
        
    );
};

export default MainSidebar;