
import { ButtonText } from "./MUNText";

import styled from "styled-components";

export const ColorButton = styled(ButtonText)`
    background: #5C84FF;
    border-radius: 40px;
    padding: 13px 20px;
    cursor: pointer;
`;

export const BorderButton = styled(ButtonText)`
    border: 1px solid #5C6AE1;
    border-radius: 40px;
    padding: 13px 20px;
    cursor: pointer;
`;

export function ShareButton(props) {
    return <ButtonText sx={{
        background: "#100B27",
        border: "1px solid #5C6AE1",
        borderRadius: "40px",
        padding: "13px 20px",
        cursor: "pointer",
        width: "fit-content",
        display: "flex",
    }}
    {...props}>
        {props.children}
        <span className="mr-[13px]" />
        <img className="h-[1em]" src="/images/home/Vector.png" alt="Vector" />
    </ButtonText>
}

export const AmountButton = styled(ButtonText)`
    background: #111430;
    border-radius: 96px;
    padding: 8px;
    cursor: pointer;

    color: #5C84FF;
    width: 30px;
    height: 30px;
    font-size: 20px;
    text-align: center;

    @media (max-width: 1535px) {
        font-size: 14px;
        width: 25px;
        height: 25px;
    }
`;

export const CollectionButton = styled(BorderButton)`
    font-size: 16px;
    width: 174px;
    text-align: center;

    @media (max-width: 1535px) {
        font-size: 10px;
        width: 116px;
    }
`;

export const CollectionColorButton = styled(ColorButton)`
    font-size: 16px;
    width: 174px;
    text-align: center;

    @media (max-width: 1535px) {
        font-size: 10px;
        width: 116px;
    }
`;