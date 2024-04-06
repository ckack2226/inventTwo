'use client'

import Header from "../components/header"
import React from 'react';
import { useSearchParams } from "next/navigation";

export default function Edit() {
    const searchParams = useSearchParams()

    return (
        <>
            <Header />
            <div>{searchParams.get('product')}</div>
        </>
    );
}
