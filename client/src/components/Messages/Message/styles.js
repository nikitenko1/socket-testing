import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  messageBox: {
    background: '#F3F3F3',
    borderRadius: '20px',
    padding: '5px 20px',
    color: 'white',
    display: 'inline-block',
    maxWidth: '80%',
  },

  messageText: {
    width: '100%',
    letterSpacing: 0,
    float: 'left',
    fontSize: '1.1em',
    wordWrap: 'break-word',
    '& img': { verticalAlign: 'middle' },
  },

  messageContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '0 5%',
    marginTop: '3px',
  },

  sentText: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Helvetica',
    color: '#828282',
    letterSpacing: '0.3px',
  },

  pl10: {
    paddingLeft: '10px',
  },

  pr10: {
    paddingRight: '10px',
  },

  justifyStart: {
    justifyContent: 'flex-start',
  },

  justifyEnd: {
    justifyContent: 'flex-end',
  },

  colorWhite: {
    color: 'white',
  },

  colorDark: {
    color: '#353535',
  },

  backgroundBlue: {
    background: '#2979FF',
  },

  backgroundLight: {
    background: '#F3F3F3',
  },
}));
