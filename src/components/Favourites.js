import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavs } from "../states/favouriteSlice";
import Card from "./Card";
import Currency from "./Currency";
import "./styles/freelancersStyles.scss";

const Favourites = () => {
  const { favourites } = useSelector((state) => state.favourite);
  // const [liked, setLike] = useState(true);
  const [selected, setSelected] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {}, [getFavs]);

  // const favs = JSON.stringify(favourites);
  console.log(favourites);

  return (
    <div>
      <div className="freelancers">
        <h1>Favourites</h1>
        {favourites.length === 0 ? (
          <h2>No Favourites</h2>
        ) : (
          <div className="freelancers_list">
            {(favourites || []).map((fav) => (
              <div className="cards">
                <Card
                  id={JSON.parse(fav).id}
                  name={JSON.parse(fav).name}
                  avatar={JSON.parse(fav).avatar}
                  service_photo={JSON.parse(fav).service_photo}
                  starting_from={JSON.parse(fav).starting_from}
                  like={true}
                />
              </div>
              // <h1>{developer._source.url_name}</h1>
            ))}
          </div>
        )}
        <div className="footer">
          <p>© 2022 DevHire</p>
          <Currency selected={selected} setSelected={setSelected} />
        </div>
      </div>
    </div>
  );
};

export default Favourites;
