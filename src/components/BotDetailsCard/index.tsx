import React from 'react';
import { Container, InfoContent, Message, Number } from './style';

interface BotDetailsCardProps {
  icon: React.ReactNode;
  number: number;
  message: string;
}

export const BotDetailsCard = ({ icon, number, message }: BotDetailsCardProps) => (
  <Container>
    {icon}
    <InfoContent>
      <Number>{number}</Number>
      <Message>{message}</Message>
    </InfoContent>
  </Container>
);
