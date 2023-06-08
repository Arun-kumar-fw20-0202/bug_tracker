import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import { PrivateRoute } from "./PrivateRoute";
import { Deshboard } from "../Pages/Deshboard";
import { ChakraProvider } from "@chakra-ui/react";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <ChakraProvider>
              <Login />
            </ChakraProvider>
          }
        />
        <Route
          path="/"
          element={
            <>
              <PrivateRoute>
                <Deshboard />
              </PrivateRoute>
            </>
          }
        />
      </Routes>
    </>
  );
};
