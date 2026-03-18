import React, { useState } from 'react';
import './externalGamePlayer.css'; 
import { AppLoader } from '../loader/AppLoader';

type IExternalGamePlayer = {
  gameUrl: string; 
}

export const ExternalGamePlayer: React.FC<IExternalGamePlayer> = ({ gameUrl }) => {
    const [isLoaded, setIsLoaded] = useState(false);
  
    return (
      <div className="external-game-container">
        
        {!isLoaded && (
          <AppLoader />
        )}
  
        <iframe
          src={gameUrl}
          title="Itch.io Game Player"
          onLoad={() => setIsLoaded(true)}
          allowFullScreen={true}
          frameBorder="0"
          scrolling="no"
          style={{ 
            width: '100%', 
            height: '100%', 
            opacity: isLoaded ? 1 : 0, 
            transition: 'opacity 0.5s ease-in' 
          }}
        />
        
      </div>
    );
  };