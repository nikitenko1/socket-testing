import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const Join = () => {
  const classes = useStyles();

  const [form, setForm] = useState({ name: '', room: '' });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className={classes.joinOuterContainer}>
      <div className={classes.joinInnerContainer}>
        <h1 className={classes.heading}>Join</h1>
        <div>
          <input
            name="name"
            placeholder="Name"
            className={classes.joinInput}
            type="text"
            onChange={handleChange}
            autoFocus
          />
        </div>
        <div>
          <input
            name="room"
            placeholder="Room"
            className={`${classes.joinInput} ${classes.mt20}`}
            type="text"
            onChange={handleChange}
          />
        </div>
        <Link
          onClick={(e) =>
            !form.name || !form.room ? e.preventDefault() : null
          }
          to={`/chat?name=${form.name}&room=${form.room}`}
        >
          <button className={`${classes.button} ${classes.mt20}`} type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
