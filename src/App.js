import React from 'react';
import './App.css';
import Message from "./components/Message";
import styled from "styled-components";

function App() {
    return (
        <Container>
            <Content>
                <h1>Read the text below...</h1>
                <Message text='Концепция Flux проста: ваше представление вызывает событие (например: пользователь
                    вводит имя в текстовое поле), событие изменяет модель, затем модель вызывает событие, представление
                    реагирует на событие модели и перерисовывается с новыми данными. Вот и все.
                    Однонаправленный поток данных и шаблон проектирования «наблюдатель» гарантирует, что ваши хранилища/модели,
                    всегда находится в актуальном состоянии. Это полезно.Плохой стороной Flux является то, что каждый заново изобретает
                    его. Так и нет договоренности о библиотеки событий, слое модели, AJAX слое и остального, есть много разных реализаций
                     «Flux» и все они конкурируют между собой.'/>

            </Content>
        </Container>


    )
}

export default App;


const Container = styled.div`
  {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #060c21;
    max-width: 900px;
  }

  ::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: #fff;
    z-index: -1;
  }

  ::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: #fff;
    z-index: -2;
    filter: blur(40px);
  }

  ::before,
  ::after {
    background: linear-gradient(235deg, #89ff00, #060c21, #00bcd4);
  }
`

const Content = styled.div`
  padding: 20px;
  box-sizing: border-box;
  color: #ffffff;


`