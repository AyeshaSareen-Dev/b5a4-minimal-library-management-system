'use client'
import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

interface Props {
    children: React.ReactNode
}

function ScrollToTopProvider({children}: Props) {
    const {pathname} = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])

    return (
        <>{children}</>
    );
}

export default ScrollToTopProvider;