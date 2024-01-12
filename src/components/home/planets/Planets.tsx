import { useMemo } from "react";
import { StyledPlanets } from "./StyledPlanets";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import { Spin } from "antd";

interface Results {
  name: string;
  population: string;
  url: string;
}

interface PropsPlanets {
  data: {
    results?: Results[];
  };
  handleGetData(): void;
}

const Planets = ({ data, handleGetData }: PropsPlanets) => {
  const dataPlanet = useMemo(() => {
    return data.results || [];
  }, [data.results]);

  return (
    <StyledPlanets>
      <div>
        <h1>List Planets:</h1>
      </div>
      <div className="planets">
        <InfiniteScroll dataLength={dataPlanet.length} next={handleGetData} hasMore={true} loader={<Spin />}>
          {dataPlanet.map(({ name, population }, index) => (
            <Link to={`${index + 1}`} key={index}>
              <div className="planets__list">
                <h3>Nama planet: {name}</h3>
                <p>Total Populasi: {population}</p>
              </div>
            </Link>
          ))}
        </InfiniteScroll>
      </div>
    </StyledPlanets>
  );
};

export default Planets;
