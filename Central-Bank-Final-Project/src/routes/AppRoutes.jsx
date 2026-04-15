import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import OTPVerification from "../pages/OTPVerification";
import PasswordChange from "../pages/PasswordChange";
import Success from "../pages/Success";
import Dashboard from "../pages/DashBoard";
import TransactionReports from "../pages/TransactionReports";
import QRDetails from "../pages/QRDetails";
import LanguageUpdate from "../pages/LanguageUpdate";
import HelpSupport from "../pages/HelpSupport";
import TicketDetails from "../pages/TicketDetails";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/otp" element={<OTPVerification />} />
        <Route path="/change-password" element={<PasswordChange />} />
        <Route path="/success" element={<Success />} />
        <Route path="/transactions" element={<TransactionReports />} />
        <Route path="/qr" element={<QRDetails />} />
        <Route path="/language" element={<LanguageUpdate />} />
        <Route path="/help" element={<HelpSupport />} />
        <Route path="/ticket" element={<TicketDetails />} />
      </Routes>
    </BrowserRouter>
  );
}