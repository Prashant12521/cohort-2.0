import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [allData, setAllData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    setAllData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <button
        onClick={getData}
        className="px-4 py-2 border m-4 rounded-2xl cursor-pointer"
      >
        Get API
      </button>

      <div className="flex flex-wrap">
        {allData.map((elem, idx) => {
          return (
            <div key={idx}>
              <Card elem={elem} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
