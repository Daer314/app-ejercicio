import styled from "styled-components";

export const DayName = styled.h3`
    display: inline-block;
    position: relative;
    color: #220901;

    ::after, ::before {
        content: '';
        position: absolute;
        width: 100px;
        height: 2px;
        background-color: currentColor;
        top: 0.6em;
    }

    ::before {
        left: -110px;
    }

    ::after{
        right: -110px;
    }
`