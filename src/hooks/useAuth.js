import { useSelector, shallowEqual } from "react-redux";

export const useAuth = () => {
  const { user, headers } = useSelector(({ auth }) => auth, shallowEqual);

  return { user, headers, isAuthenticated: !!headers && !!user };
};
