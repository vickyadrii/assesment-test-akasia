import { useMemo } from "react";
import { StyledPlanets } from "./StyledPlanets";

interface Results {
  name: string;
  climate: string;
}

interface PropsPlanets {
  data: {
    results?: Results[];
  };
  isLoading: boolean;
}

const Planets = ({ data, isLoading }: PropsPlanets) => {
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
        {isLoading ? (
          <>loading...</>
        ) : (
          dataPlanet.map((data) => (
            <div>
              <p>{data.name}</p>
            </div>
          ))
        )}
      </div>
    </StyledPlanets>
  );
};

export default Planets;
