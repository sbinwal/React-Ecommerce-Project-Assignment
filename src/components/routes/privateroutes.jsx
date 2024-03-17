import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ Component }) => {
  const token = localStorage.getItem('token');
  const location = useLocation();

  // Check if the user is trying to access "/" or "/login"
  const isHomeOrLogin = location.pathname === '/login';

  // Check if the user is authenticated
  const isAuthenticated = !!token;

  return isAuthenticated ? (
    isHomeOrLogin ?  <Navigate to="/" />: <Component />
  ) : (
    <Component/>
  );
};

export default PrivateRoute;
