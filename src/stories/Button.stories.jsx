import React from 'react';

import { Button } from '../lib';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
};
const BUTTON_VARIANT = [ 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link', ];

const VariantsTemplate = (args) => {
  return BUTTON_VARIANT.map((variant) => (
    <React.Fragment key={ variant }>
      <Button label={ variant } variant={ variant } { ...args } /> &nbsp; &nbsp;
    </React.Fragment>
  ))
};

export const Variants = VariantsTemplate.bind({});

const SizesTemplate = (args) => {
  return (
    <div style={ { display: 'flex', flexDirection: 'row', justifyItems: "space-evenly" } }>
      {
        BUTTON_VARIANT.map((variant) => (
          <div
            key={ variant }
            style={ {
              display: 'flex',
              flexDirection: 'column',
              justifyItems: "space-evenly",
              margin: 10,
              height: 150
            } }
          >
            <Button variant={ variant } label={ `Small ${ variant }` } size="sm" { ...args } />
            <br />
            <Button variant={ variant } label={ `Large ${ variant }` } size="lg" { ...args } />
          </div>)
        )
      }
    </div>
  )

};
export const Sizes = SizesTemplate.bind({});
export const DisableState = VariantsTemplate.bind({});
DisableState.args = {
  disabled: true,
};

