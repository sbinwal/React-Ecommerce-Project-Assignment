import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ Component }) => {
  const token = localStorage.getItem('token');
  const location = useLocation();

  // Check if the user is trying to access "/viewcart" or "/login"
  const isLogin = location.pathname === '/login';

  //check if the user is trying to access "/viewcart"
  const isCart = location.pathname === '/viewcart';

  // Check if the user is authenticated
  const isAuthenticated = !!token;

  return isAuthenticated ? (
    isLogin ?  <Navigate to="/" />: <Component />
  ) : (
    isCart ? <Navigate to = "/login"/> : <Component/>
  );
};

export default PrivateRoute;
