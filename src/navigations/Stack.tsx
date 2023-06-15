import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Registration from '../screens/Registration'
import Login from '../screens/Login'
import Confirm from '../screens/Confirm'
import ForgotPassword from '../screens/ForgotPassword'
import Home from '../screens/Home'

const StackNavigator = createNativeStackNavigator()

export default function Stack() {
    return (
        <NavigationContainer>
            <StackNavigator.Navigator screenOptions={{
                headerShown: false
            }}>
                <StackNavigator.Screen name='Login' component={Login} />
                <StackNavigator.Screen name='Registration' component={Registration} />
                <StackNavigator.Screen name='Confirm' component={Confirm} />
                <StackNavigator.Screen name='ForgotPassword' component={ForgotPassword} />
                <StackNavigator.Screen name='Home' component={Home} />
            </StackNavigator.Navigator>
        </NavigationContainer>
    )
}