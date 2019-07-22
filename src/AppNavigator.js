import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import { LoginScreen, DashboardScreen, DetailedViewScreen, AuthLoadingScreen } from "./screens";

const AuthStack = createStackNavigator({ Login: LoginScreen });

const DashboardStack = createStackNavigator({ Dashboard: DashboardScreen, DetailedView: DetailedViewScreen });

const AppContainer = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack, 
    Dashboard: DashboardStack
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

export default createAppContainer(AppContainer);
