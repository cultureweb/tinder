import React from "react";
import "./SwipeButtons.css";
import IconButton from "@material-ui/core/IconButton";
import {
  Replay as ReplayIcon,
  Close as CloseIcon,
  StarRate as StarRateIcon,
  Favorite as FavoriteIcon,
  FlashOn as FlashIcon,
} from "@material-ui/icons";

export default function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__left">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__star">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__right">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__lightning">
        <FlashIcon fontSize="large" />
      </IconButton>
    </div>
  );
}
