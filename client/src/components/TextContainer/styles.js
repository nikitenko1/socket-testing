import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '100px',
    color: 'white',
    height: '60%',
    justifyContent: 'space-between',
    '& h1': {
      marginBottom: '0px',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  activeContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '50%',
    '& img': { paddingLeft: '10px' },
  },

  activeItem: {
    display: 'flex',
    alignItems: 'center',
  },
}));
