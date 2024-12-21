import React, { useEffect } from 'react';
import styled from 'styled-components';

interface Props {
    title: string;
    children: React.ReactNode;
}

const MainDiv = styled.div`
    display: flex;
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
            <main style={{ overflowY: "scroll" }}>
                <MainDiv>
                    {children}
                </MainDiv>
            </main>
        </>
    )
}