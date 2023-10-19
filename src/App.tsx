import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CabinetPage from "./pages/CabinetPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import StorePage from "./pages/StorePage/StorePage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import { fetchAuthMe, selectIsAuth } from "./redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./redux/store";

function App() {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  return (
    <>
      <div className="grid-container ">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/cabinet" element={<CabinetPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/store/:brand" element={<StorePage />} />
            <Route path="/store/:brand/:id" element={<DetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
