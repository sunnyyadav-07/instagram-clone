import { useContext } from "react";
import { authContext } from "../auth.context";
import { getMe, login, register } from "../services/auth.api";

export const useAuthContext = () => {
  const { user, setUser, loading, setLoading } = useContext(authContext);

  const handleLogin = async (loginInfo) => {
    setLoading(true);
    const response = await login(loginInfo);
    setUser(response.user);
    setLoading(false);
  };
  const handleRegister = async (registerInfo) => {
    setLoading(true);
    const response = await register(registerInfo);
    setUser(response.user);
    setLoading(false);
  };
  const handleGetMe = async () => {
    setLoading(true);
    const response = await getMe();
    setUser(response.user);
    setLoading(false);
  };
  return { user, loading, handleLogin, handleRegister,handleGetMe };
};
