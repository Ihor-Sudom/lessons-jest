import React from 'react'
import Message from '../Message'

describe('Message', () => {
  it('Should render Message component with props text', () => {
    const wrappedMessage = shallow(<Message text={'Hello world!'} />)
    expect(wrappedMessage.find('.message').text()).toEqual('Hello world!')
  })

  it('Should not render Message component without props text', () => {
    const wrappedMessage = shallow(<Message />)
    expect(wrappedMessage.find('.message').length).toBe(0)
  })
})