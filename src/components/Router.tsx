import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import {
  Home,
  PostDetail,
  PostEdit,
  PostList,
  PostNew,
  Profile,
} from "../pages";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/posts/new" element={<PostNew />} />
        <Route path="/posts/edit/:ud" element={<PostEdit />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
};
