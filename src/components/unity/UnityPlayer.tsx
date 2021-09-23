import React from 'react';
import Unity, { UnityContent } from "react-unity-webgl";

type IUnityPlayerState = {
    unityContent: any;
  }
  
type IUnityPlayer = {
    projectName: String;
    isVisible?: boolean;
}

export class UnityPlayer extends React.PureComponent<IUnityPlayer, IUnityPlayerState> {

  constructor(props: IUnityPlayer) {
      super(props);
      const { projectName } = this.props;
      this.state = {
        unityContent: new UnityContent(
          projectName + "/web.json",
          projectName + "/UnityLoader.js"
        ), 
      }
      console.log(projectName + "/web.json");
  }

  render() {
    const { unityContent } = this.state;
    const { isVisible } = this.props;
    return (
      <>
        { isVisible && <Unity unityContent={unityContent} /> }
      </>
    );
  }
}

