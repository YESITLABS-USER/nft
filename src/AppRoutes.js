import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Dashboard from "./pages/Dashboard";
import ContactFaq from "./pages/Contact&Faq";
import MyPage from "./pages/MyPage";
import TermCondn from "./pages/Term&Condn";
import AboutService from "./pages/AboutService";
import MyProfile from "./pages/MyProfile";
import Loyality from "./pages/Loyality";
import CoupanComponent from "./components/CoupanComponent";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/contactFaq" element={<ContactFaq />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/termCondn" element={<TermCondn />} />
      <Route path="/aboutService" element={<AboutService />} />
      <Route path="/myprofile" element={<MyProfile />} />
      <Route path="/loyality" element={<Loyality />} />
      <Route path="/coupan" element={<CoupanComponent />} />
    </Routes>
  );
};

export default AppRoutes;
