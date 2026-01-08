import React, { useContext } from "react";
import { StudentsDataContext } from "../context/StudentsContext";

const Card = () => {
  const data = useContext(StudentsDataContext);

  return (
    <div className="grid grid-cols-1 my-2 gap-4 md:grid-cols-3 lg:grid-cols-4 w-screen justify-items-center">
      {data.map((elem) => {
        return (
          <div key={elem.id} className="px-4 py-2 bg-blue-400 w-fit rounded-xl">
            <h1 className="text-center font-mono underline text-3xl pb-2">
              {elem.name}
            </h1>
            <h3 className="font-serif">
              Age:- <span className="font-sans text-sm">{elem.age}</span>
            </h3>
            <h3 className="font-serif">
              Gender:- <span className="font-sans text-sm">{elem.gender}</span>
            </h3>
            <h3 className="font-serif">
              Course:- <span className="font-sans text-sm">{elem.course}</span>
            </h3>
            <h3 className="font-serif">
              Year:- <span className="font-sans text-sm">{elem.year}</span>
            </h3>
            <h3 className="font-serif">
              Email:- <span className="font-sans text-sm">{elem.email}</span>
            </h3>
            <h3 className="font-serif">
              Marks:-<span className="font-sans text-sm">{elem.marks}</span>
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
