import React from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";
import './unityPlayer.css';
import { AppLoader } from '../loader/AppLoader';

type IUnityPlayer = {
  projectName: string;
}

export const UnityPlayer: React.FC<IUnityPlayer> = ({ projectName }) => {
  const { unityProvider, isLoaded } = useUnityContext({
    loaderUrl: `${projectName}/WebBuild.loader.js`,
    dataUrl: `${projectName}/WebBuild.data`,
    frameworkUrl: `${projectName}/WebBuild.framework.js`,
    codeUrl: `${projectName}/WebBuild.wasm`,
  });

  return (
    <div className="unity-container">
      {!isLoaded && (
        <AppLoader/>
      )}
      <Unity unityProvider={unityProvider} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};