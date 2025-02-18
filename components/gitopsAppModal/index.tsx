import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import { Control } from 'react-hook-form';

import Modal from '../modal';
import Button from '../button';
import Typography from '../typography';
import ControlledPassword from '../controlledFields/Password';
import { GitOpsCatalogApp } from '../../types/gitOpsCatalog';
import { BISCAY, SALTBOX_BLUE } from '../../constants/colors';

import { Container, Content, Close, Footer, Header } from './gitopsAppModal.styled';

export interface GitopsAppModalProps extends GitOpsCatalogApp {
  control: Control;
  isOpen: boolean;
  isValid: boolean;
  closeModal: () => void;
  onSubmit: (app: GitOpsCatalogApp) => void;
}

const GitopsAppModal: FunctionComponent<GitopsAppModalProps> = ({
  control,
  closeModal,
  isOpen,
  isValid,
  name,
  image_url,
  secret_keys,
  onSubmit,
  ...rest
}) => {
  const handleSubmit = () => {
    onSubmit({ name, image_url, secret_keys, ...rest });
  };

  return (
    <Modal isOpen={isOpen} padding={0}>
      <Container>
        <Header>
          <Image alt={name} src={image_url} width={30} height={30} />
          <Typography variant="h6" color={BISCAY}>
            {name}
          </Typography>
          <Close onClick={closeModal} htmlColor={SALTBOX_BLUE} fontSize="medium" />
        </Header>
        <Content>
          {secret_keys &&
            secret_keys.map(({ label, name }) => (
              <ControlledPassword
                key={label}
                control={control}
                name={name}
                label={label}
                rules={{
                  required: true,
                }}
                required
              />
            ))}
        </Content>
        <Footer>
          <Button variant="text" color="text" onClick={closeModal}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" disabled={!isValid} onClick={handleSubmit}>
            Add
          </Button>
        </Footer>
      </Container>
    </Modal>
  );
};

export default GitopsAppModal;
