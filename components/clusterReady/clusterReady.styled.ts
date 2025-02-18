'use client';
import styled from 'styled-components';

import Column from '../column';
import Row from '../row';

export const Container = styled(Column)`
  align-items: center;
  color: ${({ theme }) => theme.colors.volcanicSand};
  width: 100%;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.white};
  text-transform: none;
  text-decoration: none;
`;

export const Title = styled.div`
  margin: 40px 0 16px 0;
  text-align: center;
  width: 382px;

  strong {
    font-size: 16px;
  }
`;

export const PasswordContainer = styled(Row)`
  align-items: center;
  gap: 8px;
  margin: 18px 0 32px 0;
`;
