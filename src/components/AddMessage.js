import React from 'react';
import style from './style/AddMessage.module.css';
import {Button, TextField} from "@material-ui/core";


class AddMessage extends React.Component {


    handleChange = (e) => {
        this.props.onChange(e.target.value)
    }

    handleSubmit = (e) => {
        this.props.onSubmit()
        e.preventDefault()
        console.log(e)
    }


    render() {
        let newText = this.props.newMessage
        return (
            <div>
                <form className={style.formWrap}
                      onSubmit={this.handleSubmit}>
                    <TextField type='text'
                               id="standard-basic"
                               label="Написать сообщение"
                               value={newText}
                               onChange={this.handleChange}
                    />
                    <Button style={{"margin": "12px"}} variant="contained"
                            color="primary"
                            type="submit">
                        Отправить
                    </Button>

                </form>
            </div>
        );
    }
}

export default AddMessage;