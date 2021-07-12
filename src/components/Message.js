import React from 'react';
import style from './style/Message.module.css';
import MessageComponent from "./MessageComponent";
import AddMessage from "./AddMessage";


class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            text: [],
            newText: "",
            author: "Мартин Силен"

        }

    }


    componentDidUpdate(prevProps, prevState) {
        let textBefore = [...prevState.text];
        let textAfter = [...this.state.text];

        if (textAfter.length > 0 && textBefore.length < textAfter.length && textAfter.pop().author !== "bot") {

            setTimeout(() =>
                    this.setState({
                        text: [
                            ...this.state.text,
                            {text: 'Не приставай ко мне, я робот!', author: 'bot'}
                        ]
                    }),
                2000);
        }
    }


    submitNewMessage = () => {
        this.setState({
            text: [...this.state.text, {id: this.state.id, author: this.state.author, text: this.state.newText}],
            newText: ""
        })
    }

    changeNewMessage = (newText) => {
        this.setState({
            newText: newText

        })
        console.log(newText)
    }


    render() {

        const textField = this.state.text.map((message, id) => {
            return <MessageComponent text={message.text} key={id} author={message.author}/>
        })
        return (
            <div>
                <div className={style.messageBot}>
                    {textField}
                    <AddMessage
                        newMessage={this.state.newText}
                        onChange={this.changeNewMessage}
                        onSubmit={this.submitNewMessage}
                    />
                </div>
            </div>
        );
    }
}

export default Message

