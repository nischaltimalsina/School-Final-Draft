import { useState } from "react";

import { AdminRoutes, StaffRoutes, StudentRoutes } from "../lib/routeData";

const useUserSpecificRoutes = ({ user }) => {
  const [UserRoutes, setUserRoutes] = useState([]);

  user.role === "ADMIN"
    ? setUserRoutes([...AdminRoutes])
    : user.role === "STAFF"
    ? setUserRoutes([...StaffRoutes])
    : user.role === "STUDENT"
    ? setUserRoutes([...StudentRoutes])
    : setUserRoutes([]);

  return { UserRoutes };
};

export default useUserSpecificRoutes;
