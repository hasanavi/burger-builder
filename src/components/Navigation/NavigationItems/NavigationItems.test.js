import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';

configure({adapter: new Adapter()});

describe('<NavigationItems />', () => {
    let wrapper;
    beforeEach( () => {
        wrapper = shallow(<NavigationItems />)
    })

    it('should render 2 navigation items', () => {
        expect(wrapper.find('li')).toHaveLength(2);
    });
});