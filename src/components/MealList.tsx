import React from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet } from 'react-native';
import { Meal } from '../utils/types'
import { MealItem } from './MealItem'


interface Props {
    meals: Meal[]
}

export const MealList: React.FC<Props> = ({ meals }) => {
    const renderItem = ({item, index} : ListRenderItemInfo<Meal>) => {
        return <MealItem {...item} />
    }

    const keyExtractor = (item: Meal) => item.idMeal;

    return (
        <FlatList 
            data={meals}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            showsVerticalScrollIndicator={false}
            style={styles.container}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        paddingVertical: 15
    },
});