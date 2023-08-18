import { css  } from "@emotion/react";

export const SLayout = css`
    border-bottom: 1px solid #dbdbdb;
    padding: 20px 5px;
`;

export const STitle = css`
    margin-bottom: 10px;
    font-size: 11px;
    font-weight: 600;
    cursor: default;
`;

export const SListContainer = css`

`;

export const SListBox = (isSelected) => css` // isSelected 매개변수를 이쪽으로 <li css={S.SListBox(true)}> 전달
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    padding: 10px;
    ${isSelected && "background-color: #eaeaea; "}
    cursor: pointer;

`;

// export const SListBox = (isSelected) => {
//     return css` 
//     ${isSelected && "background-color: #dbdbdb; "}
//     background-color: ${isSelected ? "#dbdbdb" : "transparent"; }
//      위 두줄 중에 하나 선택 가능하다.
// `;
// } 이렇게도 사용 가능하다

export const SListName = (isSelected) => css`
    display: inline-block;
    flex-grow: 1;
    margin-left: 5px;
    font-size: 14px;
    ${isSelected && "font-weigh: 600; "}
`;

export const SCount = (isSelected) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    width: 30px;
    height: 20px;
    padding: 2px 5px;
    font-size: 11px;
    font-weight: 600;
    background-color: ${isSelected ? "#fff" : "#eaeaea"};
`;