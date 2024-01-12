import { useCallback, useEffect, useState } from "react";
import { fetcher } from "../services/fetcher";
import { StyledHome } from "./StyledHome";
import Planets from "./planets/Planets";
import Button from "../ui/button/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleGetData = useCallback(async () => {
    try {
      const res = await fetcher.get("/planets");
      setData((prevData) => ({
        ...prevData,
        results: [...(prevData.results || []), ...res.data.results],
      }));
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    handleGetData();
  }, [handleGetData]);
  return (
    <StyledHome>
      <div className="home">
        <div className="home__header">
          <div>
            <h2>Assesment Test | Akasia</h2>
            <p>Vicky Herdiansyah Adri</p>
          </div>
          <Button onClick={() => navigate('/wishlist')}>Lihat Wishlist</Button>
        </div>

        <Planets data={data} handleGetData={handleGetData} />
      </div>
    </StyledHome>
  );
};

export default Home;
