import React from 'react';
import { UnityPlayer } from '../unity/UnityPlayer';

export function Portafolio() {
    return (
        <>
            <UnityPlayer projectName="rabbit" isVisible />
            <UnityPlayer projectName="journey" />
        </>
    );
}

