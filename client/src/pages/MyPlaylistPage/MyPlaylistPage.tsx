import React from 'react';
import { AlbumArtComponent, PlaylistContentsComponent } from '../../components';
import { useSpring, animated } from 'react-spring';
import { Content, Divider } from '../PlaylistPage/styles';

export default function MyPlaylistPage() {
  const duration = 200;
  const translateY = 200;
  const transition = useSpring({
    opacity: 1,
    transform: `translateY(0)`,
    from: { opacity: 0, transform: `translateY(${translateY}px)` },
    config: { duration: duration },
  });
  return (
    <>
      <animated.div style={transition}>
        <Content>
          <AlbumArtComponent albumArtSrc="/img/AlbumSample.jpg" />
          <PlaylistContentsComponent
            songs={[
              {
                title: 'Troye Sivan - Lost Boy',
                length: '03:20',
              },
              {
                title: 'Lauv - Steal The Show',
                length: '03:28',
              },
              {
                title: "Charlie Puth - That's Hilarious",
                length: '04:10',
              },
              {
                title: 'SZA - Kill Bill',
                length: '03:50',
              },
              {
                title: 'Charlie Puth - Dangerously',
                length: '03:48',
              },
              {
                title: 'Ed Sherren - Eyes Closed',
                length: '03:21',
              },
            ]}
          />
        </Content>
        <Divider />
      </animated.div>
    </>
  );
}
