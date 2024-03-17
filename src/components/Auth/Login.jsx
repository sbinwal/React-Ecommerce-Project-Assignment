import { login } from "../services/api";


const handleLogin = async ({email, password}) => {
  try {
    const token = await login(email, password);
    return token;
  } catch (error) {
    alert("user not found")
    console.error('Login failed:', error);
    throw error;
  }
};

export default handleLogin;
