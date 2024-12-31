"use client";

import BuilderPageBody from '@/components/builder/Body'
import { BuilderProvider } from '@/context/BuilderContext';
import Head from 'next/head'

const builder = () => {
    return (
        <>
            <Head>
                <title>Github Actions Builder</title>
                <meta
                    name="description"
                    content="Build your GitHub Actions in a Visual Builder"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <BuilderProvider>
                <BuilderPageBody />
            </BuilderProvider>
        </>
    )
}

export default builder