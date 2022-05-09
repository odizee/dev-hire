import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrencies } from "../states/currencySlice";
import { selectCurrency } from "../states/selectedCurrencySlice";
import "./styles/currencyStyles.scss";
import drop from "./../assets/drop.png";

const Currency = ({ selected, setSelected }) => {
  //STATES
  const { currencies } = useSelector((state) => state.currencies);
  const { selectedCurrency } = useSelector((state) => state.selectedCurrency);
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();

  //USEEFFECTS
  useEffect(() => {
    dispatch(getCurrencies());
  }, [getCurrencies]);

  //DECLARE CURRENCY DATA
  const currencyData = currencies?.data?.currencies;

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        <div className="dropdown-btn-name">
          <img src={selectedCurrency.flag_url} alt="" />
          {selectedCurrency.name}
        </div>
        <span>
          <img src={drop} alt="" />
        </span>
      </div>
      {/* MAP CURRENCY DATA */}
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
              key={currency.id}
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
