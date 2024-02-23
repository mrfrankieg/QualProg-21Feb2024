import React from 'react';
import { View, Text } from 'react-native';
import { Redirect, Slot, Stack } from 'expo-router';;

export default function authlayout() {
  return (
    <Stack screenOptions={
      {
        headerShown: false
      }
    }>
      <Stack.Screen name='SignInScreen' options={{ animation: 'fade'}}/>
    </Stack>
  )
}