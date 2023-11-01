import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Search from '../screen/Search';
import Account from '../screen/Account';
import Ranking from '../screen/Ranking';
import Favorites from '../screen/Favorites';
import Restaurants from '../screen/Restaurants';
import IconOptions from '../helpers/IconOptions';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: '#00a680',
                tabBarInactiveTintColor: '#646464',
                tabBarIcon: ({ color, size }) => IconOptions(route, color, size)
            })}
        >
            <Tab.Screen name='Restaurants' component={Restaurants} />
            <Tab.Screen name='Search' component={Search} />
            <Tab.Screen name='Account' component={Account} />
            <Tab.Screen name='Ranking' component={Ranking} />
            <Tab.Screen name='Favoritos' component={Favorites} />
        </Tab.Navigator>
    )
}

export default AppNavigation