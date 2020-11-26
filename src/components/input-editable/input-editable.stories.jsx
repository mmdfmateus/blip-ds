import React from 'react';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import readme from './readme.md';

export default {
  title: 'Input Editable',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};

const inputStyle = {
  width: '312px',
};

const typeOptions = {
  Text: 'text',
  Password: 'password',
  Number: 'number',
  Email: 'email',
};

export const defaultInputEditable = () => (
  <div style={inputStyle}>
    <bds-input-editable
      type={select('type', typeOptions)}
      input-name={text('input name', '')}
      value={text('value', 'Storybook')}
      minlength={number('minlength', null)}
      minlengthErrorMessage={text('minlength-error-message', '')}
      required-error-message={text('required-error-message', '')}
      maxlength={number('maxlength', null)}
      error-message={text('error-message', '')}
      danger={boolean('danger', false)}
    ></bds-input-editable>
  </div>
);