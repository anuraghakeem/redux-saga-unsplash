import React from 'react'
import { shallow } from 'enzyme';

import App from '../../App';

const setUp = (props = {}) => {
    const component = shallow(<App {...props} />);
    return component;
};

const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

describe('App.js', () => {
    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('Should render 1 header component without errors', () => {
        const wrapper = findByTestAtrr(component, 'AppComponent');
        expect(wrapper.length).toBe(1);

    });
})