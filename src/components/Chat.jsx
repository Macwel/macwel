import styled from 'styled-components';
import { Image, PaperClip, PlusCircle, Smile, ThumbsUp, Video } from './SvgImporter'

const Container = styled.div`
    display: flex;
    overflow: auto;
    flex-grow: 1;
    flex-direction: column;
`
const ChatHeader = styled.div`
    display: flex;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background: linear-gradient(to bottom, #27292d 0%, #27292d 78%, rgba(255,255,255,0) 100%);
    `
const ChatTitile = styled.p`
    font-size: 18px;
    font-weight: 600;
`

const ChatGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const ChatGroupImg = styled.img`
    width: 32px;
    border-radius: 50%;
    object-fit: cover;
`

const ChatGroupSpan = styled.span`
    height: 32px;
    width: 32px;
    background-color:rgba(159,122,234,0.12);
    color: #9f7aea;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
`

const ChatArea = styled.div`
    flex-grow: 1;
`

const ChatMsg = styled.div`
    display: flex;
    padding: 0 20px 45px;
`

const ChatMsgProfile = styled.div`
    flex-shrink: 0;
    margin-top: auto;
    margin-bottom: -20px;
    position: relative;
`

const ChatMsgProfileImg = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    object-fit: cover;
`

const ChatMsgProfileDate = styled.div`
    position: absolute;
    left: calc(100% + 12px);
    bottom: 0;
    font-size: 12px;
    font-weight: 600;
    color: #626466;
    white-space: nowrap;
`

const ChatMsgContainer = styled.div`
    margin-left: 12px;
    max-width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ChatMsgText = styled.div`
    color:  #b5b7ba;
    background-color: #383b40;
    padding: 15px;
    border-radius: 20px 20px 20px 0;
    line-height: 1.5;
    font-size: 14px;
    font-weight: 500;
`


const IconsArray = ["https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%282%29.png", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%2812%29.png"]

const ChatFooter = styled.div`
    display: flex;
    /* border-top: 1px solid var(--border-color); */
    width: 100%;
    padding: 10px 20px;
    align-items: center;
    /* background-color: var(--theme-bg-color); */
    position: sticky;
    bottom: 0;
    left: 0;
`

const ChatFooterVideo = styled(Video)`
    color: #c1c7cd;
    flex-shrink: 0;
    width:20px;
    height:20px;
    flex-shrink: 0;
    cursor:pointer;
`
const ChatFooterImage = styled(Image)`
    color: #c1c7cd;
    flex-shrink: 0;
    width:20px;
    height:20px;
    margin-left: 12px;
    flex-shrink: 0;
    cursor:pointer;
`
const ChatFooterPlusCircle = styled(PlusCircle)`
    color: #c1c7cd;
    flex-shrink: 0;
    width:20px;
    height:20px;
    margin-left: 12px;
    flex-shrink: 0;
    cursor:pointer;
`
const ChatFooterPaperClip = styled(PaperClip)`
    color: #c1c7cd;
    flex-shrink: 0;
    width:20px;
    height:20px;
    margin-left: 12px;
    flex-shrink: 0;
    cursor:pointer;
`
const ChatFooterSmile = styled(Smile)`
    color: #c1c7cd;
    flex-shrink: 0;
    width:20px;
    height:20px;
    flex-shrink: 0;
    cursor:pointer;
`
const ChatFooterThumbUp = styled(ThumbsUp)`
    color: #c1c7cd;
    flex-shrink: 0;
    width:20px;
    height:20px;
    margin-left: 12px;
    flex-shrink: 0;
    cursor:pointer;
`

const ChatFooterInput = styled.input`
    width: 100%;
    color: #d1d1d2;
    border: none;
    padding: 12px;
    border-radius: 6px;
    font-size: 15px;
    margin: 0 12px;
    background-color: #2f3236;
    :focus-visible{
        outline: none;
    }
`


const Chat = () => {
    return (
        <Container>
            <ChatHeader>
                <ChatTitile>Мирная конфа</ChatTitile>
                <ChatGroup>
                    <ChatGroupImg src={IconsArray[0]} />
                    <ChatGroupImg src={IconsArray[1]} />
                    <ChatGroupImg src={IconsArray[2]} />
                    <ChatGroupSpan>+4</ChatGroupSpan>
                </ChatGroup>
            </ChatHeader>
            <ChatArea>
                <ChatMsg>
                    <ChatMsgProfile>
                        <ChatMsgProfileImg src={IconsArray[0]} />
                        <ChatMsgProfileDate>Message seen 1.22pm</ChatMsgProfileDate>
                    </ChatMsgProfile>
                    <ChatMsgContainer>
                        <ChatMsgText>Egestas tellus rutrum tellus pellentesque</ChatMsgText>
                    </ChatMsgContainer>
                </ChatMsg>
                <ChatMsg>
                    <ChatMsgProfile>
                        <ChatMsgProfileImg src={IconsArray[0]} />
                        <ChatMsgProfileDate>Message seen 1.22pm</ChatMsgProfileDate>
                    </ChatMsgProfile>
                    <ChatMsgContainer>
                        <ChatMsgText>Egestas tellus rutrum tellus pellentesque</ChatMsgText>
                    </ChatMsgContainer>
                </ChatMsg>
                <ChatMsg>
                    <ChatMsgProfile>
                        <ChatMsgProfileImg src={IconsArray[0]} />
                        <ChatMsgProfileDate>Message seen 1.22pm</ChatMsgProfileDate>
                    </ChatMsgProfile>
                    <ChatMsgContainer>
                        <ChatMsgText>Egestas tellus rutrum tellus pellentesque</ChatMsgText>
                    </ChatMsgContainer>
                </ChatMsg>
                <ChatMsg>
                    <ChatMsgProfile>
                        <ChatMsgProfileImg src={IconsArray[0]} />
                        <ChatMsgProfileDate>Message seen 1.22pm</ChatMsgProfileDate>
                    </ChatMsgProfile>
                    <ChatMsgContainer>
                        <ChatMsgText>Egestas tellus rutrum tellus pellentesque</ChatMsgText>
                    </ChatMsgContainer>
                </ChatMsg>
                <ChatMsg>
                    <ChatMsgProfile>
                        <ChatMsgProfileImg src={IconsArray[0]} />
                        <ChatMsgProfileDate>Message seen 1.22pm</ChatMsgProfileDate>
                    </ChatMsgProfile>
                    <ChatMsgContainer>
                        <ChatMsgText>Egestas tellus rutrum tellus pellentesque</ChatMsgText>
                    </ChatMsgContainer>
                </ChatMsg><ChatMsg>
                    <ChatMsgProfile>
                        <ChatMsgProfileImg src={IconsArray[0]} />
                        <ChatMsgProfileDate>Message seen 1.22pm</ChatMsgProfileDate>
                    </ChatMsgProfile>
                    <ChatMsgContainer>
                        <ChatMsgText>Egestas tellus rutrum tellus pellentesque</ChatMsgText>
                    </ChatMsgContainer>
                </ChatMsg>
                <ChatMsg>
                    <ChatMsgProfile>
                        <ChatMsgProfileImg src={IconsArray[0]} />
                        <ChatMsgProfileDate>Message seen 1.22pm</ChatMsgProfileDate>
                    </ChatMsgProfile>
                    <ChatMsgContainer>
                        <ChatMsgText>Egestas tellus rutrum tellus pellentesque</ChatMsgText>
                    </ChatMsgContainer>
                </ChatMsg>
                <ChatMsg>
                    <ChatMsgProfile>
                        <ChatMsgProfileImg src={IconsArray[0]} />
                        <ChatMsgProfileDate>Message seen 1.22pm</ChatMsgProfileDate>
                    </ChatMsgProfile>
                    <ChatMsgContainer>
                        <ChatMsgText>Egestas tellus rutrum tellus pellentesque</ChatMsgText>
                    </ChatMsgContainer>
                </ChatMsg>
                <ChatMsg>
                    <ChatMsgProfile>
                        <ChatMsgProfileImg src={IconsArray[0]} />
                        <ChatMsgProfileDate>Message seen 1.22pm</ChatMsgProfileDate>
                    </ChatMsgProfile>
                    <ChatMsgContainer>
                        <ChatMsgText>Egestas tellus rutrum tellus pellentesque</ChatMsgText>
                    </ChatMsgContainer>
                </ChatMsg>
                <ChatMsg>
                    <ChatMsgProfile>
                        <ChatMsgProfileImg src={IconsArray[0]} />
                        <ChatMsgProfileDate>Message seen 1.22pm</ChatMsgProfileDate>
                    </ChatMsgProfile>
                    <ChatMsgContainer>
                        <ChatMsgText>Egestas tellus rutrum tellus pellentesque</ChatMsgText>
                    </ChatMsgContainer>
                </ChatMsg><ChatMsg>
                    <ChatMsgProfile>
                        <ChatMsgProfileImg src={IconsArray[0]} />
                        <ChatMsgProfileDate>Message seen 1.22pm</ChatMsgProfileDate>
                    </ChatMsgProfile>
                    <ChatMsgContainer>
                        <ChatMsgText>Egestas tellus rutrum tellus pellentesque</ChatMsgText>
                    </ChatMsgContainer>
                </ChatMsg>
                <ChatMsg>
                    <ChatMsgProfile>
                        <ChatMsgProfileImg src={IconsArray[0]} />
                        <ChatMsgProfileDate>Message seen 1.22pm</ChatMsgProfileDate>
                    </ChatMsgProfile>
                    <ChatMsgContainer>
                        <ChatMsgText>Egestas tellus rutrum tellus pellentesque</ChatMsgText>
                    </ChatMsgContainer>
                </ChatMsg>
                <ChatMsg>
                    <ChatMsgProfile>
                        <ChatMsgProfileImg src={IconsArray[0]} />
                        <ChatMsgProfileDate>Message seen 1.22pm</ChatMsgProfileDate>
                    </ChatMsgProfile>
                    <ChatMsgContainer>
                        <ChatMsgText>Egestas tellus rutrum tellus pellentesque</ChatMsgText>
                    </ChatMsgContainer>
                </ChatMsg>
                <ChatMsg>
                    <ChatMsgProfile>
                        <ChatMsgProfileImg src={IconsArray[0]} />
                        <ChatMsgProfileDate>Message seen 1.22pm</ChatMsgProfileDate>
                    </ChatMsgProfile>
                    <ChatMsgContainer>
                        <ChatMsgText>Egestas tellus rutrum tellus pellentesque</ChatMsgText>
                    </ChatMsgContainer>
                </ChatMsg>
                <ChatMsg>
                    <ChatMsgProfile>
                        <ChatMsgProfileImg src={IconsArray[0]} />
                        <ChatMsgProfileDate>Message seen 1.22pm</ChatMsgProfileDate>
                    </ChatMsgProfile>
                    <ChatMsgContainer>
                        <ChatMsgText>Egestas tellus rutrum tellus pellentesque</ChatMsgText>
                    </ChatMsgContainer>
                </ChatMsg><ChatMsg>
                    <ChatMsgProfile>
                        <ChatMsgProfileImg src={IconsArray[0]} />
                        <ChatMsgProfileDate>Message seen 1.22pm</ChatMsgProfileDate>
                    </ChatMsgProfile>
                    <ChatMsgContainer>
                        <ChatMsgText>Egestas tellus rutrum tellus pellentesque</ChatMsgText>
                    </ChatMsgContainer>
                </ChatMsg>
                <ChatMsg>
                    <ChatMsgProfile>
                        <ChatMsgProfileImg src={IconsArray[0]} />
                        <ChatMsgProfileDate>Message seen 1.22pm</ChatMsgProfileDate>
                    </ChatMsgProfile>
                    <ChatMsgContainer>
                        <ChatMsgText>Egestas tellus rutrum tellus pellentesque</ChatMsgText>
                    </ChatMsgContainer>
                </ChatMsg>
                <ChatMsg>
                    <ChatMsgProfile>
                        <ChatMsgProfileImg src={IconsArray[0]} />
                        <ChatMsgProfileDate>Message seen 1.22pm</ChatMsgProfileDate>
                    </ChatMsgProfile>
                    <ChatMsgContainer>
                        <ChatMsgText>Egestas tellus rutrum tellus pellentesque</ChatMsgText>
                    </ChatMsgContainer>
                </ChatMsg>
                <ChatMsg>
                    <ChatMsgProfile>
                        <ChatMsgProfileImg src={IconsArray[0]} />
                        <ChatMsgProfileDate>Message seen 1.22pm</ChatMsgProfileDate>
                    </ChatMsgProfile>
                    <ChatMsgContainer>
                        <ChatMsgText>Egestas tellus rutrum tellus pellentesque</ChatMsgText>
                    </ChatMsgContainer>
                </ChatMsg>
                <ChatMsg>
                    <ChatMsgProfile>
                        <ChatMsgProfileImg src={IconsArray[0]} />
                        <ChatMsgProfileDate>Message seen 1.22pm</ChatMsgProfileDate>
                    </ChatMsgProfile>
                    <ChatMsgContainer>
                        <ChatMsgText>Egestas tellus rutrum tellus pellentesque</ChatMsgText>
                    </ChatMsgContainer>
                </ChatMsg>
            </ChatArea>
            <ChatFooter>
                <ChatFooterVideo />
                <ChatFooterImage />
                <ChatFooterPlusCircle />
                <ChatFooterPaperClip />
                <ChatFooterInput />
                <ChatFooterSmile />
                <ChatFooterThumbUp />
            </ChatFooter>
        </Container>
    )
}

export default Chat
