import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (name, value) => {
    setFormState({
      ...formState,
      [name]: value,
    });
    props.onLogin();
  };

  // submit form
  const handleFormSubmit = async () => {
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
      props.onLogin();
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <>
      <Text>Login</Text>
      <View>
        {data ? (
          <Text>
            Success! You may now head{' '}
            <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
              <Text>back to the homepage.</Text>
            </TouchableOpacity>
          </Text>
        ) : (
          <View>
            <Text>Email:</Text>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={(value) => handleChange('email', value)}
              value={formState.email}
            />
            <Text>Password:</Text>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={(value) => handleChange('password', value)}
              value={formState.password}
              secureTextEntry={true}
            />
            <TouchableOpacity onPress={handleFormSubmit}>
              <Text>Submit</Text>
            </TouchableOpacity>
          </View>
        )}

        {error && (
          <View>
            <Text>{error.message}</Text>
          </View>
        )}
      </View>
    </>
  );
};

export default Login;