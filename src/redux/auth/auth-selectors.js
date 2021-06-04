// import { createSelector } from "@reduxjs/toolkit";

export const getIsAuth = (state) => state.auth.isAuth;
export const getUsername = (state) => state.auth.user.name;