import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { Container, Content, RandomColor, Type, FavoriteContainer, CreatedAt, Name } from "./style";
import { format } from "date-fns";
import { StarIcon } from "../../assets/svg_props/StarIcon";

interface Bots {
    name: string;
    type: string;
    created: string;
}

interface BotCardProps {
    type: 'list' | 'block';
    data: Bots;
    isFavorite?: boolean;
    randomColor: string;
    handleFavoriteAction: (name: string) => void;
}

enum LocalStorageData {
    list_favorite_bots = 'list_favorite_bots'
} 

export function BotCard ({ 
    type, 
    data, 
    isFavorite = false, 
    randomColor, 
    handleFavoriteAction 
}: BotCardProps) {
    
    const navigate = useNavigate();

    return (
        <Container
            key={data.name}
            botCardType={type}
            onClick={event => { event.stopPropagation();
            navigate(`bot/${data.name.trim().replace(' ', '_').toLowerCase()}`)}}
        >
            <FavoriteContainer type={type}>
                <Button
                    isButtonIcon
                    onClick={e => {
                        e.preventDefault();
                        e.stopPropagation();
                        const favoriteList = localStorage.getItem(
                        LocalStorageData.list_favorite_bots
                        );
                        let newList;

                        if (favoriteList) {
                        const list = [...JSON.parse(favoriteList)];
                        if (list.includes(data.name)) {
                            newList = list.filter(item => item !== data.name);
                        } else {
                            newList = [...list, data.name];
                        }
                        } else {
                        newList = [data.name];
                        }
                        localStorage.setItem(
                        LocalStorageData.list_favorite_bots,
                        JSON.stringify([...newList])
                        );
                        handleFavoriteAction(data.name);
                    }}
                >
                    <StarIcon isFavorite={isFavorite} />
                </Button>
            </FavoriteContainer>
            <Content type={type}>
                <RandomColor color={randomColor} type={type} />
                <div>
                    <Name>{data.name}</Name>
                    {type === 'block' && <Type>{data.type}</Type>}
                </div>
            </Content>
            {type === 'list' && (
                <CreatedAt>
                    Created at {format(new Date(data.created), 'dd/MM/yyyy')}
                </CreatedAt>
            )}
        </Container>
    )
}