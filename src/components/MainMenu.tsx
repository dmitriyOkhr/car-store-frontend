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
          <div className="ag-courses_item" onClick={() => onClick("cars")}>
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">Cars</div>
            </div>
          </div>

          <div
            className="ag-courses_item"
            onClick={() => onClick("motorcycles")}
          >
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">Motorcycles</div>
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

          <div className="ag-courses_item" onClick={() => onClick("volvo")}>
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">VOLVO</div>
            </div>
          </div>

          <div className="ag-courses_item" onClick={() => onClick("man")}>
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">MAN</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainMenu;

//https://www.startrescue.co.uk/media/c8878855-4f7e-4f52-96a7-9a748e610356.jpg
