import React from 'react'

import styled from 'styled-components'


const Container = styled.div`
    width: 340px;
    flex-shrink: 0;
    height: 100%;
    border-right: 1px solid gray;
    background-color: #323336;
`

const SelectecChatContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 80px;
    border-left: 5px solid #5B438E;
`

const SelectecChatContainerTest = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 80px;
    padding-left: 15px;
`

const SelectedChatLeft = styled.div`
    margin: 0 15px ;
    display: flex;
    align-items: center;
`

const ChatImg = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: red;
    position: relative;
`

const ChatOnline = styled.div`
    width: 8px;
    height: 8px;
    border: 2px solid black;
    position: absolute;
    background-color: #1C9865;
    border-radius: 50%;
    bottom: 0;
    right: 0;
`

const SelectedChatRight = styled.div`
    display: flex;
    flex-direction: column;
`

const ChatName = styled.span`
    font-weight: 600;
    color: white;
`

const ChatLastMessage = styled.p`
    font-weight: 100;
    color: gray;
    display: flex;
`
const ChatTimer = styled.p`
    padding-left: 5px;
    :before{
        content: "•";
        margin-right: 2px;
    }
`



const ChatList = () => {
    return (
        <Container>
            <SelectecChatContainer>
                <SelectedChatLeft>
                    <ChatImg>
                        <ChatOnline/>
                    </ChatImg>
                </SelectedChatLeft>
                <SelectedChatRight>
                    <ChatName>Maxim M</ChatName>
                    <ChatLastMessage>Дота через 15 минут<ChatTimer>1m</ChatTimer></ChatLastMessage>
                </SelectedChatRight>
            </SelectecChatContainer>
            <SelectecChatContainerTest>
                <SelectedChatRight>
                    <ChatName>Maxim M</ChatName>
                    <ChatLastMessage>Дота через 15 минут<ChatTimer>1m</ChatTimer></ChatLastMessage>
                </SelectedChatRight>
            </SelectecChatContainerTest>
        </Container>
    )
}

export default ChatList
