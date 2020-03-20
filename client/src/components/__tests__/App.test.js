import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Introduction } from '../introduction.jsx'


describe('Introduction', () => {
  it('renders without crashing given the required props', () => {

    const wrapper = shallow(<Introduction {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})


