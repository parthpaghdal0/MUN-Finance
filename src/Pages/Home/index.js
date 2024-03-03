
import { useEffect } from "react";

import { Box, useMediaQuery } from "@mui/material";

import { LandingCaptionText, LandingHeaderText, OperateHeaderText, OperateCaptionText, ShareJoinText, ShareHeaderText, ShareCaptionText, BorderButton, ShareItemTitle, ShareItemHeader, ShareItemCaption, ShareButton } from "../../Components";
import Container from "../Container";

function SharedItem(props) {
    return <Box className="h-[270px] lg:w-[431px] lg:h-[340px] p-[32px] flex flex-col" sx={{
        border: "1px solid rgba(132, 106, 204, 0.5)",
        borderRadius: "12px",
        backgroundImage: `url(/images/home/SharedBg.png)`,
        transition: "background .5s, box-shadow .5s",
        "&:hover": {
            backgroundImage: `url(/images/home/SharedBgActive.png)`,
            border: "2px solid #5C6AE1",
            boxShadow: "6px 6px 0px #5C6AE1",
            borderRadius: "8px",
        }
    }}>
        <ShareItemTitle className="pb-[22px]">
            {props.title}
        </ShareItemTitle>
        <ShareItemHeader className="pb-[4px]">
            {props.header}
        </ShareItemHeader>
        <ShareItemCaption>
            {props.caption}
        </ShareItemCaption>
        {props.children}
    </Box>
}

export default function Home() {
    const isDesktop = useMediaQuery('(min-width:1024px)');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const renderJoin = () => {
        return <>
            <ShareJoinText>
                Join Us
            </ShareJoinText>
            <ShareHeaderText className="mb-[6px]">
                Get your <br/>
                MUN Shared
            </ShareHeaderText>
            <ShareCaptionText className="mb-[27px]">
                Will be used as a powerful utility for it’s holders, providing <br/>
                lending option and more tools in the upcoming future, <br/>
                exclusively for our NFT holders
            </ShareCaptionText>
            <BorderButton className="w-fit">
                Get it on MagicEden
            </BorderButton>
        </>
    }

    const renderSharedItems = () => {
        return <>
            <SharedItem title="Mint" header="Free Airdrop" caption="At least 70% of the collection will be air-dropped for FREE for various NFT communities on Solana.">
                <Box className="flex mt-auto mb-[8px]">
                    <ShareButton>Mint now (Soon)</ShareButton>
                </Box>
            </SharedItem>
            <SharedItem title="Token" header="Lend / Borrow" caption="Use our platform to borrow Sol or lend against your MUN & BonkZ NFT.">
                <Box className="flex mt-auto mb-[8px]">
                    <ShareButton className="mr-[14px]">Lend</ShareButton>
                    <ShareButton>Borrow</ShareButton>
                </Box>
            </SharedItem>
            <SharedItem title="Rewards" header="$BONK friendly" caption="Our project will support $BONK by providing an option to lend against Bonkz NFT as well as a burning mechanism which will be deployed in the future." />
            <SharedItem title="Staking" header="Utility" caption="We are actively working on more professional tools that will be offered for free for our NFT holders." />
        </>
    }

    return <Container>
        <Box className="grid grid-cols-1 px-[40px] gap-[12px] lg:grid-cols-2 lg:px-0 lg:gap-[60px]">
            <img className="ml-auto" src="/images/home/MUN.png" alt="MUN" />
            <Box className="flex flex-col justify-center">
                <LandingHeaderText className="pb-[27px] text-center lg:text-left">
                    Building The <br/>
                    Future of NFT <br/>
                    Finance
                </LandingHeaderText>
                <LandingCaptionText className="text-center lg:text-left">
                    Mun finance was founded to <br/>
                    be a pioneer in the NFT <br/>
                    Sphere. Starting with NFT- <br/>
                    backed loans and more <br/>
                    financial services currently in <br/>
                    the works.
                </LandingCaptionText>
            </Box>
        </Box>
        <div className="mb-[40px] lg:mb-[100px]" />
        <Box sx={{background: "linear-gradient(267.58deg, #0B0E27 0%, #2D325B 175.24%);"}}>
            <Box className="py-[24px] lg:py-[100px] bg-no-repeat bg-right bg-contain" style={{backgroundImage: `url(/images/home/SolanaBlur.png)`}}>
                <Box className="flex justify-center lg:mb-[50px]">
                    <OperateHeaderText className="text-right mr-6">
                        We operate on
                    </OperateHeaderText>
                    <img className="my-auto max-w-[40%]" src="/images/home/SolanaText.png" alt="SolanaText" />
                </Box>
                <Box className="grid grid-cols-2 gap-[20px] lg:grid-cols-4 lg:gap-[140px] lg:mx-[20%]">
                    <OperateCaptionText>Low Gas Fees</OperateCaptionText>
                    <OperateCaptionText>Fast Transactions</OperateCaptionText>
                    <OperateCaptionText>Scalable</OperateCaptionText>
                    <OperateCaptionText>Trusted</OperateCaptionText>
                </Box>
            </Box>
        </Box>
        <div className="mb-[67px] lg:mb-[216px]" />
        {
            isDesktop ?
            <Box className="grid grid-cols-2 gap-[120px] 2xl:gap-[180px]">
                <Box className="ml-auto flex flex-col justify-center">
                    {renderJoin()}
                </Box>
                <img src="/images/home/FreeMint.png" alt="MUN" />
            </Box>
            :
            <Box className="px-[26px]">
                <img className="mb-[26px]" src="/images/home/FreeMint.png" alt="MUN" />
                {renderJoin()}
            </Box>
        }
        <div className="mb-[72px] lg:mb-[176px]" />
        {
            isDesktop ?
            <Box className="flex">
                <Box className="mx-auto grid grid-cols-2 gap-[30px]">
                    {renderSharedItems()}
                </Box>
            </Box>
            :
            <Box className="px-[26px] grid grid-cols-1 gap-[22px]">
                {renderSharedItems()}
            </Box>
        }
    </Container>;
}