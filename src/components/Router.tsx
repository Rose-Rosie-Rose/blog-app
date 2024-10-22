import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  DetailPage,
  PostEditPage,
  PostListPage,
  PostNewPage,
  ProfilePage,
  SignUpPage,
} from "pages";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostListPage />} />
        <Route path="/posts/:id" element={<DetailPage />} />
        <Route path="/posts/new" element={<PostNewPage />} />
        <Route path="/posts/edit/:ud" element={<PostEditPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
};
