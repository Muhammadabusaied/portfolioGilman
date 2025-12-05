import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import Projects from "../Components/Projects/Projects";
import AboutMe from "../Components/AboutMe/AboutMe";
import Contact from "../Components/Contact/Contact";
import Skills from "../Components/Skills/Skills";
import Blogs from "../Components/Blogs/Blogs";
import FullBlog from "../Components/Blogs/FullBlog";
import NewBlog from "../Components/Blogs/NewBlog";
import Achievements from "../Components/Achievements/Achievements";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/research",
                element: <Projects></Projects>
            },
            {
                path: "/achievements",
                element: <Achievements></Achievements>
            },
            {
                path: "/aboutme",
                element: <AboutMe></AboutMe>
            },
            {
                path: "/skills",
                element: <Skills></Skills>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "/blog/:id",
                element: <FullBlog></FullBlog>
            },
            {
                path: "/newblog",
                element: <NewBlog></NewBlog>
            }
        ]
    },
]);

export default router;