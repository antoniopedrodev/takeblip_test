import React, { useEffect, useState } from 'react';
import { BaseContainer } from '../../components/BaseContainer'
import { useParams } from 'react-router-dom';
import instance from '../../services';
import {
  DetailedBot,
  CreatedAt,
  GridContainer,
  GridItem,
  GridItemTrasnparent,
  Id,
  ImageContainer,
  Name,
  Error,
  SubHeader,
  TextContainer,
  Typography,
  UserCultureContainer,
  StatusAccountTitle,
  StatusAccountType,
  Footer,
  FooterText
} from './style';
import { HorizontalLine } from '../../components/HorizontalLine';
import { format } from 'date-fns';
import { BotDetailsCard } from '../../components/BotDetailsCard';
import Balloon from '../../assets/svg_images/balloon.svg';
import { UserIcon } from '../../assets/svg_props/UserIcon';
import { MessagesSent } from '../../assets/svg_props/MessagesSent';
import { ReceivedMessages } from '../../assets/svg_props/ReceivedMessages';
import { BotIcon } from '../../assets/svg_props/BotIcon';
import { Button } from '../../components/Button';

interface BotDetails {
    shortName: string;
    description: string;
    image: string;
    updated: string;
    culture: string;
    analytics: {
      user: {
        total: number;
        actived: number;
      };
      message: {
        received: number;
        sent: number;
      };
    };
    name: string;
    type: string;
    created: string;
  }

const BotDetails = () => {
  const params = useParams();
  const [bot, setBot] = useState<BotDetails | null>(null);
  useEffect(() => {
    const handleFetch = async () => {
      const response = await instance.get(`${params.shortName}/details`);
      setBot(response.data);
      console.log(response.data)
    };
    handleFetch();
  }, []);

  

  if (!bot)
    return (
      <Error>
        <h1>Profile not found</h1>
      </Error>
    );

  return (
    <BaseContainer>
      <SubHeader>
        <DetailedBot>
          <ImageContainer>
            <BotIcon />
          </ImageContainer>
          <TextContainer>
            <Name>{bot.name}</Name>
            <Id>id: {bot.shortName}</Id>
          </TextContainer>
        </DetailedBot>
        <CreatedAt>
          Created at {format(new Date(bot.created), 'dd/MM/yyyy')}
        </CreatedAt>
      </SubHeader>
      <HorizontalLine />
      <GridContainer>
        <GridItem collumSpan={1}>
          <UserCultureContainer>
            <Typography fontSize="12px" fontWeight={400}>
              Region and idiom
            </Typography>
            <Typography fontSize="12px" fontWeight={600}>
              {bot.culture}
            </Typography>
            <Typography fontSize="12px" fontWeight={400}>
              Timezone
            </Typography>
            <Typography fontSize="12px" fontWeight={600}>
              (UTC - {new Date(bot.created).getTimezoneOffset()}) -{' '}
              {Intl.DateTimeFormat().resolvedOptions().timeZone}
            </Typography>
          </UserCultureContainer>
        </GridItem>
        <GridItem collumSpan={2}>
          <BotDetailsCard
            icon={<UserIcon />}
            number={bot.analytics.user.actived}
            message="Usuarios ativos"
          />
        </GridItem>
        <GridItemTrasnparent collumSpan={1} rowSpan={2}>
          <img src={Balloon} />
          <StatusAccountTitle>
            Status Account
          </StatusAccountTitle>
          <StatusAccountType>
            Free
          </StatusAccountType>
          <Button>
            Update Account
          </Button>
        </GridItemTrasnparent>
        <GridItem collumSpan={2}>
          <BotDetailsCard
            icon={<ReceivedMessages />}
            number={bot.analytics.message.received}
            message="Mensagens recebidas"
          />
        </GridItem>
        <GridItem collumSpan={1}>
          <BotDetailsCard
            icon={<MessagesSent />}
            number={bot.analytics.message.sent}
            message="Mensagens enviadas"
          />
        </GridItem>
      </GridContainer>
      <HorizontalLine />
      <Footer>
        <FooterText>
          ©2019, BLiP Todos os direitos reservados <strong>| Termos de Uso</strong>
        </FooterText>
      </Footer>
    </BaseContainer>
  );
};

export default BotDetails;