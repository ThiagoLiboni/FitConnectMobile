import { NavigationContainer } from "@react-navigation/native";
import Login from "./stack.routes";

export default function Routes(){

    return(
        <NavigationContainer>
            <Login />
        </NavigationContainer>
    )
}