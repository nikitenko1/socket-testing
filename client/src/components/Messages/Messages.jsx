import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message/Message';
import useStyles from './styles';

const Messages = ({ messages, name }) => {
  const classes = useStyles();
  return (
    <ScrollToBottom className={classes.messages}>
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
};

export default Messages;
