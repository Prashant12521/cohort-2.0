import React, { createContext } from "react";
import App from "../App";

export const StudentsDataContext = createContext();

const StudentsContext = ({children}) => {
  const students = [
    {
      id: 1,
      name: "Aarav Sharma",
      age: 20,
      gender: "Male",
      course: "Computer Science",
      year: 2,
      email: "aarav.sharma@mail.com",
      marks: 88,
    },
    {
      id: 2,
      name: "Ananya Verma",
      age: 19,
      gender: "Female",
      course: "Information Technology",
      year: 1,
      email: "ananya.verma@mail.com",
      marks: 91,
    },
    {
      id: 3,
      name: "Rohit Singh",
      age: 21,
      gender: "Male",
      course: "Mechanical Engineering",
      year: 3,
      email: "rohit.singh@mail.com",
      marks: 76,
    },
    {
      id: 4,
      name: "Priya Patel",
      age: 20,
      gender: "Female",
      course: "Computer Science",
      year: 2,
      email: "priya.patel@mail.com",
      marks: 84,
    },
    {
      id: 5,
      name: "Kunal Mehta",
      age: 22,
      gender: "Male",
      course: "Electrical Engineering",
      year: 4,
      email: "kunal.mehta@mail.com",
      marks: 79,
    },
    {
      id: 6,
      name: "Sneha Iyer",
      age: 19,
      gender: "Female",
      course: "Data Science",
      year: 1,
      email: "sneha.iyer@mail.com",
      marks: 93,
    },
    {
      id: 7,
      name: "Aman Gupta",
      age: 21,
      gender: "Male",
      course: "Civil Engineering",
      year: 3,
      email: "aman.gupta@mail.com",
      marks: 72,
    },
    {
      id: 8,
      name: "Neha Kapoor",
      age: 20,
      gender: "Female",
      course: "AI & ML",
      year: 2,
      email: "neha.kapoor@mail.com",
      marks: 89,
    },
    {
      id: 9,
      name: "Rahul Nair",
      age: 22,
      gender: "Male",
      course: "Electronics",
      year: 4,
      email: "rahul.nair@mail.com",
      marks: 81,
    },
    {
      id: 10,
      name: "Pooja Choudhary",
      age: 19,
      gender: "Female",
      course: "Information Technology",
      year: 1,
      email: "pooja.choudhary@mail.com",
      marks: 90,
    },
  ];

  return <StudentsDataContext.Provider value={students}>
    {children}
  </StudentsDataContext.Provider>

}
export default StudentsContext
