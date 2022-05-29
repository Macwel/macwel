import { Checkbox } from '@material-ui/core';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%
`
const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const LoginContainerHeader = styled.div`
text-align: center;
color: #27292d;
`
const LoginTitle = styled.h2`
font-weight: 500;
`
const LoginSubTitle = styled.p`
    font-size: 16px;
    `
const LoginForm = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    box-shadow: 5px 8px 7px #d1d1d2, -2px -1px 7px #d1d1d2;
    border-radius: 15px;
    padding: 32px;
    
`
const LoginInput = styled.input`
    margin-top: 20px;
    background-color: none;
    padding: 12px;
    border: 1px solid #d1d1d2;
    color: #d1d1d2;
    position: relative;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 20px;
    padding-left: 25px;

`
const LoginButton = styled.button`
    margin-top: 30px;
    padding: 16px;
    background-color: #4a93ff;
    border: none;
    font-weight: 300;
    color: white;
    min-width: 300px;
`
const LoginReg = styled.a`
    margin-top: 20px;
    text-decoration: none;
    color: #27292d;
    font-size: 12px;

`

const Join = () => {
    return (
        <Container>
            <LoginContainer>
                <LoginContainerHeader>
                    <LoginTitle>Войти в аккаунт</LoginTitle>
                    <LoginSubTitle>Пожалуйста, вйодите в свой аккаунт</LoginSubTitle>
                </LoginContainerHeader>
                <LoginForm>
                    <LoginInput placeholder='Username' />
                    <LoginInput placeholder='Password' />
                    <LoginButton>Войти в аккаунт</LoginButton>
                    <LoginReg>Зарегистрироваться</LoginReg>
                </LoginForm>
            </LoginContainer>
        </Container>
    )
}

export default Join
