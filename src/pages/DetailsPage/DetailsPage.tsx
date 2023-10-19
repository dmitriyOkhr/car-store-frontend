import "./index.css";
import { useState, useEffect } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import Accordion from "../../components/Accordion";
import Spiner from "../../components/Spiner";
import { useParams } from "react-router-dom";
import axios from "../../axios";
import { Post } from "../../types";

const DetailsPage = () => {
  const { id } = useParams();
  const [data, setData] = useState<Post>();
  const defaultValue = {
    user: "",
    brand: "",
    model: "",
    price: "",
    engine: "",
    drivetrain: "",
    transmission: "",
    exterior: "",
    interior: "",
    year: "",
    imageUrls: [],
    interiorFeatures: "",
    exteriorFeatures: "",
    functional: "",
    safetyConvenience: "",
  };
  const myData = data ? data : defaultValue;
  const [isLoading, setIsLoading] = useState(true);
  const images: Object[] | undefined = data?.imageUrls?.map((url: string) => {
    return { url: `http://localhost:5555/${url}` };
  });
  console.log(images);

  useEffect(() => {
    axios
      .get(`/posts/${id}`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        alert("Проблема при загрузці");
      });
  }, []);
  console.log(data);

  if (isLoading) {
    return (
      <div className="container_spiner">
        <Spiner />
      </div>
    );
  }

  return (
    <>
      <div className="details_container">
        <div className="slider">
          <SimpleImageSlider
            width={690}
            height={400}
            images={images}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
          />
        </div>
        <div className="main_info_card">
          <h1>
            {data?.brand.toUpperCase()} {data?.model.toUpperCase()}
          </h1>
          <h2 className="price">{data?.price}</h2>
          <div className="info_container">
            <h3>Year:</h3>
            <h4>{data?.year}</h4>
          </div>
          <div className="info_container">
            <h3>Engine:</h3>
            <h4>{data?.engine}</h4>
          </div>
          <div className="info_container">
            <h3>Drivetrain:</h3>
            <h4>{data?.drivetrain}</h4>
          </div>
          <div className="info_container">
            <h3>Transmission:</h3>
            <h4>{data?.transmission}</h4>
          </div>
          <div className="info_container">
            <h3>Exterior:</h3>
            <h4>{data?.exterior}</h4>
          </div>
          <div className="info_container">
            <h3>Interior:</h3>
            <h4>{data?.interior}</h4>
          </div>
        </div>
        <div className="accardion_container">
          <Accordion
            interiorFeatures={myData.interiorFeatures}
            exteriorFeatures={myData.exteriorFeatures}
            functional={myData.functional}
            safetyConvenience={myData.safetyConvenience}
          ></Accordion>
        </div>
        <div className="buy_container">
          <h2>{data?.price}</h2>
          <button className="card_btn fill">BUY NOW</button>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
