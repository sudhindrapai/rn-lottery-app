// https://github.com/expo/google-fonts/tree/master/font-packages/poppins#readme
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk'
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_100Thin,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins';

// import of auth navigation
// import AuthNavigation from './navigation/AuthStackNavigation';
import LotteryTabNavigation from './app/navigation/LotteryTabNavigation';
import LotteryNavigation from './app/navigation/LotteruDrawerMenu';

// import of reducers
import loginReducer from './app/store/reducers/login';
import signupReducer from './app/store/reducers/signup'

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer
});

const store = createStore(rootReducer,applyMiddleware(ReduxThunk));

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_900Black
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <LotteryNavigation />
    </Provider>
  );
}
