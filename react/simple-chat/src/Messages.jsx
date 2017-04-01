import React, {Component} from 'react';
import MessageList from './MessageList.jsx';

class Messages extends Component {
  render() {
    return (
      <main className="messages">
        <Messagelist />
      </main>
    );
  }
}

export default Messages;
