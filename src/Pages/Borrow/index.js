
import { useState, useEffect } from "react";

import { Box, useMediaQuery } from "@mui/material";

import { CollectionNameText, CollectionItemText, LandingCaptionText, LandingHeaderText, ShareItemHeader, CollectionButton, CollectionColorButton, CollectionCashText, MintPriceValue, CollectionTitleText } from "../../Components";
import Container from "../Container";

const items = [
    {img: "/images/mint/Token.png", name: "Essence", poolSize: 242, bestOffer: 1.1, interest: 0.09, Duration: 21},
    {img: "/images/mint/Token.png", name: "BonkZ", poolSize: 1123, bestOffer: 8.6, interest: 0.41, Duration: 14},
]

function BorrowItem({item}) {
    const isDesktop = useMediaQuery('(min-width:1024px)');
    const [open, setOpen] = useState(false);
    const classes = open ? "rounded-t-[12px]" : "rounded-[12px]";

    if (isDesktop) {
        return <Box className="mb-[16px]">
            <Box className={`px-[26px] py-[18px] bg-[#111430] ${classes} grid gap-[20px] 2xl:gap-[60px]`} gridTemplateColumns={'auto 2fr 1fr 1fr 1fr 1fr auto'}>
                <Box className="w-[106px] h-[106px] bg-cover" style={{backgroundImage: `url(${item.img})`}} />
                <CollectionNameText className="my-auto break-all">{item.name}</CollectionNameText>
                <Box className="flex">
                    <CollectionItemText className="my-auto break-all">{item.poolSize}&nbsp;</CollectionItemText>
                    <img className="my-auto h-[1em]" src="/images/cash.png" alt="Cash" />
                </Box>
                <Box className="flex">
                    <CollectionItemText className="my-auto break-all !text-[#FFBE5C]">{item.bestOffer}&nbsp;</CollectionItemText>
                    <img className="my-auto h-[1em]" src="/images/cash.png" alt="Cash" />
                </Box>
                <Box className="flex">
                    <CollectionItemText className="my-auto break-all">{item.interest}&nbsp;</CollectionItemText>
                    <img className="my-auto h-[1em]" src="/images/cash.png" alt="Cash" />
                </Box>
                <CollectionItemText className="my-auto break-all">{item.Duration} Days</CollectionItemText>
                <CollectionButton className="my-auto" onClick={() => setOpen(!open)}>Borrow</CollectionButton>
            </Box>
            {(open && 
            <Box className="pt-[40px] pb-[30px] px-[32px] bg-[#1B1E3D] rounded-b-[12px] grid gap-x-[20px] 2xl:gap-x-[60px]" gridTemplateColumns={'auto 1fr auto auto'}>
                <CollectionItemText>
                    Pick the NFTs you want <br/>
                    to borrow against:
                </CollectionItemText>
                <Box className="overflow-x-hidden">
                    <Box className="grid overflow-x-auto grid-flow-col gap-[15px]">
                        <Box className="w-[106px] h-[106px] bg-cover rounded-[6px]" style={{backgroundImage: `url(${item.img})`, border: "1px solid #5C84FF"}} />
                        <Box className="w-[106px] h-[106px] bg-cover rounded-[6px]" style={{backgroundImage: `url(${item.img})`, border: "1px solid #5C84FF"}} />
                        <Box className="w-[106px] h-[106px] bg-cover rounded-[6px]" style={{backgroundImage: `url(${item.img})`, border: "1px solid #5C84FF"}} />
                        <Box className="w-[106px] h-[106px] bg-cover rounded-[6px]" style={{backgroundImage: `url(${item.img})`, border: "1px solid #5C84FF"}} />
                    </Box>
                </Box>
                <Box className="my-auto">
                    <Box className="flex mb-[16px]">
                        <CollectionNameText className="mr-[36px]">Floor Price -</CollectionNameText>
                        <MintPriceValue>1.9</MintPriceValue>
                        <img className="ml-[10px] my-auto h-[1em]" src="/images/cash.png" alt="Cash" />
                    </Box>
                    <Box className="flex">
                        <CollectionNameText className="mr-auto">Loan Offer -</CollectionNameText>
                        <MintPriceValue className="!text-[#FFBE5C]">1</MintPriceValue>
                        <img className="ml-[10px] my-auto h-[1em]" src="/images/cash.png" alt="Cash" />
                    </Box>
                </Box>
                <Box className="flex flex-col">
                    <Box className="flex">
                        <CollectionItemText className="my-auto mr-[20px]">Total Loan Value</CollectionItemText>
                        <img className="mr-[10px] my-auto h-[1em]" src="/images/cash.png" alt="Cash" />
                        <CollectionCashText className="my-auto">5</CollectionCashText>
                    </Box>
                    <CollectionColorButton className="mt-auto ml-auto">Borrow</CollectionColorButton>
                </Box>
            </Box>
            )}
        </Box>
    }
    else {
        return <Box className="mb-[12px]">
            <Box className={`px-[10px] pt-[10px] pb-[32px] bg-[#111430] ${classes}`}>
                <Box className="flex mb-[30px]">
                    <Box className="w-[57px] h-[57px] bg-cover" style={{backgroundImage: `url(${item.img})`}} />
                    <CollectionNameText className="ml-[15px] my-auto break-all">{item.name}</CollectionNameText>
                    <CollectionButton className="ml-auto my-auto" onClick={() => setOpen(!open)}>Borrow</CollectionButton>
                </Box>
                <Box className="grid grid-cols-4 gap-x-[20px] gap-y-[4px] px-[8px]">
                    <CollectionTitleText>Pool Size</CollectionTitleText>
                    <CollectionTitleText>Duration</CollectionTitleText>
                    <CollectionTitleText>Interest</CollectionTitleText>
                    <CollectionTitleText>Best Offer</CollectionTitleText>
                    <Box className="flex">
                        <CollectionItemText className="my-auto break-all">{item.poolSize}&nbsp;</CollectionItemText>
                        <img className="my-auto h-[1em]" src="/images/cash.png" alt="Cash" />
                    </Box>
                    <CollectionItemText className="my-auto break-all">{item.Duration} Days</CollectionItemText>
                    <Box className="flex">
                        <CollectionItemText className="my-auto break-all">{item.interest}&nbsp;</CollectionItemText>
                        <img className="my-auto h-[1em]" src="/images/cash.png" alt="Cash" />
                    </Box>
                    <Box className="flex">
                        <CollectionItemText className="my-auto break-all !text-[#FFBE5C]">{item.bestOffer}&nbsp;</CollectionItemText>
                        <img className="my-auto h-[1em]" src="/images/cash.png" alt="Cash" />
                    </Box>
                </Box>
            </Box>
            {(open && 
            <Box className="pt-[20px] pb-[24px] px-[14px] bg-[#1B1E3D] rounded-b-[12px]">
                <Box className="grid grid-cols-2 mb-[32px] gap-[24px]">
                    <CollectionItemText>
                        Pick the NFTs you want <br/>
                        to borrow against:
                    </CollectionItemText>
                    <Box>
                        <Box className="flex mb-[10px]">
                            <CollectionNameText className="mr-auto">Floor Price -</CollectionNameText>
                            <MintPriceValue className="my-auto">1.9</MintPriceValue>
                            <img className="ml-[10px] my-auto h-[1em]" src="/images/cash.png" alt="Cash" />
                        </Box>
                        <Box className="flex">
                            <CollectionNameText className="mr-auto">Loan Offer -</CollectionNameText>
                            <MintPriceValue className="my-auto !text-[#FFBE5C]">1</MintPriceValue>
                            <img className="ml-[10px] my-auto h-[1em]" src="/images/cash.png" alt="Cash" />
                        </Box>
                    </Box>
                </Box>
                <Box className="overflow-x-hidden mb-[22px]">
                    <Box className="grid overflow-x-auto grid-flow-col gap-[15px]">
                        <Box className="w-[97px] h-[97px] bg-cover rounded-[6px]" style={{backgroundImage: `url(${item.img})`, border: "1px solid #5C84FF"}} />
                        <Box className="w-[97px] h-[97px] bg-cover rounded-[6px]" style={{backgroundImage: `url(${item.img})`, border: "1px solid #5C84FF"}} />
                        <Box className="w-[97px] h-[97px] bg-cover rounded-[6px]" style={{backgroundImage: `url(${item.img})`, border: "1px solid #5C84FF"}} />
                        <Box className="w-[97px] h-[97px] bg-cover rounded-[6px]" style={{backgroundImage: `url(${item.img})`, border: "1px solid #5C84FF"}} />
                    </Box>
                </Box>
                <Box className="flex justify-center mb-[16px]">
                    <CollectionItemText className="my-auto mr-[20px]">Total Loan Value</CollectionItemText>
                    <img className="mr-[10px] my-auto h-[1em]" src="/images/cash.png" alt="Cash" />
                    <CollectionCashText className="my-auto">5</CollectionCashText>
                </Box>
                <Box className="flex justify-center">
                    <CollectionColorButton>Borrow</CollectionColorButton>
                </Box>
            </Box>
            )}
        </Box>
    }
}

export default function Borrow() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return <Container>
        <Box className="mt-[30px] mx-[20px] lg:mt-[120px] lg:mx-[120px] xl:mx-[240px] 2xl:mx-[360px]">
            <LandingHeaderText className="mb-[10px]">
                Borrow SOL
            </LandingHeaderText>
            <LandingCaptionText className="mb-[108px]">
                Use your Nft's as collateral for short them SOL loans. <br/>
                If you fail to repay your loan, you may lose ownership on the NFT <br/>
                you borrow against.
            </LandingCaptionText>
            <ShareItemHeader>
                Collections
            </ShareItemHeader>
            <Box className="hidden lg:grid px-[26px] gap-[20px] 2xl:gap-[60px]" gridTemplateColumns={'106px 2fr 1fr 1fr 1fr 1fr auto'}>
                <Box />
                <Box />
                <CollectionItemText className="my-auto break-all">Pool Size</CollectionItemText>
                <CollectionItemText className="my-auto break-all">Best Offer</CollectionItemText>
                <CollectionItemText className="my-auto break-all">Interest</CollectionItemText>
                <CollectionItemText className="my-auto break-all">Duration</CollectionItemText>
                <CollectionButton className="invisible">Lend</CollectionButton>
            </Box>
            <Box className="mb-[26px]" />
            {
                items.map((item, i) => {
                    return <BorrowItem item={item} key={i} />
                })
            }
        </Box>
    </Container>;
}