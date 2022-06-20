import React from 'react'
import User from '../User'

describe('User', () => {
  it('Should render User component with name property', () => {
    const wrappedUser = shallow(<User name='John' />)
    expect(wrappedUser.find('.user__name').text()).toEqual('John')
  })

  it('Should render User component with age property', () => {
    const wrappedUser = shallow(<User age='30' />)
    expect(wrappedUser.find('.user__age').text()).toEqual('30')
  })
})