import React from 'react';
import {useSelector} from 'react-redux';

import Main from '../screens/Main';
import Topics from '../screens/Topics';
import Setting from '../screens/Setting';
import NewStory from '../screens/NewStory';
import Search from '../screens/Search';
import Catalog from '../screens/Catalog';
import Stories from '../screens/Stories';
import Details from '../screens/Details';
import Login from '../screens/Login';
import Signup from '../screens/Signup';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';

import {Icon, Text, View, Button} from 'native-base';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerStack = () => {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator initialRouteName="Main">
      <Drawer.Screen
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
                onPress={() => navigation.navigate('Search')}
              />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="NewStory"
        component={NewStory}
        options={{
          title: 'New story',
          headerRight: () => (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                name="search"
                type="FontAwesome"
                style={{fontSize: 20, marginRight: 10}}
              />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Stories"
        component={Stories}
        options={{
          title: 'Your stories',
          headerRight: () => (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                name="search"
                type="FontAwesome"
                style={{fontSize: 20, marginRight: 10}}
              />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={Setting}
        options={{
          title: 'Settings',
        }}
      />
    </Drawer.Navigator>
  );
};

const Navigations = () => {
  return (
    <NavigationContainer>
      {false ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={DrawerStack}
            options={{headerShown: false}}
          />
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
                </View>
              ),
            }}
          />
          <Stack.Screen
            name="Search"
            component={Search}
            options={{
              title: '',
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
                </View>
              ),
            }}
          />
        </Stack.Navigator>
      ) : (
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
                    style={{marginRight: 10}}>
                    <Text>GET STARTED</Text>
                  </Button>
                </View>
              ),
            }}
          />
          <Stack.Screen name="Login" component={Login} options={{title: ''}} />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{title: ''}}
          />
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
      )}
    </NavigationContainer>
  );
};

export default Navigations;
