import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    '--sky': '#ADD8E6',
    '--sand': '#e9e0cd',
    '--lightgreen': '#7ad9ae',
    '--error': '#FFA500',
    '--darkgreen': '#5a8c5a',
    '--water': '#41a3b0',
  },
  
  body: {
    backgroundColor: 'var(--sand)',
  },
  
  navbar: {
    backgroundImage: 'linear-gradient(to bottom right, var(--sky), #409bba)',
    backgroundColor: 'var(--sky)',
    color: '#ffffff',
  },
  
  'nav-link': {
    color: '#ffffff',
    fontSize: 'x-large',
    marginTop: 5,
    marginLeft: 15,
    textDecoration: 'none',
  },
  
  myCard: {
    color: 'white',
    textAlign: 'center',
    borderRadius: 25,
    backgroundImage: 'linear-gradient(to bottom left, #408475, var(--water))',
    marginBottom: '5%',
  },
  
  'card-description': {
    overflow: 'hidden',
    height: 75,
    textOverflow: 'ellipsis',
  },
  
  icon: {
    height: 50,
    width: 50,
    marginLeft: 5,
  },
  
  myButton: {
    backgroundImage: 'linear-gradient(to bottom right, #014358, rgb(113, 233, 113))',
  },
  
  h2: {
    backgroundImage: 'linear-gradient(to bottom right, #014358, rgb(113, 233, 113))',
    textAlign: 'center',
  },
});