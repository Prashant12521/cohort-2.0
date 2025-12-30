import React from "react";
import Card from "./components/Card";

const App = () => {
  const allUserData = [
    {
      profile:
        "https://images.unsplash.com/photo-1508341591423-4347099e1f19?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Nick",
      role: "Developer",
    },
    {
      profile:
        "https://images.unsplash.com/photo-1560087637-bf797bc7796a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Dove",
      role: "UI/UX Designer",
    },
    {
      profile:
        "https://images.unsplash.com/photo-1690444963408-9573a17a8058?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Zoya",
      role: "Marketer",
    },
  ];

  return (
    <>
      <Card userData={allUserData[0]} />
      <Card userData={allUserData[1]} />
      <Card userData={allUserData[2]} />
    </>
  );
};

export default App;
