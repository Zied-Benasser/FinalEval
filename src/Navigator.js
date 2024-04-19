import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Bienvenue from './screen/Home';
import Movie from './screen/Movie';
import Flag from './screen/Flag';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Acceuil" component={StackNavigator} options={{ headerShown: false, tabBarIcon: ({ color, size }) => (<Ionicons name="home" color={color} size={size} />), }} />
            <Tab.Screen name="Movies" component={Movie} options={{ headerShown: false, tabBarIcon: ({ color, size }) => (<Ionicons name="videocam" color={color} size={size} />), }} />
            <Tab.Screen name="Flags" component={Flag} options={{ headerShown: false, tabBarIcon: ({ color, size }) => (<Ionicons name="flag" color={color} size={size} />), }} />
        </Tab.Navigator>
    );
}

const Stack = createStackNavigator();

function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Bienvenue} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}
