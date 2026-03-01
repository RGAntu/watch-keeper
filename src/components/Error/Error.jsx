import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import { Link, useRouteError } from "react-router";
import Button from "../button/Button.jsx";

const Error = () => {
  const error = useRouteError();
  console.log(error?.error?.message);
  return (
    <>
      <Navbar></Navbar>
      <div className="text-center py-24">
        <h1 className="text-4xl font-bold my-5 text-primary ">
          {error?.status || 404}
        </h1>
        <p>{error?.error?.message || "Something went wrong!"}</p>
        <Link to="/">
          <Button label="Go to Homepage"></Button>
        </Link>
      </div>
    </>
  );
};

export default Error;
