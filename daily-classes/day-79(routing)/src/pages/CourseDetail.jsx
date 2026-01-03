import React from "react";
import { useParams } from "react-router-dom";

const CourseDetail = () => {
  const param = useParams();
  console.log(param);

  return (
    <div>
      <h1 className="fixed left-1/2 -translate-x-1/2 text-3xl capitalize underline whitespace-nowrap">
        {param.id} Detail Page
      </h1>
    </div>
  );
};

export default CourseDetail;
