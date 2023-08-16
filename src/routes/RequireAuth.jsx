import { Navigate } from "react-router-dom";

const RequireAuth = ({children, auth}) => {
  if (auth === null) return <Navigate to="/login" />;

  return children;
}

export default RequireAuth;
