import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrencies } from "../states/currencySlice";
import { getFreelancers } from "../states/freelancersSlice";
import "./styles/freelancersStyles.scss";

import Card from "./Card";
import Currency from "./Currency";

const Freelancers = () => {
  //REDUX
  const { freelancers, isLoading } = useSelector((state) => state.freelancers);

  const { currencies } = useSelector((state) => state.currencies);

  const { selectedCurrency } = useSelector((state) => state.selectedCurrency);

  const developers = freelancers?.data?.service_search_results.hits;
  const currencyData = currencies?.data?.currencies;
  // console.log(currencyData[0].name);
  const dispatch = useDispatch();

  //STATES
  const [selected, setSelected] = useState("");
  const [liked, setLiked] = useState(false);

  //USEEFFECTS
  useEffect(() => {
    dispatch(getFreelancers());
  }, [getFreelancers]);

  // const curr = selectedCurrency;

  return (
    <div className="freelancers">
      <h1>Hire Top Developers</h1>
      <div className="freelancers_list">
        {/* MAP OVER DEVS */}
        {(developers || []).map((developer) => (
          <div className="cards" key={developer._id}>
            <Card
              id={developer._id}
              name={developer._source?.url_name}
              avatar={developer._source?.avatar}
              service_photo={developer._source?.service_photo}
              starting_from={developer._source?.starting_from}
              liked={liked}
              setLiked={setLiked}
            />
          </div>
          // <h1>{developer._source.url_name}</h1>
        ))}
      </div>
      <div className="footer">
        <p>© 2022 DevHire</p>
        <Currency selected={selected} setSelected={setSelected} />
      </div>
    </div>
  );
};

export default Freelancers;
