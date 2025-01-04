import { useEffect } from 'react';
import Snowfall from 'react-snowfall';
import styled from 'styled-components';

interface Props {
    title: string;
    children: React.ReactNode;
}

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100%;

    @media (orientation: portrait) {
        display: block;
        width: 100%;
    }
`

export default ({ title, children }: Props) => {

    useEffect(() => {
        document.title = title;
    }, [title])

    return (
        <>
            <Snowfall />
            <main id={"mainDiv"} style={{ overflowY: "scroll" }}>
                <MainDiv>
                    {children}
                </MainDiv>
            </main>
        </>
    )
}