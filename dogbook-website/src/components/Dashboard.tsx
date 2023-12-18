import React, { FC, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => {
  const [authenticated, setauthenticated] = useState<string | null>(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

  if (!authenticated) {
    return <Navigate replace to="/login" />;
  } else {
    return (
      <div>
        <p>Welcome to your Dashboard</p>
      </div>
    );
  }
};

export default Dashboard;