import React, {Component} from 'react';
import MessageList from './MessageList.jsx';

class Messages extends Component {
  render() {
    return (
      <main className="messages">
        <MessageList />
        <div className="message system">
          Anonymous1 change their name to nom nom.
        </div>
      </main>
    );
  }
}

export default Messages;
