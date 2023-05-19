import { lazy } from "react";
import { Navigate } from "react-router-dom";


import Programs from "../components/Programs/Programs.js";





/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));
const FullLayouts = lazy(() => import("../Teacherdashboard/layouts/FullLayouts.js"));

const Starters = lazy(() => import("../Teacherdashboard/Starter.js"));
const Abouts = lazy(() => import("../Teacherdashboard/About.js"));
const Alertss = lazy(() => import("../Teacherdashboard/ui/Alerts"));
const Badgess = lazy(() => import("../Teacherdashboard/ui/Badges"));
// const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cardss = lazy(() => import("../Teacherdashboard/ui/Cards"));
const Grids = lazy(() => import("../Teacherdashboard/ui/Grid"));
const Tabless = lazy(() => import("../Teacherdashboard/ui/Tables"));
const Formss = lazy(() => import("../Teacherdashboard/ui/Forms"));
const Addnewteachers = lazy(() => import("../Teacherdashboard/AddnewTeacher"));
const Breadcrumbss = lazy(() => import("../Teacherdashboard/ui/Breadcrumbs"));

/***** Pages ****/
const FullLayoutss = lazy(() => import("../Studentdashboard/layouts/FullLayoutss.js"));

const Start = lazy(() => import("../Studentdashboard/Start.js"));
const Aboutsss = lazy(() => import("../Studentdashboard/Aboutsss"));
const Alertsss = lazy(() => import("../Studentdashboard/ui/Alertss"));
const Badgesss = lazy(() => import("../Studentdashboard/ui/Badgess"));
// const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cardsss = lazy(() => import("../Studentdashboard/ui/Cardss"));
const Gridss = lazy(() => import("../Studentdashboard/ui/Grids"));
const Tablesss = lazy(() => import("../Studentdashboard/ui/Tabless"));
const Formsss = lazy(() => import("../Studentdashboard/ui/Formss"));
const Addnewstudent = lazy(() => import("../Studentdashboard/AddnewStudent"));
const Breadcrumbsss = lazy(() => import("../Studentdashboard/ui/Breadcrumbss"));
const Buttonss = lazy(() => import("../Studentdashboard/ui/Buttonss.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Subscribe = lazy(() => import("../views/ui/Subscrib"));
// const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Addnewteacher = lazy(() => import("../views/AddnewTeacher"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));
const Homepage = lazy(() => import( "../components/Homepage/Homepage"));
const AboutPage = lazy(() => import( "../components/AboutPage/AboutPage"));
const Programspage = lazy(() => import( "../components/Programs/Programs"));
const InTheNews =lazy(()=> import("../components/InTheNews/InTheNews"))
const Contactus =lazy(()=> import("../components/Contactus"))
const Account =lazy(()=> import("../components/Account"))
// const Signup =lazy(()=> import("../components/Signup"))
const Login =lazy(()=> import("../components/Login"))
const Singlestudent =lazy(()=> import("../components/Singlestudent"))
const Register =lazy(()=> import("../components/Register"))
const Staff =lazy(()=> import("../components/Staff/Staff"))
const TeacherPage =lazy(()=> import("../components/TeacherPage/TeacherPage"))
const Teacherslogin =lazy(()=> import("../components/Teacherslogin.js"))



/*****Routes******/

const ThemeRoutes = [
  {
path: "/",
element:<Homepage/>,
  },
  {
path: "/AboutPage",
element:<AboutPage/>,
  },
  {
path: "/Programspage",
element:<Programspage/>,
  },
  {
path: "/Newspage",
element:<InTheNews/>,
  },
  {
path: "/Contactpage",
element:<Contactus/>,
  },
  {
path: "/Accountpage",
element:<Account/>,
  },
//   {
// path: "/Signuppage",
// element:<Signup/>,
//   },
  {
path: "/Loginpage",
element:<Login/>,
  },
  {
path: "/Projectpage",
element:<Singlestudent/>,
  },
  
  {
path: "/Registerpage",
element:<Register/>,
  },
  {
path: "/Staffpage",
element: <Staff/>,
  },
  {
path: "/teacherPage",
element: <TeacherPage/>,
  },
  {
path: "/TeachersLoginpage",
element: <Teacherslogin/>,
  },
  {
    
    path: "/dashboard",
    element: <FullLayout />,
    children: [
      { path: "/dashboard", element: <Navigate to="/starter" /> },
      { path: "/dashboard/starter", exact: true, element: <Starter /> },
      { path: "/dashboard/about", exact: true, element: <About /> },
      { path: "/dashboard/alerts", exact: true, element: <Alerts /> },
      { path: "/dashboard/badges", exact: true, element: <Badges /> },
      { path: "/dashboard/Subscribe", exact: true, element: <Subscribe /> },
      // { path: "/dashboard/buttons", exact: true, element: <Buttons /> },
      { path: "/dashboard/cards", exact: true, element: <Cards /> },
      { path: "/dashboard/grid", exact: true, element: <Grid /> },
      { path: "/dashboard/table", exact: true, element: <Tables /> },
      { path: "/dashboard/forms", exact: true, element: <Forms /> },
      { path: "/dashboard/Addnewteacher", exact: true, element: <Addnewteacher /> },
      { path: "/dashboard/breadcrumbs", exact: true, element: <Breadcrumbs /> },
    ],
  },
  {
    
    path: "/Teacherdashboard",
    element: <FullLayouts />,
    children: [
      { path: "/Teacherdashboard", element: <Navigate to="/starter" /> },
      { path: "/Teacherdashboard/starters", exact: true, element: <Starters /> },
      { path: "/Teacherdashboard/abouts", exact: true, element: <Abouts /> },
      { path: "/Teacherdashboard/alertss", exact: true, element: <Alertss /> },
      { path: "/Teacherdashboard/badgess", exact: true, element: <Badgess /> },
      // { path: "/dashboard/buttons", exact: true, element: <Buttons /> },
      { path: "/Teacherdashboard/cardss", exact: true, element: <Cardss /> },
      { path: "/Teacherdashboard/grids", exact: true, element: <Grids /> },
      { path: "/Teacherdashboard/tables", exact: true, element: <Tabless /> },
      { path: "/Teacherdashboard/formss", exact: true, element: <Formss /> },
      { path: "/Teacherdashboard/Addnewteachers", exact: true, element: <Addnewteachers /> },
      { path: "/Teacherdashboard/breadcrumbss", exact: true, element: <Breadcrumbss /> },
    ],
  },
  {
    
    path: "/Studentdashboard",
    element: <FullLayoutss />,
    children: [
      { path: "/Studentdashboard", element: <Navigate to="/start" /> },
      { path: "/Studentdashboard/start", exact: true, element: <Start /> },
      { path: "/Studentdashboard/abouts", exact: true, element: <Aboutsss /> },
      { path: "/Studentdashboard/alertss", exact: true, element: <Alertsss /> },
      { path: "/Studentdashboard/badgess", exact: true, element: <Badgesss /> },
      // { path: "/dashboard/buttons", exact: true, element: <Buttons /> },
      { path: "/Studentdashboard/cardss", exact: true, element: <Cardsss /> },
      { path: "/Studentdashboard/grids", exact: true, element: <Gridss /> },
      { path: "/Studentdashboard/tables", exact: true, element: <Tablesss /> },
      { path: "/Studentdashboard/formss", exact: true, element: <Formsss /> },
      { path: "/Studentdashboard/Projectsform", exact: true, element: <Buttonss /> },
      { path: "/Studentdashboard/Addnewteachers", exact: true, element: <Addnewstudent /> },
      { path: "/Studentdashboard/breadcrumbss", exact: true, element: <Breadcrumbsss /> },
    ],
  },
];

export default ThemeRoutes;
