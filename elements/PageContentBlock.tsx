import http from '@/lib/http';
import { store } from '@/modules/state';
import { APIResponse } from '@/modules/types/APIResponse';
import { User } from '@prisma/client';
import { hasCookie } from 'cookies-next';
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

    useEffect(() => {
        if(hasCookie("session_token")) {
            http.get("/api/account").then((response) => {
                const rsp = response.data as APIResponse<User>
                if(rsp.status == 200) {
                    store.getActions().user.setUserData(rsp.message)
                }
            }).catch(console.error)
        }
    }, [])

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