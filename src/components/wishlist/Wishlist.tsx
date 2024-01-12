import { useEffect, useState } from "react";
import { StyledWishlist } from "./StyledWishlist";
import { DataPlanetDetail } from "../../types/planet";

const Wishlist = () => {
  const [data, setData] = useState<DataPlanetDetail[]>([]);

  useEffect(() => {
    const getDataWishlist = localStorage.getItem("wishlist");
    const parsedData = getDataWishlist ? JSON.parse(getDataWishlist) : [];
    setData(parsedData);
  }, []);

  return (
    <StyledWishlist>
      <h2>Wishlist</h2>

      <div className="wishlist">
        {data.map(({ name, population, terrain }, index) => (
          <div key={index} className="wishlist__list">
            <h3>Nama planet: {name}</h3>
            <p>Area: {terrain}</p>
            <p>Total Populasi: {population}</p>
          </div>
        ))}
      </div>
    </StyledWishlist>
  );
};

export default Wishlist;
