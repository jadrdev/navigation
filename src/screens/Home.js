import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Home(props) {
  const {navigation} = props;

  return (
    <View>
      <Text>Estamos en la Home</Text>
      <Button
        title="Ir a quienes somos"
        onPress={() => navigation.navigate('about')}
      />
      <Button
        title="Ir a contacto"
        onPress={() => navigation.navigate('contact')}
      />
    </View>
  );
}
