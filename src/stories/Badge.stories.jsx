import React from 'react';
import { Badge, Button } from "../lib";
import { BADGE_VARIANTS } from "./metaData";

export default {
  title: 'Components/Badges',
  component: Badge,
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
};


const VariantsTemplate = (args) => {
  return BADGE_VARIANTS.map((variant) => (
    <React.Fragment key={ variant }>
      <Badge content={ variant } variant={ variant } { ...args } /> &nbsp; &nbsp;
    </React.Fragment>
  ))
}
export const Variants = VariantsTemplate.bind({});

const RoundedTemplate = (args) => {
  return BADGE_VARIANTS.map((variant) => (
    <React.Fragment key={ variant }>
      <Badge content={ variant } variant={ variant } { ...args } /> &nbsp; &nbsp;
    </React.Fragment>
  ))
}

export const Rounded = RoundedTemplate.bind({});
Rounded.args = {
  rounded: true
}

const TopPlacementTemplate = (args) => {
  return (
    <div>
      <div>
        {
          BADGE_VARIANTS.map((variant) => (
              <React.Fragment key={ variant }>
                <Button variant="primary">
                  Inbox
                  <Badge content={Math.floor(Math.random() * 10) + 1} variant={ variant } { ...args } />
                </Button> &nbsp; &nbsp;
              </React.Fragment>
            )
          )
        }
      </div>
      <br />
      <div>
        {
          BADGE_VARIANTS.map((variant) => (
              <React.Fragment key={ variant }>
                <Button variant="primary">
                  Status
                  <Badge variant={ variant } { ...args } />
                </Button> &nbsp; &nbsp;
              </React.Fragment>
            )
          )
        }
      </div>
    </div>
  )
}
export const TopPlacement = TopPlacementTemplate.bind({});
TopPlacement.args = {
  rounded: true,
  topPlacement: true
}