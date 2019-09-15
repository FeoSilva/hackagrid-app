import { createStackNavigator } from 'react-navigation';
import SignInScreen from './SignInScreen';

export default createStackNavigator(
    {
      SignIn: {
        screen: SignInScreen,
        navigationOptions: {
          title: 'Entrar',
          headerTitle: null,
          headerTransparent: true,
          header: null,
        },
      },
    },
    {
      initialRouteName: SignIn,
      headerMode: 'screen',
    },
  );

