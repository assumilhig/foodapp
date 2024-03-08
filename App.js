import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text className='text-sm'>Home Screen</Text>
      <Text className='text-base'>Home Screen</Text>
      <Text className='text-lg'>Home Screen</Text>
      <Text className='text-5xl font-bold'>Home Screen</Text>
      <Text className='text-lg'>Home Screen</Text>
    </View>
  );
};
function DetailsScreen() {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ title: 'Overview' }}
        />
        <Stack.Screen name='Details' component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
