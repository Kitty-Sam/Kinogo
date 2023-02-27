import { AppRegistry } from 'react-native';
import { App } from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { setupStore } from '~store/store';
import i18n from './i18n.config';

const store = setupStore();

export const ReduxApp = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};
AppRegistry.registerComponent(appName, () => ReduxApp);
