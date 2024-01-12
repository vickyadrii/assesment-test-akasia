import { useEffect, useState } from "react";
import { fetcher } from "../services/fetcher";
import { StyledHome } from "./StyledHome";
import Planets from "./planets/Planets";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

  const handleGetData = () => {
    setIsLoading(true);

    fetcher
      .get("/planets")
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };

  console.log(data);

  useEffect(() => {
    handleGetData();
  }, []);
  return (
    <div>
      <StyledHome>
        <h2>Assesment Test | Akasia</h2>
        <p>Vicky Herdiansyah Adri</p>

        <Planets data={data} isLoading={isLoading} />
      </StyledHome>
    </div>
  );
};

export default Home;
