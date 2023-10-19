import { useNavigate } from "react-router-dom";

const MainMenu = () => {
  const navigate = useNavigate();

  const onClick = (arg: string) => {
    navigate(`/store/${arg}`);
  };
  return (
    <>
      <div className="ag-format-container">
        <div className="ag-courses_box">
          <div className="ag-courses_item" onClick={() => onClick("ford")}>
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">FORD</div>
            </div>
          </div>

          <div
            className="ag-courses_item"
            onClick={() => onClick("mercedes-benz")}
          >
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">MERCEDES-BENZ </div>
            </div>
          </div>

          <div className="ag-courses_item" onClick={() => onClick("bmw")}>
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">BMW</div>
            </div>
          </div>

          <div className="ag-courses_item" onClick={() => onClick("audi")}>
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">AUDI</div>
            </div>
          </div>

          <div className="ag-courses_item" onClick={() => onClick("honda")}>
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">HONDA</div>
            </div>
          </div>

          <div className="ag-courses_item" onClick={() => onClick("toyota")}>
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">TOYOTA</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainMenu;

//https://www.startrescue.co.uk/media/c8878855-4f7e-4f52-96a7-9a748e610356.jpg
