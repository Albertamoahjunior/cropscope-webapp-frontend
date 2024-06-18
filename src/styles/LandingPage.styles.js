import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  landingContainer: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(to right, #4CAF50, #8BC34A)',
    color: 'white',
  },
  header: {
    textAlign: 'center',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: theme.spacing(4),
  },
  buttonContainer: {
    display: 'flex',
    gap: theme.spacing(2),
  },
  button: {
    padding: theme.spacing(1, 4),
  },
}));

export default useStyles;
