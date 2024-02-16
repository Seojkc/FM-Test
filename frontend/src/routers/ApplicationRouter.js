import React, { useState } from "react";
import Header from "../components/Header";
import ProductsPage from "../pages/ProductsPage";
import UsersPage from "../pages/UsersPage";
import ProfilePage from "../pages/ProfilePage";
import ChangePasswordPage from "../pages/ChangePasswordPage";

export default function ApplicationRouter({
  isLoggedIn,
  setUser,
  setIsLoggedIn,
  user,
}) {
  const [page, setPage] = useState("products");
  return (
    <>
      <Header setPage={setPage} isLoggedIn={isLoggedIn} setUser={setUser} setIsLoggedIn={setIsLoggedIn} />
      {page === "products" ? (
        <ProductsPage />
      ) : page === "admin" ? (
        <UsersPage />
      ) : page === "profile" ? (
        <ProfilePage user={user} setPage={setPage} />
      ) : (
        <ChangePasswordPage />
      )}
    </>
  );
}
