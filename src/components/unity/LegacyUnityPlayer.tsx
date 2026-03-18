import React, { useEffect, useState } from 'react';
import './unityPlayer.css';
import { AppLoader } from '../loader/AppLoader';

declare global {
  interface Window {
    UnityLoader: any;
  }
}

type ILegacyUnityPlayer = {
  projectName: string;
};

export const LegacyUnityPlayer: React.FC<ILegacyUnityPlayer> = ({ projectName }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const containerId = `unity-container-${projectName.replace(/[^a-zA-Z0-9]/g, '')}`;

  useEffect(() => {
    let unityInstance: any = null;

    const script = document.createElement("script");
    script.src = `${projectName}/UnityLoader.js`;
    script.async = true;

    script.onload = () => {
      if (window.UnityLoader) {
        unityInstance = window.UnityLoader.instantiate(
          containerId,
          `${projectName}/web.json`,
          {
            onProgress: (instance: any, progress: number) => {
              if (progress >= 1) {
                setIsLoaded(true);
              }
            }
          }
        );
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      if (unityInstance && unityInstance.Quit) {
        unityInstance.Quit();
      }
    };
  }, [projectName, containerId]);

  return (
    <div 
      className="unity-container" 
      style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}
    >
      
      {!isLoaded && (
        <AppLoader/>
      )}

      <div 
        id={containerId} 
        style={{ width: "100%", height: "100%" }}
      ></div>
      
    </div>
  );
};
