import { Redirect } from "react-router-dom"

const ProtectedRoute = (props) => {
  const { loggedIn, children } = props;
  return loggedIn ? children : <Redirect to="./sign-in" />;
};

export default ProtectedRoute;