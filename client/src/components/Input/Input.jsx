import React from 'react';
import useStyles from './styles';

const Input = ({ setMessage, sendMessage, message }) => {
  const classes = useStyles();
  return (
    <form className={classes.form}>
      <input
        type="text"
        className={classes.input}
        placeholder="Type a message..."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e) : null)}
      />
      <button className={classes.sendButton} onClick={(e) => sendMessage(e)}>
        Send
      </button>
    </form>
  );
};

export default Input;
