import { View, Text } from 'react-native';
import styles from './styles.jsx';
import React, { useState, createContext } from 'react';
import Start from './components/navbar/Start';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Site from './components/pages/Site';
import Home from './components/pages/Home';
import Admin from './components/pages/Admin';
import Submit from './components/pages/Submit';
// import Mongo from './components/pages/testmongo';

// import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // Construct our main GraphQL API endpoint
// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// // Construct request middleware that will attach the JWT token to every request as an `authorization` header
// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem('id_token');
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
//   // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

// const AuthContext = createContext(false);

const Stack = createNativeStackNavigator();

function App() {
  // getLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  }; 
  console.log(isLoggedIn)
  return (
    
    // <AuthContext.Provider value={{ isLoggedIn, onLogin: handleLogin, onLogout: handleLogout }}>
    // <ApolloProvider client={client}>
      <NavigationContainer style={styles.root}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen style={styles.navbar} name="Start" component={Start} options={{ title: 'Start' }} initialParams={{ isLoggedIn: isLoggedIn }} />
          <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
          {/* <Stack.Screen name="Mongo" component={Mongo} options={{ title: 'Mongo' }} /> */}
          <Stack.Screen name="Site" component={Site} options={{ title: 'Site' }} />
          <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} initialParams={{ isLoggedIn: isLoggedIn, onLogin: handleLogin }} />
          <Stack.Screen name="Signup" component={Signup} options={{ title: 'Signup' }} initialParams={{ isLoggedIn: isLoggedIn, onLogin: handleLogin }} />
          <Stack.Screen name="Submit" component={Submit} options={{ title: 'Submit' }} />
          <Stack.Screen name="Admin" component={Admin} options={{ title: 'Admin' }} />
        </Stack.Navigator>
      </NavigationContainer>
    // </ApolloProvider>
    // </AuthContext.Provider>
    
  );
}

export default App;
// export { AuthContext };