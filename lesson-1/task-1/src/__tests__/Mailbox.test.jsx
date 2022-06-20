import React from 'react'
import Mailbox from '../Mailbox'

describe('Mailbox', () => {
  it('Should not render count if no unread messages', () => {
    const wrappedComponent = shallow(<Mailbox unreadMessages={[]} />)

    expect(wrappedComponent.find('.mailbox__count').exists()).toEqual(false)
  })

  it('Should render corect count of unread messages', () => {
    const unreadMessages = [1, 2, 3]
    const wrappedComponent = shallow(<Mailbox unreadMessages={unreadMessages} />)

    expect(wrappedComponent.find('.mailbox__count').text()).toEqual('3')
  })
})