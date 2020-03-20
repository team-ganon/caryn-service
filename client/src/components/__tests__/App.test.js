import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { App } from '../App.jsx'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


describe('App', () => {
  it('see if jest works', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot();
  })
})


