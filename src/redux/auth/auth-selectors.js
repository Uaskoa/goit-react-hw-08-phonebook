// import { createSelector } from "@reduxjs/toolkit";

export const getIsAuth = (state) => state.auth.token;
export const getUsername = (state) => state.auth.user.name;