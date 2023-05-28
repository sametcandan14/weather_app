import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import City from "./City";

function App() {
  const key = "84a91b51124f2bc14e2104a40efa11c9";
  const [search, setSearch] = useState();
  const [city, setCity] = useState();
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
        );
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getApi();
  }, [search]);
  return (
    <div className="App">
      <div className="mt-2">
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
          placeholder="Placeholder"
          className="px-2 py-1 w-[250px] placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
        />
        <City city={city} />
      </div>
    </div>
  );
}

export default App;
