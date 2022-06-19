import React from 'react';
import { Button } from '../lib';
import { BUTTON_VARIANT } from "./metaData";

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
};

const VariantsTemplate = (args) => {
  return BUTTON_VARIANT.map((variant) => (
    <React.Fragment key={ variant }>
      <Button label={ variant } variant={ variant } { ...args } /> &nbsp; &nbsp;
    </React.Fragment>
  ))
};
export const Variants = VariantsTemplate.bind({});
Variants.parameters = {
  docs: {
    description: {
      story: 'Each serving its own semantic purpose, with a few extras thrown in for more control. Using the Bootstrap styleguide.'
    }
  }
}

export const OutlineButton = VariantsTemplate.bind({});
OutlineButton.args = {
  outline: true,
};
OutlineButton.parameters = {
  docs: {
    description: {
      story: 'In need of a button, but not the hefty background colors they bring? ' +
        'Use the `outline` prop to remove all background colors on any button.'
    }
  }
}

const SizesTemplate = (args) => <><Button { ...args } />  &nbsp; &nbsp;  <Button { ...args } size="lg" /> </>
export const Sizes = SizesTemplate.bind({});
Sizes.args = {
  label: 'Button',
  variant: 'primary',
  size: 'sm',
};
Sizes.parameters = {
  docs: {
    description: {
      story: 'Fancy larger or smaller buttons? use `size` prop for additional sizes.'
    }
  }
}

export const DisableState = VariantsTemplate.bind({});
DisableState.args = {
  disabled: true,
};
DisableState.parameters = {
  docs: {
    description: {
      story: 'Make buttons look inactive by using the `disabled` prop.'
    }
  }
}

const TooltipTemplate = (args) => <Button { ...args } />
export const ShowTooltip = TooltipTemplate.bind({});
ShowTooltip.args = {
  label: 'Button',
  variant: 'primary',
  title: 'Primary button tooltip'
};
ShowTooltip.parameters = {
  docs: {
    description: {
      story: 'Want to show the html tooltip to button? Use `title` prop for additional sizes.'
    }
  }
}
