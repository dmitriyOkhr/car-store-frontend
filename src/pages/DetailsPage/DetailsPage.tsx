import "./index.css";
import SimpleImageSlider from "react-simple-image-slider";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const DetailsPage = () => {
  const images = [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
    },
    {
      url: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
    },
    {
      url: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
    },
    {
      url: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
    },
    {
      url: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
    },
    {
      url: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
    },
    {
      url: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
    },
  ];

  return (
    <>
      <div className="details_container">
        <div className="slider">
          <SimpleImageSlider
            width={650}
            height={400}
            images={images}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
          />
        </div>
        <div className="main_info_card">
          <h1>2023 F-150 LIGHTNING</h1>
          <h2>$88,869</h2>
          <div className="info_container">
            <h3>Engine:</h3>
            <h4>Dual eMotor </h4>
          </div>
          <div className="info_container">
            <h3>Drivetrain:</h3>
            <h4>4x4</h4>
          </div>
          <div className="info_container">
            <h3>Transmission:</h3>
            <h4>Single-Speed Transmission</h4>
          </div>
          <div className="info_container">
            <h3>Exterior:</h3>
            <h4>Azure Gray Metallic Tri-Coat</h4>
          </div>
          <div className="info_container">
            <h3>Interior:</h3>
            <h4>Black</h4>
          </div>
          <div className="info_container">
            <h3>Package:</h3>
            <h4>LARIAT 511A</h4>
          </div>
        </div>
        <div className="description_info_card">
          <div className="description_container">
            <div className="info_left">
              <h3>Package:</h3>
              <h4>LARIAT 511A</h4>
            </div>
            <div className="info_left">
              <h3>Package:</h3>
              <h4>LARIAT 511A</h4>
            </div>
            <div className="info_left">
              <h3>Package:</h3>
              <h4>LARIAT 511A</h4>
            </div>
            <div className="info_left">
              <h3>Package:</h3>
              <h4>LARIAT 511A</h4>
            </div>
            <div className="info_left">
              <h3>Package:</h3>
              <h4>LARIAT 511A</h4>
            </div>
            <div className="info_left">
              <h3>Package:</h3>
              <h4>LARIAT 511A</h4>
            </div>
          </div>

          <div className="description_container">
            <div className="info_left">
              <h3>Package:</h3>
              <h4>LARIAT 511A</h4>
            </div>
            <div className="info_left">
              <h3>Package:</h3>
              <h4>LARIAT 511A</h4>
            </div>
            <div className="info_left">
              <h3>Package:</h3>
              <h4>LARIAT 511A</h4>
            </div>
            <div className="info_left">
              <h3>Package:</h3>
              <h4>LARIAT 511A</h4>
            </div>
            <div className="info_left">
              <h3>Package:</h3>
              <h4>LARIAT 511A</h4>
            </div>
            <h2>$88,869</h2>
            <button className="card_btn fill">BUY NOW</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
