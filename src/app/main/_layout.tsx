import React from 'react';
import { View, Text } from 'react-native';
import { Stack } from 'expo-router';;

export default function authlayout() {
  return (
    <Stack screenOptions={
      {
        headerShown: false
      }
    }>
      <Stack.Screen name='index' options={{ animation: 'fade'}}/>
    </Stack>
  )
}