import React, { useEffect, useState } from "react";
import { BaseContainer } from "../../components/BaseContainer";
import { Button } from "../../components/Button";
import { BotCard } from "../../components/BotCard";
import { HorizontalLine } from "../../components/HorizontalLine";
import instance from "../../services";
import { 
    Container, 
    Title, 
    Subheader,
    InteractiveContainer, 
    Subtitle, 
    SearchBar, 
    ListCards, 
    RoundButtonContainer,
    RoundButton 
} from "./style";
import { BlocksIcon } from "../../assets/svg_props/BlocksIcon";
import { ListIcon } from "../../assets/svg_props/ListIcon";
import { SquarePlusButton } from "../../assets/svg_props/SquarePlusButton";

interface Bots {
    name: string;
    type: string;
    created: string;
}

interface Button {
    isActive?: boolean;
}

enum LocalStorageData {
    list_favorite_bots = 'list_favorite_bots'
}  

export const getRandomColor = () => {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    if (color.length === 5) color += 'f';
    return `#${color}`;
};

const Dashboard = () => {

    const [botDisplayType, setBotDisplayType] = useState<'list' | 'block'>('block');
    const [botList, setBotList] = useState<Bots[] | null>(null);
    const [listFavoriteBots, setListFavoriteBots] = useState<string[]>([]);
    const [listFilteredBots, setListFilteredBots] = useState<Bots[] | null>(botList);
    const [orderBots, setOrderBots] = useState<'name' | 'creation'>('name');

    useEffect(() => {

        const handleFetch =async () => {
            const response = await instance.get(`bots?Filters[orderBy]=${orderBots}`);
            setBotList(response.data);
            setListFilteredBots(response.data);
        };

        const localList = localStorage.getItem(LocalStorageData.list_favorite_bots);
        
        if (localList) setListFavoriteBots(JSON.parse(localList));
        
        handleFetch();
    }, [orderBots]);

    const handleFavoriteBots = (name: string) => {
        if (listFavoriteBots.includes(name)) {
            setListFavoriteBots(prev => prev.filter(item => item !== name));
        } else {
            setListFavoriteBots(prev => [...prev, name]);
        }
    }


    return (
        <BaseContainer>
            <Subheader>

                <Title>
                    My chatbots
                </Title>

                <InteractiveContainer>
                    <SearchBar 
                        type='text'
                        placeholder="Search"
                        onChange={e => botList && setListFilteredBots(
                            botList.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
                        )}
                    />

                    <Button 
                        onClick={() => setOrderBots('name')}
                    >
                        Order by name
                    </Button> 

                    <Button 
                        onClick={() => setOrderBots('creation')}
                    >
                        Order by creation
                    </Button> 
                
                    <Button
                        isButtonIcon
                        isActive={botDisplayType === 'block'}
                        onClick={() => setBotDisplayType('block')}
                    >
                        <BlocksIcon />
                    </Button> 

                    <Button
                        isButtonIcon 
                        isActive={botDisplayType === 'list'}
                        onClick={() => setBotDisplayType('list')}
                    >
                        <ListIcon />
                    </Button>
                </InteractiveContainer>
                
            </Subheader>
            {
                listFavoriteBots && (
                    <>
                        <Subtitle>
                            Favorites
                        </Subtitle>
                        <ListCards type={botDisplayType}>
                            {
                                listFilteredBots?.filter(item => listFavoriteBots.includes(item.name)).map(item => (
                                    <BotCard 
                                        handleFavoriteAction={handleFavoriteBots}
                                        key={item.name}
                                        isFavorite={true}
                                        data={item}
                                        type={botDisplayType}
                                        randomColor={getRandomColor()}
                                    />
                                ))
                            }
                        </ListCards>

                    </>
                )
            }
            
            <HorizontalLine />
            <ListCards type={botDisplayType}>
                            {
                                listFilteredBots?.filter(item => !listFavoriteBots.includes(item.name)).map(item => (
                                    <BotCard 
                                        handleFavoriteAction={handleFavoriteBots}
                                        key={item.name}
                                        isFavorite={true}
                                        data={item}
                                        type={botDisplayType}
                                        randomColor={getRandomColor()}
                                    />
                                ))
                            }
            </ListCards>
            <RoundButtonContainer>
                <RoundButton>
                    <Button isButtonIcon>
                        <SquarePlusButton isActiveButton/>
                    </Button>
                </RoundButton>
                
            </RoundButtonContainer>
        </BaseContainer>
        
    )
};

export default Dashboard;