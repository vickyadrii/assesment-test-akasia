import { useMemo } from "react";
import { StyledPlanets } from "./StyledPlanets";
import InfiniteScroll from "react-infinite-scroll-component";

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
  console.log(data);
  const dataPlanet = useMemo(() => {
    return data.results || [];
  }, [data.results]);

  return (
    <StyledPlanets>
      <div>
        <h1>List Planets:</h1>
      </div>
      <div className="planets">
        <InfiniteScroll
          dataLength={dataPlanet.length}
          next={handleGetData}
          hasMore={true} // Adjust based on your total data count
          loader={<p>Loading...</p>}
        >
          {dataPlanet.map((data, index) => (
            <div key={index} className="planets__list">
              <h3>{data.name}</h3>
              <p>{data.population}</p>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </StyledPlanets>
  );
};

export default Planets;
