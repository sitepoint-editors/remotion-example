import {Composition, interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import Title from './Title';
import Hello from './Hello';
import "./demo.css";

const Demo = ({titleText, titleColor}) => {
  const frame = useCurrentFrame();
  const videoConfig = useVideoConfig();

  const totalOpacity = interpolate(
    frame,
    [videoConfig.durationInFrames - 25, videoConfig.durationInFrames - 15],
    [1, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );

  return (
    <div className="main-container">
      <div style={{opacity: totalOpacity}}>
        <Sequence from={0} durationInFrames={videoConfig.durationInFrames / 2}>
          <Hello/>
        </Sequence>
        <Sequence from={35} durationInFrames={Infinity}>
          <Title titleText={titleText} titleColor={titleColor} />
        </Sequence>
      </div>
    </div>
  );
};


export const DemoVideo = () => {
  return (
    <Composition
      id="Demo"
      component={Demo}
      durationInFrames={150}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={{
        titleText: 'This is my first Remotion video',
        titleColor: 'blue',
      }}
    />
  )
}
