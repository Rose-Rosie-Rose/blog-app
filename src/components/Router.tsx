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

interface RouterProps {
  isAuthenticated: boolean;
}

export const Router = ({ isAuthenticated }: RouterProps) => {
  return (
    <>
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts" element={<PostListPage />} />
            <Route path="/posts/:id" element={<DetailPage />} />
            <Route path="/posts/new" element={<PostNewPage />} />
            <Route path="/posts/edit/:id" element={<PostEditPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/*" element={<LoginPage />} />
          </>
        )}
      </Routes>
    </>
  );
};
