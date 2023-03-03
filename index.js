import { AppRegistry } from 'react-native';
import { App } from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { persistor, store } from '~store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';

import i18n from './i18n.config';

export const ReduxApp = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    );
};
AppRegistry.registerComponent(appName, () => ReduxApp);
