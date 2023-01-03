import React from 'react';
import {MainApp} from './src/app/App';
import {Button, View} from 'react-native';
import {store} from './src/app/store';
import {Provider} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {WithSafeAreaView} from './src/componentHelper/WithSafeAreaView';
import {GalleryType, HomeType, RootStackParamList, SocialNetworkType} from './types/types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

// const Stack = createNativeStackNavigator<RootStackParamList>();
const Stack = createBottomTabNavigator<RootStackParamList>();
// const Stack = createDrawerNavigator<RootStackParamList>();

function HomeScreen({navigation}: HomeType) {
    return (
        <WithSafeAreaView>
            <View>
                <MainApp/>
                <Button
                    onPress={() => navigation.navigate('SocialNetwork', {
                        myName: 'Victor',
                        age: 26
                    })}
                    title="SocialNetwork"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        </WithSafeAreaView>
    );
}

function SocialNetwork({route, navigation}: SocialNetworkType) {
    const param = route.params
    return (
        <WithSafeAreaView>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
                <Text>Home Screen</Text>
                <Text>{JSON.stringify(param)}</Text>
                <Button
                    onPress={() => navigation.navigate('Gallery')}
                    title="Gallery"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        </WithSafeAreaView>
    );
}

function Gallery({navigation}: GalleryType) {
    return (
      <WithSafeAreaView>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
              <Text>Home Screen</Text>
              <Button
                  onPress={() => navigation.navigate('Home')}
                  title="Home"
                  color="#841584"
                  accessibilityLabel="Learn more about this purple button"
              />
          </View>
      </WithSafeAreaView>
    );
}

const App = () => {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="Home" component={HomeScreen}/>
                        <Stack.Screen name="SocialNetwork" component={SocialNetwork}/>
                        <Stack.Screen name="Gallery" component={Gallery}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>

        </Provider>
    );
}
export default App