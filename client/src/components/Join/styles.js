import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  joinOuterContainer: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    height: '100vh',
    alignItems: 'center',
    backgroundColor: '#1a1a1d',
  },

  joinInnerContainer: {
    width: '20%',
  },

  joinInput: {
    borderRadius: 0,
    padding: '15px 20px',
    width: '100%',
  },

  heading: {
    color: 'white',
    fontSize: '2.5em',
    paddingBottom: '10px',
    borderBottom: '2px solid white',
  },

  button: {
    color: '#fff',
    textTransform: 'uppercase',
    textDecoration: 'none',
    background: '#2979ff',
    padding: '20px',
    borderRradius: '5px',
    display: 'inline-block',
    border: 'none',
    width: '100%',
    '&:focus': {
      outline: 0,
    },
  },

  mt20: {
    marginTop: '20px',
  },

  [theme.breakpoints.down('sm')]: {
    joinOuterContainer: {
      height: '100%',
    },

    joinInnerContainer: {
      width: '90%',
    },
  },
}));
