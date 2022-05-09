import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrencies } from "../states/currencySlice";
import { getFreelancers } from "../states/freelancersSlice";
import "./styles/freelancersStyles.scss";

import Card from "./Card";
import Currency from "./Currency";

const Freelancers = () => {
  const [selected, setSelected] = useState("");
  const { freelancers, isLoading } = useSelector((state) => state.freelancers);

  const { selectedCurrency } = useSelector((state) => state.selectedCurrency);

  const developers = freelancers?.data?.service_search_results.hits;

  console.log("free", selected);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFreelancers());
    // dispatch(getCurrencies());
  }, [getFreelancers]);

  const curr = selectedCurrency;

  return (
    <div className="freelancers">
      <h1>Hire Top Developers</h1>
      <div className="freelancers_list">
        {(developers || []).map((developer) => (
          <div className="cards">
            <Card
              id={developer._id}
              name={developer._source?.url_name}
              avatar={developer._source?.avatar}
              service_photo={developer._source?.service_photo}
              starting_from={developer._source?.starting_from}
            />
          </div>
          // <h1>{developer._source.url_name}</h1>
        ))}
      </div>
      {/* <h1>{developers[0]._source.url_name}</h1>;<h1>Card</h1>; */}
      <div className="footer">
        <p>© 2022 DevHire</p>
        <Currency selected={selected} setSelected={setSelected} />
      </div>
    </div>
  );
};

export default Freelancers;
