import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrencies } from "../states/currencySlice";
import { selectCurrency } from "../states/selectedCurrencySlice";
import "./styles/currencyStyles.scss";
import drop from "./../assets/drop.png";

const Currency = ({ selected, setSelected }) => {
  const { currencies } = useSelector((state) => state.currencies);
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrencies());
    // console.log(currencies.data.currencies)
  }, [getCurrencies]);

  // useEffect(() => {
  //   // console.log(currencies.data.currencies)
  // }, [selected]);

  const currencyData = currencies?.data?.currencies;

  console.log(selected);

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        <div className="dropdown-btn-name">
          <img src={selected.flag_url} alt="" />
          {selected.name}
        </div>
        <span>
          <img src={drop} alt="" />
        </span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {currencyData.map((currency) => (
            <div
              onClick={(e) => {
                dispatch(selectCurrency(selected));
                setSelected(currency);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              <img src={currency.flag_url} alt="" />
              {currency.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Currency;
