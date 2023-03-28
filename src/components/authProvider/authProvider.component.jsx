import { stateUser } from "../../store/User/User";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function AuthProvider({ children }) {
  const User = useSelector(stateUser);

  //   if (!user.user) {
  //     navigate("/login");
  //   }
  //   return children;
  return <>{User.user ? children : <Navigate to="/login"/> }</>;
}

export default AuthProvider;
