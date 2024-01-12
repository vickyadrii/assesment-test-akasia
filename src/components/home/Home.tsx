import { useCallback, useEffect, useState } from "react";
import { fetcher } from "../services/fetcher";
import { StyledHome } from "./StyledHome";
import Planets from "./planets/Planets";

const Home = () => {
  const [data, setData] = useState({});

  const handleGetData = useCallback(async () => {
    try {
      const res = await fetcher.get("/planets");
      setData((prevData) => ({
        ...prevData,
        results: [...(prevData.results || []), ...res.results],
      }));
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    handleGetData();
  }, [handleGetData]);
  return (
    <div>
      <StyledHome>
        <h2>Assesment Test | Akasia</h2>
        <p>Vicky Herdiansyah Adri</p>

        <Planets data={data} handleGetData={handleGetData} />
      </StyledHome>
    </div>
  );
};

export default Home;
