import { useEffect } from "react";
import { fetcher } from "../services/fetcher";
import { StyledHome } from "./StyledHome";

const Home = () => {
  const handleGetData = () => {
    fetcher
      .get("/planets")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleGetData()
  }, [])
  return (
    <div>
      <StyledHome>gsdgfds</StyledHome>
    </div>
  );
};

export default Home;
