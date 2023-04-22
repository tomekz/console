import React, { FC } from 'react';
import styled from 'styled-components';

import Button from '../button/Button';

import { Container } from './InstallationButtons.styled';

export interface InstallationButtonsProps {
  showBackButton?: boolean;
  onBackButtonClick?: () => void;
  onNextButtonClick?: () => void;
  nextButtonText?: string;
  nextButtonDisabled?: boolean;
}

const InstallationButtons: FC<InstallationButtonsProps> = ({
  showBackButton,
  onBackButtonClick,
  onNextButtonClick,
  nextButtonText = 'Next',
  nextButtonDisabled,
  ...rest
}) => (
  <Container {...rest}>
    {showBackButton && (
      <Button variant="outlined" color="primary" onClick={onBackButtonClick}>
        Back
      </Button>
    )}

    <Button
      variant="contained"
      color="primary"
      onClick={onNextButtonClick}
      id="next"
      disabled={nextButtonDisabled}
    >
      {nextButtonText}
    </Button>
  </Container>
);

export default styled(InstallationButtons)``;
