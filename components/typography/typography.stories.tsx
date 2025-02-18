'use client';
import React from 'react';
import styled from 'styled-components';
import { Meta, StoryObj } from '@storybook/react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { typographies } from '../../theme/muiTheme';

import Typography, { Variant } from './index';

const meta: Meta<typeof Typography> = {
  title: 'Layout/Typography',
  component: Typography,
};

export default meta;

const Wrapper = styled.div`
  background: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Variations: StoryObj<typeof Typography> = {
  render: () => (
    <Wrapper>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Style name</TableCell>
              <TableCell align="right">Font Weight</TableCell>
              <TableCell align="right">Font Size</TableCell>
              <TableCell align="right">Line Height</TableCell>
              <TableCell align="right">Letter spacing</TableCell>
              <TableCell align="center">Sample</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(typographies).map((typographyVariant: string) => {
              const { fontSize, fontWeight, lineHeight, letterSpacing } =
                typographies[typographyVariant];
              return (
                <TableRow
                  key={typographyVariant}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Typography variant={typographyVariant as Variant}>
                      {typographyVariant}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">{fontWeight}</TableCell>
                  <TableCell align="right">{fontSize}</TableCell>
                  <TableCell align="right">{lineHeight}</TableCell>
                  <TableCell align="right">{`${letterSpacing || 0}px`}</TableCell>
                  <TableCell>
                    <Typography variant={typographyVariant as Variant}>
                      Almost before we knew it, we had left the ground.
                    </Typography>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Wrapper>
  ),
};
