
import { Box } from "@mui/material"

export default function Sidebar() {
    return <Box className="fixed top-[622px] right-[31px]">
        <img src="/icons/twitter.png" alt="twitter" className="mb-[15px] cursor-pointer" />
        <img src="/icons/discord.png" alt="twitter" className="mb-[15px] cursor-pointer" />
        <img src="/icons/telegram.png" alt="twitter" className="cursor-pointer" />
    </Box>
}