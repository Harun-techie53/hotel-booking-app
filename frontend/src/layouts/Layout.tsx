import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../states/reducer";
import Toast from "../components/Toast";
import { apiGet } from "../helpers/axios/config";
import { registerUser } from "../states/authSlice";
import { useNavigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  isAuth?: boolean;
}

const Layout = ({ children, isAuth = false }: Props) => {
  const navigate = useNavigate();
  const toastState = useSelector((state: RootState) => state.toast);
  const dispatch = useDispatch();

  const fetchValidateToken = async () => {
    const response = await apiGet({
      apiPath: "/auth/validate-token",
      withCredentials: true,
    });

    console.log("response", response);

    if (response.status === "success") {
      dispatch(
        registerUser({ isAuthenticated: true, currentUser: response.data.user })
      );
    } else {
      navigate("/sign-in");
    }
  };

  useEffect(() => {
    fetchValidateToken();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {toastState.isShow && <Toast />}
      <Header />
      {!isAuth && <Hero />}
      <div className="container mx-auto py-10 flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
