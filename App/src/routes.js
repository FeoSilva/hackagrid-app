import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { SignInScreen } from './screens/SignIn/signin.routes';

console.disableYellowBox = true;

const Routes = (userLogged = false) => {
  let initialRouteName = 'SignInScreen';
  if (userLogged) {
    initialRouteName = 'Logged';
  }

  return createAppContainer(
    createSwitchNavigator(
      {
        SignIn: SignInScreen,
      },
      {
        initialRouteName,
      },
    ),
  );
};

export default Routes;
