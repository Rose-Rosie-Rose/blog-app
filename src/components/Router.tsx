import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  PostDetailPage,
  PostEditPage,
  PostListPage,
  PostNewPage,
  ProfilePage,
} from "../pages";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostListPage />} />
        <Route path="/posts/:id" element={<PostDetailPage />} />
        <Route path="/posts/new" element={<PostNewPage />} />
        <Route path="/posts/edit/:ud" element={<PostEditPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
};
