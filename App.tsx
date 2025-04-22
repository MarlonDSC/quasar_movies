import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Movie, MoviesStoreProvider } from './src';
import { HomeScreen } from './src/features/movies/presentation/screens';

export type RootStackParamList = {
  HomeScreen: { movie?: Movie };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <MoviesStoreProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </MoviesStoreProvider>
  );
}

export default App;
