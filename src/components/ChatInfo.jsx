import styled from 'styled-components';
import { ChatImg, Video, Phone, ThumbsUp, Image } from './SvgImporter'

const ColorsArray = ['blue', 'purple', 'green', 'orange'];
const HexColorsArray = ['#0086ff', '#9f7aea', '#38b2ac', '#ed8936'];
const UrlImg = ['https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2168&q=80', 'https://images.unsplash.com/photo-1516085216930-c93a002a8b01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80', 'https://images.unsplash.com/photo-1458819714733-e5ab3d536722?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80', 'https://images.unsplash.com/photo-1520013817300-1f4c1cb245ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2287&q=80', 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80', 'https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80', 'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2249&q=80', 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2309&q=80', 'https://images.unsplash.com/photo-1473170611423-22489201d919?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80', 'https://images.unsplash.com/photo-1579613832111-ac7dfcc7723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80v']


const Container = styled.div `
    padding: 30px 30px 0 30px;
    width: 340px;
`
const InfoHeaderContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const InfoHeaderImageContainer = styled.div `
    width: 60px;
    height: 60px;
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
    background-color: #323336;
    border-radius: 50%;
    object-fit: cover;
    svg{
        width: 60%;
    }

`
const InfoHeaderDetailsContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #d1d1d2;
`
const InfoHeaderDetailsTitle = styled.div `
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
`
const InfoHeaderDetailsSubTitle = styled.div `
    font-size: 12px;
    font-weight: 600;
    color: #626466;
`
const InfoHeaderActionsContainer = styled.div `
    margin-top: 20px;
    display: flex;
    width: 100%;
`
const InfoHeaderActionsButton = styled.button `
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #393b40;
    color: #d1d1d2;
    padding: 10px 14px;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    flex-grow: 1;
    font-weight: 500;
    cursor:pointer;
    svg{
        width: 18px;
        margin-right: 10px;
    }
`
const InfoSettings = styled.div `margin-top: 40px;`
const InfoSettingsInputContainer = styled.div ``
const InfoSettingsChange = styled.div `
display: flex;
padding: 14px 0;
font-weight: 600;
font-size: 14px;border-bottom: 1px solid #323336;
color: #6f7073;

`
const InfoSettingsChangeColor = styled.div `
    display: flex;
    margin-left: auto;
`
const InfoSettingsInput = styled.input `
border: none;
width: 100%;
border-bottom: 1px solid #323336;
background-color: transparent;
font-size: 14px;
font-weight: 600;
padding: 14px 0;
color: #d1d1d2;
`
const Color = styled.div `
    width: 16px;
    height: 16px;
    border-radius: 50%;
    cursor: pointer;
    :not(:last-child){
        margin-right: 4px;
    }
`
const InfoSettingsChangeEmoji = styled.div ``
const InfoAttachmentsContainer = styled.div `
    color: #6f7073;
    font-size: 14px;
    font-weight: 600;
`
const InfoAttachmentsTitle = styled.div `
    svg{
        width: 16px;
        margin-right: 8px;;
    }
    `
const InfoAttachments = styled.div `
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 6px;
    grid-row-gap: 6px;
    grid-template-rows: repeat(3, 60px);
`
const InfoAttachmentsImg = styled.img `
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 8px;
    border-style: none;
    max-width: 100%;
`
const InfoAttachmentsMore = styled.div ``
const ChatInfo = () => {
        return ( <
                Container >
                <
                InfoHeaderContainer >
                <
                InfoHeaderImageContainer >
                <
                ChatImg / >
                <
                /InfoHeaderImageContainer> <
                InfoHeaderDetailsContainer >
                <
                InfoHeaderDetailsTitle > CodePen Group < /InfoHeaderDetailsTitle> <
                InfoHeaderDetailsSubTitle > Created by Asenur, 1 May 2020 < /InfoHeaderDetailsSubTitle> <
                /InfoHeaderDetailsContainer> <
                InfoHeaderActionsContainer >
                <
                InfoHeaderActionsButton > < Phone / > Call Group < /InfoHeaderActionsButton> <
                InfoHeaderActionsButton style = {
                    { marginLeft: "8px" } } > < Video / > Video Chat < /InfoHeaderActionsButton> <
                /InfoHeaderActionsContainer> <
                /InfoHeaderContainer> <
                InfoSettings >
                <
                InfoSettingsInputContainer >
                <
                InfoSettingsInput placeholder = "Search in Conversation" / >
                <
                /InfoSettingsInputContainer> <
                InfoSettingsChange >
                Change Color <
                InfoSettingsChangeColor > {
                    ColorsArray.map((key, i) => < Color data - color = { key }
                        style = {
                            { backgroundColor: HexColorsArray[i] } }
                        />)} <
                        /InfoSettingsChangeColor> <
                        /InfoSettingsChange> {
                            /* <InfoSettingsChange>
                                                <InfoSettingsChangeEmoji>
                                                    <ThumbsUp />
                                                    {ColorsArray.map((key, i)=><Color data-color={key.color} style={{ backgroundColor: HexColorsArray[i] }} />)}
                                                </InfoSettingsChangeEmoji>
                                            </InfoSettingsChange> */
                        } <
                        /InfoSettings> <
                        InfoAttachmentsContainer >
                        <
                        InfoAttachmentsTitle >
                        <
                        Image / > Shared Photos <
                        /InfoAttachmentsTitle> <
                        InfoAttachments > {
                            UrlImg.map((keys) => < InfoAttachmentsImg src = { keys }
                                />)} <
                                /InfoAttachments> <
                                InfoAttachmentsMore >
                                View More <
                                /InfoAttachmentsMore> <
                                /InfoAttachmentsContainer> <
                                /Container>
                            )
                        }

                        export default ChatInfo