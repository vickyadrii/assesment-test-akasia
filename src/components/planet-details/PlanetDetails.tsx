import { useParams } from "react-router-dom";
import { fetcher } from "../services/fetcher";
import { useCallback, useEffect, useState } from "react";
import { StyledPlanetDetails } from "./StyledPlanetDetails";
import { message } from "antd";
import Button from "../ui/button/Button";

interface DataPlanetDetail {
  name?: string;
  terrain?: string;
  population?: string;
}

const PlanetDetails = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<DataPlanetDetail>({});
  const [dataWishlist, setDataWishList] = useState<DataPlanetDetail[]>([]);

  const handleAddToWishlist = () => {
    setDataWishList((prevDataWishlist) => {
      const newDataWishlist = [...prevDataWishlist, data];
      localStorage.setItem("wishlist", JSON.stringify(newDataWishlist));
      return newDataWishlist;
    });
    message.success("Berhasil menambahkan ke wishlist!");
  };

  const handleGetPlanetDetail = useCallback(async () => {
    setIsLoading(true);

    await fetcher
      .get<DataPlanetDetail>(`/planets/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  useEffect(() => {
    handleGetPlanetDetail();
  }, [handleGetPlanetDetail]);

  useEffect(() => {
    const getDataWishlist = localStorage.getItem("wishlist");
    if (getDataWishlist) {
      setDataWishList(JSON.parse(getDataWishlist));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(dataWishlist));
  }, [dataWishlist]);

  return (
    <StyledPlanetDetails>
      <div className="detail">
        <h2>Nama Planet: {data.name}</h2>
        <h3>Area : {data.terrain}</h3>
        <h3>Total Population: {data.population}</h3>
      </div>
      <Button disabled={isLoading} onClick={handleAddToWishlist}>Tambahkan ke Wishlist</Button>
    </StyledPlanetDetails>
  );
};

export default PlanetDetails;
