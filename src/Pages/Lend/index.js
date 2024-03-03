
import { useState, useEffect } from "react";

import { Box, useMediaQuery } from "@mui/material";

import { CollectionNameText, CollectionItemText, LandingCaptionText, LandingHeaderText, ShareItemHeader, CollectionButton, CollectionColorButton, CollectionCashText, MUNFixedInput, AmountButton, CollectionTitleText } from "../../Components";
import Container from "../Container";

const items = [
    {img: "/images/mint/Token.png", name: "Essence", poolSize: 242, bestOffer: 1.1, APY: 300, Duration: 21},
    {img: "/images/mint/Token.png", name: "BonkZ", poolSize: 1123, bestOffer: 8.6, APY: 270, Duration: 14},
]

function LendItem({item}) {
    const isDesktop = useMediaQuery('(min-width:1024px)');
    const [open, setOpen] = useState(false);
    const [amount, setAmount] = useState(5);
    const classes = open ? "rounded-t-[12px]" : "rounded-[12px]";

    useEffect(() => {
        if (amount === "")
            setAmount(0)
        else
            setAmount(parseInt(amount));
    }, [amount])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const handlePlus = () => {
        setAmount(parseInt(amount) + 1);
    }

    const handleMinus = () => {
        const intAmount = parseInt(amount);
        setAmount(intAmount > 0 ? intAmount - 1 : 0);
    }

    if (isDesktop) {
        return <Box className="mb-[16px]">
            <Box className={`px-[26px] py-[18px] bg-[#111430] ${classes} grid gap-[20px] 2xl:gap-[60px]`} gridTemplateColumns={'auto 2fr 1fr 1fr 1fr 1fr auto'}>
                <Box className="w-[106px] h-[106px] bg-cover" style={{backgroundImage: `url(${item.img})`}} />
                <CollectionNameText className="my-auto break-all">{item.name}</CollectionNameText>
                <CollectionItemText className="my-auto break-all">{item.poolSize} SOL</CollectionItemText>
                <CollectionItemText className="my-auto break-all !text-[#FFBE5C]">{item.bestOffer} SOL</CollectionItemText>
                <CollectionItemText className="my-auto break-all">{item.APY}%</CollectionItemText>
                <CollectionItemText className="my-auto break-all">{item.Duration} Days</CollectionItemText>
                <CollectionButton className="my-auto" onClick={() => setOpen(!open)}>Lend</CollectionButton>
            </Box>
            {(open && 
            <Box className="py-[36px] pl-[82px] pr-[28px] bg-[#1B1E3D] rounded-b-[12px] grid gap-x-[20px] 2xl:gap-x-[60px] gap-y-[14px]" gridTemplateColumns={'auto 2fr 1fr auto'}>
                <Box className="flex my-auto">
                    <CollectionNameText>Floor Price -&nbsp;</CollectionNameText>
                    <CollectionCashText>1.9</CollectionCashText>
                    <img className="ml-[10px] my-auto h-[1em]" src="/images/cash.png" alt="Cash" />
                </Box>
                <Box className="grid grid-cols-2">
                    <CollectionItemText className="my-auto">Your loan offer</CollectionItemText>
                    <Box className="flex bg-[#111430] rounded-[6px] p-[10px]">
                        <img className="mr-[14px] my-auto h-[1em]" src="/images/cash.png" alt="Cash" />
                        <CollectionItemText className="my-auto">1</CollectionItemText>
                    </Box>
                </Box>
                <Box className="grid grid-cols-2">
                    <CollectionItemText className="my-auto">Total</CollectionItemText>
                    <Box className="flex">
                        <img className="mr-[10px] my-auto h-[1em]" src="/images/cash.png" alt="Cash" />
                        <CollectionCashText className="my-auto">5</CollectionCashText>
                    </Box>
                </Box>
                <Box />
                <Box />
                <Box className="grid grid-cols-2">
                    <CollectionItemText className="my-auto">Number of offers</CollectionItemText>
                    <Box className="flex">
                        <MUNFixedInput value={amount} onChange={(e) => setAmount(e.target.value)} />
                        <AmountButton className="ml-[11px] my-auto" onClick={handleMinus}>-</AmountButton>
                        <AmountButton className="ml-[11px] my-auto" onClick={handlePlus}>+</AmountButton>
                    </Box>
                </Box>
                <Box className="grid grid-cols-2">
                    <CollectionItemText className="my-auto">Interest</CollectionItemText>
                    <Box className="flex">
                        <img className="mr-[10px] my-auto h-[1em]" src="/images/cash.png" alt="Cash" />
                        <CollectionCashText className="my-auto">0.72</CollectionCashText>
                    </Box>
                </Box>
                <Box className="my-auto">
                    <CollectionColorButton>Create Offer</CollectionColorButton>
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
                    <CollectionButton className="ml-auto my-auto" onClick={() => setOpen(!open)}>Lend</CollectionButton>
                </Box>
                <Box className="grid grid-cols-4 gap-[4px] px-[8px]">
                    <CollectionTitleText>Pool Size</CollectionTitleText>
                    <CollectionTitleText>Duration</CollectionTitleText>
                    <CollectionTitleText>APY</CollectionTitleText>
                    <CollectionTitleText>Best Offer</CollectionTitleText>
                    <CollectionItemText className="break-all">{item.poolSize} SOL</CollectionItemText>
                    <CollectionItemText className="break-all">{item.Duration} Days</CollectionItemText>
                    <CollectionItemText className="break-all">{item.APY}%</CollectionItemText>
                    <CollectionItemText className="break-all !text-[#FFBE5C]">{item.bestOffer} SOL</CollectionItemText>
                </Box>
            </Box>
            {(open && 
            <Box className="pt-[20px] pb-[32px] px-[14px] bg-[#1B1E3D] rounded-b-[12px]">
                <Box className="flex mb-[27px]">
                    <CollectionNameText>Floor Price -&nbsp;</CollectionNameText>
                    <CollectionCashText>1.9</CollectionCashText>
                    <img className="ml-[10px] my-auto h-[1em]" src="/images/cash.png" alt="Cash" />
                </Box>
                <Box className="px-[10px] grid grid-cols-2 gap-x-[36px]">
                    <CollectionItemText className="mb-[8px]">Your loan offer</CollectionItemText>
                    <CollectionItemText className="mb-[8px]">Number of offers</CollectionItemText>
                    <Box className="flex mb-[28px] bg-[#111430] rounded-[6px] p-[10px]">
                        <img className="mr-[14px] my-auto h-[1em]" src="/images/cash.png" alt="Cash" />
                        <CollectionItemText className="my-auto">1</CollectionItemText>
                    </Box>
                    <Box className="flex mb-[28px]">
                        <MUNFixedInput value={amount} onChange={(e) => setAmount(e.target.value)} />
                        <AmountButton className="ml-[11px] my-auto" onClick={handleMinus}>-</AmountButton>
                        <AmountButton className="ml-[11px] my-auto" onClick={handlePlus}>+</AmountButton>
                    </Box>
                    <Box className="flex">
                        <CollectionItemText className="my-auto">Total</CollectionItemText>
                        <CollectionCashText className="ml-auto my-auto">5</CollectionCashText>
                        <img className="ml-[10px] my-auto h-[1em]" src="/images/cash.png" alt="Cash" />
                    </Box>
                    <Box className="flex">
                        <CollectionItemText className="my-auto">Interest</CollectionItemText>
                        <CollectionCashText className="ml-auto my-auto">0.72</CollectionCashText>
                        <img className="ml-[10px] my-auto h-[1em]" src="/images/cash.png" alt="Cash" />
                    </Box>
                </Box>
                <Box className="mt-[32px] flex justify-center">
                    <CollectionColorButton>Create Offer</CollectionColorButton>
                </Box>
            </Box>
            )}
        </Box>
    }
}

export default function Lend() {
    return <Container>
        <Box className="mt-[30px] mx-[20px] lg:mt-[120px] lg:mx-[120px] xl:mx-[240px] 2xl:mx-[360px]">
            <LandingHeaderText className="mb-[10px]">
                Lend SOL
            </LandingHeaderText>
            <LandingCaptionText className="mb-[108px]">
                Make lend offers against NFT’s and get interest. <br/>
                After making the lend offer, users will be able to loan SOL from <br/>
                you against their NFT, if they fail to pay on time, you will receive <br/>
                ownership of the NFT they put as collateral for the loan.
            </LandingCaptionText>
            <ShareItemHeader>
                Collections
            </ShareItemHeader>
            <Box className="hidden lg:grid px-[26px] gap-[20px] 2xl:gap-[60px]" gridTemplateColumns={'106px 2fr 1fr 1fr 1fr 1fr auto'}>
                <Box />
                <Box />
                <CollectionItemText className="my-auto break-all">Pool Size</CollectionItemText>
                <CollectionItemText className="my-auto break-all">Best Offer</CollectionItemText>
                <CollectionItemText className="my-auto break-all">APY</CollectionItemText>
                <CollectionItemText className="my-auto break-all">Duration</CollectionItemText>
                <CollectionButton className="invisible">Lend</CollectionButton>
            </Box>
            <Box className="mb-[26px]" />
            {
                items.map((item, i) => {
                    return <LendItem item={item} key={i} />
                })
            }
        </Box>
    </Container>;
}