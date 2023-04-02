import React from "react";
import { useAuth } from "../hooks";
import { BaseLayout } from "../Layout";
import { Button } from "../components";
import { useNavigate, Link } from "react-router-dom";

function Dashboard() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  if (!loading && !user) {
    navigate("/login");
  }

  const userInitials = user?.name
    .split(" ")
    .map((name) => name[0])
    .join("");
  return (
    <BaseLayout>
      <div className="grid py-8 place-items-center">
        <div className="text-white flex flex-col justify-center">
          <div className="bg-gradient-to-tr to-gradientStart from-gradientEnd font-bold text-3xl h-16 w-16 mx-auto grid place-items-center rounded-full ">
            {userInitials}
          </div>
          <h1 className="text-center">Welcome back, {user?.name}</h1>
          <div className="">
            <h2 className="email">
              Use these buttons below to make changes to your portfolio
            </h2>
            <div className="flex gap-4 justify-center">
              <Button radii="md">
                <Link to={"/details"}>Edit Portfolio</Link>
              </Button>
              <Button radii="md">
                <Link to={`/${user?.name}`}>View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

export default Dashboard;
