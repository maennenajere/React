import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = () => (
    <>
        <Navbar />
        <Header />
        <div id="container">
            <Outlet />
        </div>
        <Footer />
    </>
);

const router = createBrowserRouter([
    {
        errorElement: <NotFound />,
    },
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contactus",
                element: <ContactUs />,
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
    <RouterProvider router={router}/>
    </React.StrictMode>
);