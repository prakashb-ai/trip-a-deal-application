import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import BookmarksScreen from '../Screens/BookmarksScreen'
import DetailScreen from '../Screens/DetailScreen';
import SavedScreen from '../Screens/SavedScreen';
import ContactScreen from '../Screens/ContactScreen';
import ProfileScreen from '../Screens/ProfileScreen'
const Tab = createBottomTabNavigator();


export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Details") {
              iconName = "info";
            } else if (route.name === "Bookmarks") {
              iconName = "bookmark";
            } else if (route.name === "Profile") {
              iconName = "person";
            } else if(route.name === 'Saved'){
                iconName="save"
            }else if(route.name === 'Contact'){
                iconName="contact-mail"
            }
            
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          headerShown: false,  // Hide header for all screens

        })}
      >
        <Tab.Screen name="Details" component={DetailScreen}  />
        <Tab.Screen name="Bookmarks" component={BookmarksScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Saved" component={SavedScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />


      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
  },
});
