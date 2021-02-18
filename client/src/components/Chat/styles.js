import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  outerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#1a1a1d',
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    background: '#ffffff',
    borderRadius: '8px',
    height: '60%',
    width: '35%',
  },

  [theme.breakpoints.down('sm')]: {
    outerContainer: {
      height: '100%',
    },

    container: {
      width: '100%',
      height: '100%',
    },
  },

  [theme.breakpoints.between('sm', 'md')]: {
    container: {
      width: '60%',
    },
  },
}));
