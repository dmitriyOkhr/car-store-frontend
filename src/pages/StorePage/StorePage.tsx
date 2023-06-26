import { useParams } from "react-router-dom";
import { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

const StorePage = () => {
  const [data, setData] = useState([
    {
      model: "Toyota Supra",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      model: "Toyota Supra",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      model: "Toyota Supra",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      model: "Toyota Supra",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ]);
  const { model } = useParams();
  return (
    <>
      <div className="store_container">
        {data.map((obj, indx) => (
          <div key={indx} className="card_container">
            <div className="card_wrapper">
              <div className="card_banner-image"> </div>
              <h1 className="model_name"> {obj.model}</h1>
              <p>{obj.title}</p>
              <div className="card_button-wrapper">
                <Link className="card_btn" to={`/store/${model}/${indx}`}>
                  <button className="card_btn outline">DETAILS</button>
                </Link>
                <button className="card_btn fill">BUY NOW</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default StorePage;
