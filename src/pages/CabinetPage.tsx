import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import NewCarForm from "../components/NewCarForm";
import AllUserCarsPage from "./StorePage/AllUserCarsPage";

const CabinetPage = () => {
  return (
    <div className="cabinetPage">
      <Tabs
        defaultActiveKey="home"
        transition={false}
        id="noanim-tab-example"
        className="mb-2"
      >
        <Tab eventKey="home" title="Your cars">
          <AllUserCarsPage />
        </Tab>
        <Tab eventKey="profile" title="Add new">
          <NewCarForm />
        </Tab>
      </Tabs>
    </div>
  );
};

export default CabinetPage;
