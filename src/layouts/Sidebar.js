import { Button, Nav, NavItem } from "reactstrap";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  {
    title: "Dashboard",
    href: "/dashboard/starter",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Messages",
    href: "/dashboard/badges",
    icon: "bi bi-patch-check",
  },
  
  {
    title: "Teachers list",
    href: "/dashboard/about",
    icon: "bi bi-people",
  },
  
  {
    title: "Projects",
    href: "/dashboard/cards",
    icon: "bi bi-card-text",
  },
  
  
  {
    title: "Add new student",
    href: "/dashboard/table",
    icon: "bi bi-layout-split",
  },
  
 
 
  {
    title: "Subscribes",
    href: "/dashboard/Subscribe",
    icon: "bi bi-patch-check",
  },
  {
    title: "Notifications and Alert",
    href: "/dashboard/alerts",
    icon: "bi bi-bell",
  },
];

const Sidebar = () => {
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

export default Sidebar;
