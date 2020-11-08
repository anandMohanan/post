import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    marginBottom: '30px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'black',
    fontSize: '30px',
  },
  [theme.breakpoints.down('sm')]: {
    mainContainer: { flexDirection: 'column-reverse' },
  },
}));
