import React from "react";
import { useParams } from "react-router-dom";

const AboutDetail = () => {

  const param = useParams()

  return (
    <div className="py-30 text-3xl">
      About <span className="text-red-500 capitalize">{param.id}</span> in
      Detail
    </div>
  );
};

export default AboutDetail;
