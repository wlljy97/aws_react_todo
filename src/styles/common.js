import { css  } from "@emotion/react";
// 모든 페이지들 전부다 쓰게끔 하는것 global
export const GSCommon = css`
    * {
        box-sizing: border-box;
        color: #333;
    }

    *::-webkit-scrollbar {
        border: none;
        width: 5px;
    }

    *::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: #dbdbdb;
    }

    html {
        background-color: #BBD2BD;
    }

`;