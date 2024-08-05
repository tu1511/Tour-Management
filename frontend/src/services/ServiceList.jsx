import React from "react";
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";
import ServiceCard from "./ServiceCard";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Lorem ipsum dolor sit amet, cinnsectetur adipisicing elit.",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Lorem ipsum dolor sit amet, cinonsectetur adipisicing elit.",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Lorem ipsum dolor sit amet, cinonsectetur adipisicing elit.",
  },
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" key={index} md="6" sm="12" className="mb-4">
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
