import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavs } from "../states/favouriteSlice";
import Card from "./Card";
import Currency from "./Currency";
import "./styles/freelancersStyles.scss";

const Favourites = () => {
  //REDUX
  const { favourites } = useSelector((state) => state.favourite);

  //STATE
  const [selected, setSelected] = useState("");
  const [liked, setLiked] = useState(true);

  return (
    <div>
      <div className="freelancers">
        <h1>Favourites</h1>
        {favourites.length === 0 ? (
          <h2>No Favourites</h2>
        ) : (
          <div className="freelancers_list">
            {/* MAP OVER FAVS */}
            {(favourites || []).map((fav) => (
              <div className="cards">
                <Card
                  id={JSON.parse(fav).id}
                  name={JSON.parse(fav).name}
                  avatar={JSON.parse(fav).avatar}
                  service_photo={JSON.parse(fav).service_photo}
                  starting_from={JSON.parse(fav).starting_from}
                  like={true}
                  liked={liked}
                  setLiked={setLiked}
                />
              </div>
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
