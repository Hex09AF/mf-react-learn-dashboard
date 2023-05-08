import React, { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { NavigationManager } from "../components/NavigationManager";

const Page1 = lazy(() =>
  import("../pages/Page1").then((x) => {
    return x;
  })
);

const Page2 = lazy(() =>
  import("../pages/Page2").then((x) => {
    return x;
  })
);

export const routes = [
  {
    path: "/",
    element: (
      <NavigationManager>
        <Outlet />
      </NavigationManager>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback="Loading Dashboard Page 1...">
            <Page1 />
          </Suspense>
        ),
      },
      {
        path: "page-1",
        element: (
          <Suspense fallback="Loading Dashboard Page 1...">
            <Page1 />
          </Suspense>
        ),
      },
      {
        path: "page-2",
        element: (
          <Suspense fallback="Loading Dashboard Page 2...">
            <Page2 />
          </Suspense>
        ),
      },
    ],
  },
];
