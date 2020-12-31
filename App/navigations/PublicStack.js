import React from 'react';

import Main from '../screens/Main';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Topics from '../screens/Topics';
import Search from '../screens/Search';
import Catalog from '../screens/Catalog';
import Details from '../screens/Details';
import {Icon, Button, Text, View} from 'native-base';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const PublicStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          headerTitle: () => <Text>News Portal</Text>,
          headerRight: () => (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                name="search"
                type="FontAwesome"
                style={{fontSize: 20, marginRight: 10}}
              />
              <Button
                success
                style={{marginRight: 10}}
                onPress={() => navigation.navigate('Login')}>
                <Text>GET STARTED</Text>
              </Button>
            </View>
          ),
        }}
      />
      <Stack.Screen name="Login" component={Login} options={{title: ''}} />
      <Stack.Screen name="Signup" component={Signup} options={{title: ''}} />
      <Stack.Screen
        name="Topics"
        component={Topics}
        options={{
          title: '',
          headerRight: () => (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                name="search"
                type="FontAwesome"
                style={{fontSize: 20, marginRight: 10}}
              />
              <Button success style={{marginRight: 10}}>
                <Text>GET STARTED</Text>
              </Button>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          title: '',
          headerRight: () => (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Button success style={{marginRight: 10}}>
                <Text>GET STARTED</Text>
              </Button>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Catalog"
        component={Catalog}
        options={{
          title: '',
          headerRight: () => (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                name="search"
                type="FontAwesome"
                style={{fontSize: 20, marginRight: 10}}
              />
              <Button success style={{marginRight: 10}}>
                <Text>GET STARTED</Text>
              </Button>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          title: '',
          headerRight: () => (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                name="search"
                type="FontAwesome"
                style={{fontSize: 20, marginRight: 10}}
              />
              <Button success style={{marginRight: 10}}>
                <Text>GET STARTED</Text>
              </Button>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default PublicStack;
