import React from 'react';
import { UnityPlayer } from '../unity/UnityPlayer';

type IPortafolio = {
    activateTab?: (tab: String) => void;
}

export function Portafolio(props: IPortafolio) {
    if (props.activateTab) {
        props.activateTab('portafolio');
    }

    return (
        <>
            
            <UnityPlayer projectName="rabbit" isVisible />
            <UnityPlayer projectName="journey" />
        </>
    );
}

