import React, { Component } from 'react';

import styled from 'styled-components';
import { pallete } from './variables';

export const AppText = styled.Text`
  color: ${(props) => (props.color ? props.color : 'black')}
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  text-decoration: ${(props) => (props.textDecorationLine ? `${props.textDecorationLine}` : null)};
`;

export const HeaderText = styled.Text`
  color: ${(props) => (props.color ? props.color : pallete.dark_yellow)}
  font-size: ${(props) => (props.size ? props.size : '16px')};
  font-weight: bold;
`;
