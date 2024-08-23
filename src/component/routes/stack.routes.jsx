
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppStart from '../home/screen/index.jsx';
import LoginApp from '../login/screen/Login.jsx';

const Stack  = createNativeStackNavigator();


export default function Login(){
  return(
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={AppStart} />
      <Stack.Screen name="Login" component={LoginApp} />
    </Stack.Navigator>
  )
}