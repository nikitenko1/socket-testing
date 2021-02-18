import React from 'react';
import ReactEmoji from 'react-emoji';
import useStyles from './styles';

const Message = ({ message: { user, text }, name }) => {
  const classes = useStyles();

  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className={`${classes.messageContainer} ${classes.justifyEnd}`}>
      <p className={`${classes.sentText} ${classes.pr10}`}>{trimmedName}</p>
      <div className={`${classes.messageBox} ${classes.backgroundBlue}`}>
        <p className={`${classes.messageText} ${classes.colorWhite}`}>
          {ReactEmoji.emojify(text)}
        </p>
      </div>
    </div>
  ) : (
    <div className={`${classes.messageContainer} ${classes.justifyStart}`}>
      <div className={`${classes.messageBox} ${classes.backgroundLight}`}>
        <p className={`${classes.messageText} ${classes.colorDark}`}>
          {ReactEmoji.emojify(text)}
        </p>
      </div>
      <p className={`${classes.sentText} ${classes.pl10}`}>{user}</p>
    </div>
  );
};

export default Message;
