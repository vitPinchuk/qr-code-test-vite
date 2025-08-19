import { createRoot } from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import {
  // QrCodeGenerator,
  // QrCodeScanner,
  // Navigation,
  Layout,
} from "./components";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Navigation />,
//   },
//   {
//     path: "/generate",
//     element: <QrCodeGenerator />,
//   },
//   {
//     path: "/scanner",
//     element: <QrCodeScanner />,
//   },
// ]);

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);
