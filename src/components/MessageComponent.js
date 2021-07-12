import React from 'react';

class MessageComponent extends React.Component {
    render() {
        return (
            <div>
                {this.props.author} : {this.props.text}
            </div>
        );
    }
}

export default MessageComponent