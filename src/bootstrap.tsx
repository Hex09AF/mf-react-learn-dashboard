import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createRouter } from "./routing/router-factory";
import { RoutingStrategy } from "./routing/types";
import { Provider } from "react-redux";
import "./index.scss";

const mount = ({
  mountPoint,
  initialPathname,
  routingStrategy,
  store,
}: {
  mountPoint: HTMLElement;
  initialPathname?: string;
  routingStrategy?: RoutingStrategy;
  store?: any;
}) => {
  const router = createRouter({ strategy: routingStrategy, initialPathname });
  const root = createRoot(mountPoint);
  console.log(routingStrategy, "STRATEGY");
  console.log(store, "STORE");
  console.log(router);

  root.render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );

  return () => queueMicrotask(() => root.unmount());
};

export { mount };
