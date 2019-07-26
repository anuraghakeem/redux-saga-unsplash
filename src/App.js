import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';

import Header from './components/Header';
import ImageGrid from './components/ImageGrid';

import configureStore from './store'
const store = configureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <div data-test="AppComponent"><Header />
                        <ImageGrid />
                    </div>
                </Fragment>
            </Provider>
        );
    }
}

export default App;
