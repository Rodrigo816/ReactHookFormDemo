/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {TextInput, Button, View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import * as yup from 'yup';

const App = () => {
  const {handleSubmit, control, errors} = useForm({
    validationSchema: yup.object().shape({
      firstName: yup
        .string()
        .label('Name')
        .required(),
    }),
  });

  const onSubmit = formData => {
    console.log('Form Data', formData);
  };

  const onChange = args => {
    return {
      value: args[0].nativeEvent.text,
    };
  };

  console.log('The component App was been render');
  return (
    <View style={{marginTop: 40}}>
      <Controller
        as={
          <TextInput
            style={{borderWidth: 1, height: 80}}
            placeholder="your name"
          />
        }
        control={control}
        name="firstName"
        onChange={onChange}
      />
      <Controller
        as={<TextInput style={{borderWidth: 1, height: 80}} />}
        control={control}
        name="lastName"
        onChange={onChange}
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default App;
