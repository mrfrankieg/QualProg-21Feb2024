import * as React from 'react';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import App from '../app';
import { Stack } from 'expo-router';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'darkorange',
    secondary: 'grey',
  },
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false, animation: 'fade' }}/>
        <Stack.Screen name="auth" options={{ headerShown: false, animation: 'fade' }}/>
      </Stack>
    </PaperProvider>
  );
}