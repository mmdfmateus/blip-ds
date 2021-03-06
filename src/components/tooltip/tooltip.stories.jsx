import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import readme from './readme.md';

export default {
  title: 'Tooltip',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};

export const Tooltip = () => {
  const positions = [
    'left-center',
    'left-top',
    'left-bottom',
    'top-center',
    'top-left',
    'top-right',
    'right-center',
    'right-top',
    'right-bottom',
    'bottom-center',
    'bottom-right',
    'bottom-left',
  ];
  
  const styles = {
      'margin-left': '80px'
  }
  return (
    <div>
      <bds-tooltip position={select('position', positions)} tooltip-text={text('Texto do tooltip')}>
        <bds-button>Hover me</bds-button>
      </bds-tooltip>
      <bds-tooltip style={styles} position={select('position', positions)} tooltip-text={text('Texto do tooltip')}>
        <bds-icon name="user">Hover me</bds-icon>
      </bds-tooltip>
    </div>
  );
};
