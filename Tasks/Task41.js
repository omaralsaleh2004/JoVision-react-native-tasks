import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useTheme } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }) {
  const { colors } = useTheme();

  return (
    <View style={{ flexDirection: 'row', width: '100%' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel ?? options.title ?? route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Pressable
            key={route.key}
            onPress={onPress}
            style={{
              flex: 1,
              paddingVertical: 12,
              backgroundColor: isFocused ? colors.primary : colors.background,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text
              style={{ color: isFocused ? '#fff' : colors.text, fontSize: 16 }}
            >
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.buttonText}>Go to Profile</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('About')}
      >
        <Text style={styles.buttonText}>Go to About</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Edit')}
      >
        <Text style={styles.buttonText}>Go to Edit</Text>
      </Pressable>
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Go to Home</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('About')}
      >
        <Text style={styles.buttonText}>Go to About</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Edit')}
      >
        <Text style={styles.buttonText}>Go to Edit</Text>
      </Pressable>
    </View>
  );
}

function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Screen</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Go to Home</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.buttonText}>Go to Profile</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Edit')}
      >
        <Text style={styles.buttonText}>Go to Edit</Text>
      </Pressable>
    </View>
  );
}

function EditScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Screen</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Go to Home</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.buttonText}>Go to Profile</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('About')}
      >
        <Text style={styles.buttonText}>Go to About</Text>
      </Pressable>
    </View>
  );
}

export default function Task41() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Edit" component={EditScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
