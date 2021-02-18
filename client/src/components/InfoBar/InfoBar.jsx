import React from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CastConnectedIcon from '@material-ui/icons/CastConnected';
import useStyles from './styles';

const InfoBar = ({ room }) => {
  const classes = useStyles();
  return (
    <div className={classes.infoBar}>
      <div className={classes.leftInnerContainer}>
        <CastConnectedIcon fontSize="large" className={classes.onlineIcon} />

        <h3>{room}</h3>
      </div>
      <div className={classes.rightInnerContainer}>
        <a href="/">
          <HighlightOffIcon fontSize="large" color="secondary" />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
