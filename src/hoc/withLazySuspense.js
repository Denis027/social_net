import React, { Suspense } from "react";
import Preloader from "../components/Preloader.js";

export const withSuspense = (Component) => {
  const ComponentWithSuspense = (props) => {
    return () => {
      <Suspense fallback={<Preloader />}>
        <Component {...props} />;
      </Suspense>;
    };
  };
  return ComponentWithSuspense;
};
