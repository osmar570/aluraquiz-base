/* eslint-disable linebreak-style */
import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Widget from '../Widget';
import animation from '../../animations/lf30_editor_3hglxcko.json';

export default function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        <Player autoplay loop src={animation} style={{ height: '300px', width: '300px' }}>
          <Controls visible={false} />
        </Player>
      </Widget.Content>
    </Widget>
  );
}
