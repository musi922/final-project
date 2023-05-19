import { Outlet } from "react-router-dom";
import Sidebarss from "./Sidebarss";
import Headerss from "./Headerss";
import { Container } from "reactstrap";

const FullLayoutss = () => {
  return (
    <main>
      <div className="pageWrapper d-lg-flex">
        {/********Sidebar**********/}
        <aside className="sidebarArea shadow" id="sidebarArea">
          <Sidebarss />
        </aside>
        {/********Content Area**********/}

        <div className="contentArea">
          {/********header**********/}
          <Headerss />
          {/********Middle Content**********/}
          <Container className="p-4 wrapper" fluid>
            <Outlet />
          </Container>
        </div>
      </div>
    </main>
  );
};

export default FullLayoutss;
