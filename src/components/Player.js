import React from "react";
import "./Player.css";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";
function Player() {
  return (
    <div className="player">
      <div className="player__left">
        <img
          className="player__album"
          src="https://upload.wikimedia.org/wikipedia/en/5/5f/Whatever_People_Say_I_Am%2C_That%27s_What_I%27m_Not.jpg"
          alt="cover"
        />
        <div className="player__songInfo">
          <h4> Mardy Bum</h4>
          <p> Arctic Monkeys</p>
        </div>
      </div>
      <div className="player__center">
        <ShuffleIcon className="player__color" />
        <SkipPreviousIcon className="player__icon" />
        <PlayCircleOutlineIcon fontSize="large" className="player__icon" />
        <SkipNextIcon className="player__icon" />
        <RepeatIcon className="player__color" />
      </div>
      <div className="player__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Player;
