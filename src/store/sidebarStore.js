import { atom } from "recoil";

// 많이 쓰이는 전역 상태
export const isSidebarShowState = atom({
    key: "isSidebarShow",
    default: false // 실제로 데이터가 저장
});