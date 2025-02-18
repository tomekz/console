import React, { FunctionComponent } from 'react';
import { ButtonProps } from '@mui/material/Button';

import {
  Container,
  PrimaryButton,
  SecondaryButton,
  ErrorButton,
  InfoButton,
  TextButton,
} from './button.styled';

const BUTTONS_MAP = {
  ['primary']: PrimaryButton,
  ['secondary']: SecondaryButton,
  ['error']: ErrorButton,
  ['info']: InfoButton,
  ['text']: TextButton,
};

export interface IButtonProps extends Omit<ButtonProps, 'key'> {
  color: 'primary' | 'secondary' | 'error' | 'info' | 'text';
}

const Button: FunctionComponent<IButtonProps> = ({ variant, color, disabled, ...rest }) => {
  const StyledButton = BUTTONS_MAP[color] || BUTTONS_MAP['primary'];

  return (
    <Container disabled={disabled}>
      <StyledButton
        variant={variant}
        disabled={disabled}
        {...rest}
        sx={{ textTransform: 'initial', ...rest.sx }}
      />
    </Container>
  );
};

export default Button;
