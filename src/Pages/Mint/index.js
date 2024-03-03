
import { useState, useEffect } from "react";
import { Box } from "@mui/material";

import { LandingCaptionText, LandingHeaderText, MintPriceText, MintPriceValue, MintTotalValue, ShareItemHeader, MUNInput, AmountButton, ColorButton } from "../../Components";
import Container from "../Container";

export default function Mint() {
    const [amount, setAmount] = useState("5");

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
  
    return <Container>
        <Box className="mt-[30px] mx-[20px] lg:mt-[120px] lg:mx-[120px] xl:mx-[240px] 2xl:mx-[360px]">
            <LandingHeaderText className="mb-[10px]">
                Mint
            </LandingHeaderText>
            <LandingCaptionText>
                Join MUN by getting our NFT! <br/>
                Please make sure you are visiting munfinance.io.
            </LandingCaptionText>
            <Box className="mt-[72px] bg-[#0B0E27] rounded-[12px] py-[50px] text-center">
                <ShareItemHeader>
                    17,448 / 22,222 Minted
                </ShareItemHeader>
                <Box className="mt-[32px] mx-[26px] h-[18px] rounded-[10px] lg:mx-[180px] lg:h-[40px] lg:rounded-[20px] bg-[#191E46]">
                     <Box className="rounded-[20px] w-[60%] h-full" sx={{background: "linear-gradient(0deg, #A8B5E0, #A8B5E0), linear-gradient(0deg, #A8B5E0, #A8B5E0), #A8B5E0;"}} />
                </Box>
                <Box className="mx-[72px] my-[40px] flex justify-center">
                    <img src="/images/mint/Token.png" alt="Token" />
                </Box>
                <Box className="mb-[32px] flex justify-center">
                    <MintPriceText className="my-auto mr-[14px]">Mint Price</MintPriceText>
                    <img className="my-auto h-fit" src="/images/cash.png" alt="Cash" />
                    <MintPriceValue className="ml-[8px]">1</MintPriceValue>
                </Box>
                <Box className="mb-[32px] flex justify-center">
                    <MintPriceText className="my-auto mr-[32px]">Choose Amount</MintPriceText>
                    <MUNInput value={amount} onChange={(e) => setAmount(e.target.value)} />
                    <AmountButton className="ml-[11px] my-auto" onClick={handleMinus}>-</AmountButton>
                    <AmountButton className="ml-[11px] my-auto" onClick={handlePlus}>+</AmountButton>
                </Box>
                <MintTotalValue className="mb-[42px]">
                    Total: <span className="text-[#38D39C]">{amount}</span> SOL
                </MintTotalValue>
                <Box className="flex justify-center">
                    <ColorButton className="w-fit">
                        Mint Now
                    </ColorButton>
                </Box>
            </Box>
        </Box>
    </Container>;
}