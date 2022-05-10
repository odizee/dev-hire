import "./styles/cardStyles.scss";
import clickfavnot from "./../assets/clickfavnot.png";
import clickfavfilled from "./../assets/clickfavfilled.png";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../states/favouriteSlice";
import { useEffect, useState } from "react";

const Card = ({
  name,
  id,
  avatar,
  service_photo,
  starting_from,
  liked,
  setLiked,
}) => {
  //STATES
  // const [liked, setLiked] = useState(false);

  //REDUX
  const dispatch = useDispatch();
  const { selectedCurrency } = useSelector((state) => state.selectedCurrency);
  const { currencies } = useSelector((state) => state.currencies);
  const currencyData = currencies?.data?.currencies;
  // console.log(currencyData[0].symbol);
  //INLINE STYLES
  const miscStyle = {
    backgroundImage: `url(${service_photo})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  //COMPONENT PROPERTIES
  const props = {
    name,
    id,
    avatar,
    service_photo,
    starting_from,
  };

  //ONCLICK HANDLER
  const favHandler = (val) => {
    const data = val.target.dataset.fav;
    setLiked(!val.liked);

    const objData = JSON.parse(data);

    //CONDITION FOR SETTING FAVOURITES
    if (liked === true) {
      dispatch(removeFav(JSON.stringify(objData)));
    } else {
      dispatch(addFav(JSON.stringify(objData)));
    }
  };

  return (
    <div className="card">
      <div className="image_top" style={miscStyle}>
        <img
          className="fav"
          data-fav={JSON.stringify(props)}
          onClick={favHandler}
          src={liked ? clickfavfilled : clickfavnot}
          alt={name}
        />
      </div>
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>
      <div className="details">
        <div className="text">
          <h3>{name}</h3>
          <p>
            {selectedCurrency?.symbol || <span>&#8358;</span>}
            <span>
              {(starting_from / (selectedCurrency?.divider || 1)).toFixed(2)}
            </span>
          </p>
        </div>
        <h3 className="hire">Hire</h3>
      </div>
    </div>
  );
};

export default Card;
