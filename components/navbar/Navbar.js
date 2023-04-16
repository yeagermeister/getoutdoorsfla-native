import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { AuthContext } from '../../App';
import Login from './login';
import Logout from './logout';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Navbar = (props) => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#fff' }}>
      <TouchableOpacity style={{ padding: 10 }}>
        <Image source={require('../../assets/icon.png')} style={{ width: 30, height: 30 }} />
      </TouchableOpacity>
      <TouchableOpacity style={{ padding: 10 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Get Outdoors Florida</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ padding: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Signup</Text>
      </TouchableOpacity>
      {isLoggedIn
        ? <Logout /* isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} */ />
        : <Login /* isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} */ />
      }
      <TouchableOpacity style={{ padding: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Submit a new location</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;