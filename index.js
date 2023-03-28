import { AppRegistry, LogBox } from 'react-native';
import { App } from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { persistor, store } from '~store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
LogBox.ignoreLogs(['Warning: Async Storage has been extracted from react-native core']);

import i18n from './i18n.config';

export const ReduxApp = () => {
    return (
        <BottomSheetModalProvider>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <App />
                </PersistGate>
            </Provider>
        </BottomSheetModalProvider>
    );
};
AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(ReduxApp));
