import React from "react";
import { useParams } from "react-router-dom";

const AnyCourse = () => {
  const params = useParams();

  return (
    <div>
      <h1 className="fixed whitespace-nowrap left-1/2 -translate-x-1/2 text-3xl capitalize underline">
        {params.id} Course Page...
      </h1>
    </div>
  );
};

export default AnyCourse;
