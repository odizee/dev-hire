import "./styles/cardStyles.scss";
import clickfavnot from "./../assets/clickfavnot.png";
import clickfavfilled from "./../assets/clickfavfilled.png";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../states/favouriteSlice";
import { useEffect, useState } from "react";

const Card = ({ name, id, avatar, service_photo, starting_from, currName }) => {
  const [liked, setLiked] = useState(false);
  const { selectedCurrency } = useSelector((state) => state.selectedCurrency);

  const miscStyle = {
    backgroundImage: `url(${service_photo})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const dispatch = useDispatch();
  // console.log(name)

  const props = {
    name,
    id,
    avatar,
    service_photo,
    starting_from,
  };

  console.log("fresh", selectedCurrency);

  // const toggleLike = () => {
  //   setLike(!liked)
  // }

  const favHandler = (val) => {
    const data = val.target.dataset.fav;
    setLiked(!liked);
    // const likes = JSON.parse(data)
    // console.log("console", likes.like)
    const objData = JSON.parse(data);

    // objData['like'] = !liked

    console.log(JSON.stringify(objData.like));
    console.log(objData);

    // liked === true ? dispatch(removeFav(JSON.stringify(objData))) : dispatch(addFav(JSON.stringify(objData)));

    if (liked === true) {
      dispatch(removeFav(JSON.stringify(objData)));
    } else {
      dispatch(addFav(JSON.stringify(objData)));
    }
    // liked === true ? dispatch(removeFav(objData)) : dispatch(addFav(objData));
    // localStorage.setItem('fav', data)
  };

  console.log(liked);

  return (
    <div className="card">
      <div className="image_top" style={miscStyle}>
        {/* <img src={service_photo} alt="" /> */}
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
            {selectedCurrency.symbol}
            <span>{(starting_from / selectedCurrency.divider).toFixed(2)}</span>
          </p>
        </div>
        <h3 className="hire">Hire</h3>
      </div>
    </div>
  );
};

export default Card;
