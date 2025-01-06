import dynamic from 'next/dynamic';
import { useEffect } from 'react';
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

const Toaster = dynamic(import("react-hot-toast").then((mod) => mod.Toaster));

export default ({ title, children }: Props) => {

    useEffect(() => {
        document.title = `${title} | SwiftlyS2`;
    }, [title])

    return (
        <>
            <main id={"mainDiv"} className='bg-white dark:bg-background' style={{ overflowY: "scroll" }}>
                <MainDiv>
                    {children}
                </MainDiv>
            </main>
            <Toaster position={'bottom-right'} reverseOrder={true} toastOptions={{ duration: 2500 }} />
        </>
    )
}