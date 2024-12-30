"use client";

import BuilderPageBody from '@/components/builder/Body'
import Head from 'next/head'

const builder = () => {
    return (
        <>
            <Head>
                <title>Github Actions Builder</title>
            </Head>
            <BuilderPageBody />
        </>
    )
}

export default builder