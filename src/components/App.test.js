import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
    test('Should match snapshot', () => {
        const wrapper = shallow(<App />);

        expect(wrapper.find('h2').text()).toBe('React GMP project');
        expect(wrapper).toMatchSnapshot();
    })
});