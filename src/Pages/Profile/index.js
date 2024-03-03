
import { useState, useEffect } from "react";

import { Box, useMediaQuery } from "@mui/material";

import styled from "styled-components";

import { LandingCaptionText, LandingHeaderText, ShareItemHeader, CollectionItemText, CollectionTitleText, CollectionNameText, CollectionButton, CollectionDurationText } from "../../Components";
import Container from "../Container";

const LoanTab = styled(ShareItemHeader)`
    background: #1B1E3D;
    border-color: #5C84FF;
    border-radius: 50px 0px 0px 50px;
    padding: 8px 40px;
    cursor: pointer;
`

const OfferTab = styled(ShareItemHeader)`
    background: #1B1E3D;
    border-radius: 0px 50px 50px 0px;
    border-color: #5C84FF;
    padding: 8px 40px;
    cursor: pointer;
`

const WaitingBadge = styled('div')`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 14px;
    /* or 175% */

    text-align: center;

    color: #111430;

    background: #FFBE5C;
    border-radius: 40px;

    height: fit-content;
    margin-top: auto;
    margin-bottom: auto;
`

const LoanBadge = styled(WaitingBadge)`
    background: #38D39C;
`

const loanItems = [
    {img: "/images/mint/Token.png", name: "Essence", borrowed: 242, left: 76, duration: 96, repay: 248},
]

const offerItems = [
    {img: "/images/mint/Token.png", name: "Essence", offer: 1.1, interest: 0.05, APY: 260, loanToken: false},
    {img: "/images/mint/Token.png", name: "Essence", offer: 1.1, interest: 0.05, APY: 260, loanToken: true},
]

function LoanItem({item}) {
    const isDesktop = useMediaQuery('(min-width:1024px)');

    if (isDesktop) {
        return <Box className="mb-[16px]">
            <Box className={`px-[26px] py-[18px] bg-[#111430] rounded-[12px] grid gap-[20px] 2xl:gap-[60px]`} gridTemplateColumns={'auto 2fr 1fr 3fr 1fr auto'}>
                <Box className="w-[106px] h-[106px] bg-cover" style={{backgroundImage: `url(${item.img})`}} />
                <CollectionNameText className="my-auto break-all">{item.name}</CollectionNameText>
                <Box className="flex justify-center">
                    <img className="my-auto h-[1em]" src="/images/cash.png" alt="Cash" />
                    <CollectionItemText className="my-auto break-all">&nbsp;{item.borrowed}</CollectionItemText>
                </Box>
                <Box className="my-auto">
                    <CollectionDurationText className="text-center">3 Days and 4 Hours Left</CollectionDurationText>
                    <Box className="mt-[4px] h-[18px] rounded-[10px] bg-[#191E46]">
                        <Box className="rounded-[20px] w-[60%] h-full" sx={{background: "linear-gradient(0deg, #A8B5E0, #A8B5E0), linear-gradient(0deg, #A8B5E0, #A8B5E0), #A8B5E0;"}} />
                    </Box>
                </Box>
                <Box className="flex justify-center">
                    <img className="my-auto h-[1em]" src="/images/cash.png" alt="Cash" />
                    <CollectionItemText className="my-auto break-all !text-[#38D39C]">&nbsp;{item.repay}</CollectionItemText>
                </Box>
                <CollectionButton className="my-auto">Repay</CollectionButton>
            </Box>
        </Box>
    }
    else {
        return <Box className="mb-[12px]">
            <Box className={`px-[10px] pt-[10px] pb-[32px] bg-[#111430] rounded-[12px]`}>
                <Box className="flex mb-[30px]">
                    <Box className="w-[57px] h-[57px] bg-cover" style={{backgroundImage: `url(${item.img})`}} />
                    <CollectionNameText className="ml-[15px] my-auto break-all">{item.name}</CollectionNameText>
                    <CollectionButton className="ml-auto my-auto">Repay</CollectionButton>
                </Box>
                <Box className="px-[64px]">
                    <Box className="flex justify-center mb-[30px]">
                        <Box className="mr-[54px]">
                            <CollectionTitleText className="mb-[4px]">Borrowed</CollectionTitleText>
                            <Box className="flex">
                                <CollectionItemText className="my-auto break-all">&nbsp;{item.borrowed}</CollectionItemText>
                                <img className="my-auto h-[1em]" src="/images/cash.png" alt="Cash" />
                            </Box>
                        </Box>
                        <Box>
                            <CollectionTitleText className="mb-[4px]">Repay</CollectionTitleText>
                            <Box className="flex">
                                <CollectionItemText className="my-auto break-all !text-[#38D39C]">&nbsp;{item.repay}</CollectionItemText>
                                <img className="my-auto h-[1em]" src="/images/cash.png" alt="Cash" />
                            </Box>
                        </Box>
                    </Box>
                    <CollectionDurationText className="text-center">3 Days and 4 Hours Left</CollectionDurationText>
                    <Box className="mt-[4px] h-[18px] rounded-[10px] bg-[#191E46]">
                        <Box className="rounded-[20px] w-[60%] h-full" sx={{background: "linear-gradient(0deg, #A8B5E0, #A8B5E0), linear-gradient(0deg, #A8B5E0, #A8B5E0), #A8B5E0;"}} />
                    </Box>
                </Box>
            </Box>
        </Box>
    }
}

function OfferItem({item}) {
    const isDesktop = useMediaQuery('(min-width:1024px)');

    if (isDesktop) {
        return <Box className="mb-[16px]">
            <Box className={`px-[26px] py-[18px] bg-[#111430] rounded-[12px] grid gap-[20px] 2xl:gap-[40px]`} gridTemplateColumns={'106px 2fr 1fr 1fr 1fr 1fr auto'}>
                <Box className="w-[106px] h-[106px] bg-cover" style={{backgroundImage: `url(${item.img})`}} />
                <CollectionNameText className="my-auto break-all">{item.name}</CollectionNameText>
                <Box className="flex">
                    <img className="my-auto h-[1em]" src="/images/cash.png" alt="Cash" />
                    <CollectionItemText className="my-auto break-all">&nbsp;{item.offer}</CollectionItemText>
                </Box>
                <Box className="flex">
                    <img className="my-auto h-[1em]" src="/images/cash.png" alt="Cash" />
                    <CollectionItemText className="my-auto break-all">&nbsp;{item.interest}</CollectionItemText>
                </Box>
                <CollectionItemText className="my-auto break-all !text-[#38D39C]">{item.APY} %</CollectionItemText>
                {
                    item.loanToken ?
                    <LoanBadge className="p-[2px]">Loan Token</LoanBadge>
                    : <WaitingBadge className="p-[2px]">Waiting for borrowers</WaitingBadge>
                }
                {
                    item.loanToken ?
                    <Box className="my-auto w-[116px] 2xl:w-[174px]">
                        <CollectionDurationText className="text-center">3 Days and 4 Hours Left</CollectionDurationText>
                        <Box className="mt-[4px] h-[18px] rounded-[10px] bg-[#191E46]">
                            <Box className="rounded-[20px] w-[60%] h-full" sx={{background: "linear-gradient(0deg, #A8B5E0, #A8B5E0), linear-gradient(0deg, #A8B5E0, #A8B5E0), #A8B5E0;"}} />
                        </Box>
                    </Box>
                    : <CollectionButton className="my-auto">Revoke</CollectionButton>
                }
                
            </Box>
        </Box>
    }
    else {
        return <Box className="mb-[12px]">
            <Box className={`px-[10px] pt-[10px] pb-[32px] bg-[#111430] rounded-[12px]`}>
                <Box className="flex mb-[30px]">
                    <Box className="w-[57px] h-[57px] bg-cover" style={{backgroundImage: `url(${item.img})`}} />
                    <CollectionNameText className="ml-[15px] my-auto break-all mr-auto">{item.name}</CollectionNameText>
                    {
                        item.loanToken ? "" :
                        <CollectionButton className="my-auto">Revoke</CollectionButton>
                    }
                </Box>
                <Box className="grid grid-cols-3 gap-[4px] px-[32px]">
                    <CollectionTitleText>Your Offer</CollectionTitleText>
                    <CollectionTitleText>Interest</CollectionTitleText>
                    <CollectionTitleText>APY</CollectionTitleText>
                    <Box className="flex">
                        <CollectionItemText className="my-auto break-all">{item.offer}&nbsp;</CollectionItemText>
                        <img className="my-auto h-[1em]" src="/images/cash.png" alt="Cash" />
                    </Box>
                    <Box className="flex">
                        <CollectionItemText className="my-auto break-all">{item.interest}&nbsp;</CollectionItemText>
                        <img className="my-auto h-[1em]" src="/images/cash.png" alt="Cash" />
                    </Box>
                    <CollectionItemText className="my-auto break-all !text-[#38D39C]">{item.APY} %</CollectionItemText>
                </Box>
                <CollectionTitleText className="mt-[30px] mb-[12px] text-center">Status</CollectionTitleText>
                <Box className="flex justify-center">
                    <Box className="w-[203px]">
                    {
                        item.loanToken ?
                        <Box>
                            <LoanBadge className="p-[8px]">Loan Token</LoanBadge>
                            <CollectionDurationText className="text-center mt-[20px]">3 Days and 4 Hours Left</CollectionDurationText>
                            <Box className="mt-[4px] h-[18px] rounded-[10px] bg-[#191E46]">
                                <Box className="rounded-[20px] w-[60%] h-full" sx={{background: "linear-gradient(0deg, #A8B5E0, #A8B5E0), linear-gradient(0deg, #A8B5E0, #A8B5E0), #A8B5E0;"}} />
                            </Box>
                        </Box>
                        : <WaitingBadge className="p-[8px]">Waiting for borrowers</WaitingBadge>
                    }
                    </Box>
                </Box>
            </Box>
        </Box>
    }
}

export default function Profile() {
    const [loan, setLoan] = useState(true);
    const isDesktop = useMediaQuery('(min-width:1024px)');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const renderLoan = () => {
        return <>
            {
                isDesktop ?
                <Box className="hidden lg:grid px-[26px] gap-[20px] 2xl:gap-[60px]" gridTemplateColumns={'106px 2fr 1fr 3fr 1fr auto'}>
                    <Box />
                    <Box />
                    <CollectionItemText className="my-auto break-all text-center">Borrowed</CollectionItemText>
                    <CollectionItemText className="my-auto break-all text-center">Duration</CollectionItemText>
                    <CollectionItemText className="my-auto break-all text-center">Repay</CollectionItemText>
                    <CollectionButton className="invisible">Repay</CollectionButton>
                </Box>
                :
                <ShareItemHeader>
                    Collections
                </ShareItemHeader>
            }
            <Box className="mb-[26px]" />
            {
                loanItems.map((item, i) => {
                    return <LoanItem item={item} key={i} />
                })
            }
        </>
    }

    const renderOffer = () => {
        return <>
            {
                isDesktop ?
                <Box className="hidden lg:grid px-[26px] gap-[20px] 2xl:gap-[40px]" gridTemplateColumns={'106px 2fr 1fr 1fr 1fr 1fr auto'}>
                    <Box />
                    <Box />
                    <CollectionItemText className="my-auto break-all">Offer</CollectionItemText>
                    <CollectionItemText className="my-auto break-all">Interest</CollectionItemText>
                    <CollectionItemText className="my-auto break-all">APY</CollectionItemText>
                    <CollectionItemText className="my-auto break-all">Status</CollectionItemText>
                    <CollectionButton className="invisible">Revoke</CollectionButton>
                </Box>
                :
                <ShareItemHeader>
                    Collections
                </ShareItemHeader>
            }
            <Box className="mb-[26px]" />
            {
                offerItems.map((item, i) => {
                    return <OfferItem item={item} key={i} />
                })
            }
        </>
    }

    return <Container>
        <Box className="mt-[30px] mx-[20px] lg:mt-[120px] lg:mx-[120px] xl:mx-[240px] 2xl:mx-[360px]">
            <LandingHeaderText className="mb-[10px]">
                Profile
            </LandingHeaderText>
            <LandingCaptionText className="mb-[40px] lg:mb-[108px]">
                Your profile is where you can preview and manage your loans.
            </LandingCaptionText>
            <Box className="flex mb-[32px]">
                <LoanTab className={`${loan ? "border-[1px]" : ""}`} onClick={() => setLoan(true)}>Loans</LoanTab>
                <OfferTab className={`${loan ? "" : "border-[1px]"}`} onClick={() => setLoan(false)}>Offers</OfferTab>
            </Box>
            {
                loan ? renderLoan() : renderOffer()
            }
        </Box>
    </Container>;
}