import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  form: {
    display: 'flex',
    borderTop: '2px solid #D3D3D3',
  },

  input: {
    border: 'none',
    borderRadius: 0,
    padding: '5%',
    width: '80%',
    fontSize: '1.2em',
    '&:focus': {
      outline: 'none',
    },
  },

  sendButton: {
    color: '#fff',
    textTransform: 'uppercase',
    textDcoration: 'none',
    background: '#2979FF',
    padding: '20px',
    display: 'inline-block',
    border: 'none',
    width: '20%',
  },
}));
