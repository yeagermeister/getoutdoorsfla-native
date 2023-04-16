import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// import { Link } from 'react-router-dom';

// import { useMutation } from '@apollo/client';
// import { ADD_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View>
        <Text>Sign Up!</Text>
            {data ? (
              <Text>
                Success! You may now head back to the homepage.
              </Text>
            ) : (
              <View>
                <Text>
                  Username:
                </Text>
                <TextInput
                 style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                 name="username"
                 type="text"
                 value={formState.username}
                 onChangeText={(value) => handleChange('username', value)}
                /><Text>Email Address:</Text>
                <TextInput
                  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                  name="email"
                  type="email"
                  value={formState.email}
                  onChangeText={(value) => handleChange('email', value)}
                />
                <Text>Password:</Text>
                <TextInput
                  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                  name="password"
                  type="password"
                  value={formState.password}
                  onChangeText={(value) => handleChange('password', value)}
                  secureTextEntry={true}
                />
                <TouchableOpacity onPress={handleFormSubmit}>
                  <Text>Submit</Text>
                </TouchableOpacity>
              </View>
            )}
            {error && (
              <View style={{ backgroundColor: 'red', padding: 10 }}>
                <Text style={{ color: 'white' }}>{error.message}</Text>
              </View>
            )}
          </View>
        );
      };

export default Signup;
