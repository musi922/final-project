import { Button, Nav, NavItem } from "reactstrap";
import Logo from "./Logos";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  {
    title: "Dashboard",
    href: "/Studentdashboard/start",
    icon: "bi bi-speedometer2",
  },
   
  {
    title: "Students Projects",
    href: "/Studentdashboard/abouts",
    icon: "bi bi-card-text",
  },
  {
    title: "Projects form",
    href: "/Studentdashboard/Projectsform",
    icon: "bi bi-card-text",
  },
 
  {
    title: "Assignments",
    href: "/Studentdashboard/cardss",
    icon: "bi bi-layout-split",
  },
  {
    title: "Assignments form",
    href: "/Studentdashboard/formss",
    icon: "bi bi-textarea-resize",
  },
  {
    title: "Quick Links",
    href: "/Studentdashboard/breadcrumbss",
    icon: "bi bi-link",
  },
  {
    title: "Inbox",
    href: "/Studentdashboard/badgess",
    icon: "bi bi-patch-check",
  },
];

const Sidebarss = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <Logo />
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={() => showMobilemenu()}
        ></Button>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
          <Button
            color="danger"
            tag="a"
            className="mt-3"
            href="/"
          >
            Logout
          </Button>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebarss;
