import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/screens/LoginScreen';
import CadastroScreen from './src/screens/RegistroScreen';
import HomeScreen from './src/screens/HomeScreen';
import FiltroScreen from './src/screens/FilterScreen';
import HistoricoScreen from './src/screens/HistoryScreen';
import PerfilScreen from './src/screens/ProfileScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: '#FF4848' },
          headerTintColor: '#FFF',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Filtro" component={FiltroScreen} />
        <Stack.Screen name="Historico" component={HistoricoScreen} />
        <Stack.Screen name="Perfil" component={PerfilScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
