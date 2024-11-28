import React from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { Meal } from '../utils/types'
import { convertStringToHashtagArray } from '../utils/helpers'
import { Colors } from '../utils/colors'

import { useNavigation } from '@react-navigation/native';

interface Props extends Meal {

}

export const MealItem: React.FC<Props> = (props) => {
    const tags = props.strTags ? convertStringToHashtagArray(props.strTags) : [];
    const navigation = useNavigation();

    //@ts-ignore
    const onNavigate = (idMeal) => navigation.navigate('Details', { idMeal })

    return (
        <TouchableOpacity style={styles.container} onPress={() => onNavigate(props.idMeal)}>
            <Image style={styles.image} source={{ uri: props.strMealThumb }} />

            <View style={styles.textContainer}>
                <Text style={styles.name}>{props.strMeal}</Text>
                <View style={styles.tagsContainer}>
                    {tags.map((tag, index) => (
                        <Text key={index} style={styles.tag}>
                            {tag}
                        </Text>
                    ))}
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',

        marginBottom: 30,
        gap: 20,
    },

    textContainer: {
        flex: 1,
    },

    name: {
        fontSize: 22,
        fontWeight: 'bold',

        marginTop: 10,
        marginBottom: 5,

        flexWrap: 'wrap',
        color: Colors.almostBlack
    },

    image: {
        height: 150,
        width: 150,

        borderRadius: 15,
    },

    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',

        marginTop: 5,
    },

    tag: {
        fontSize: 14,
        color: Colors.tagGray,
        
        marginRight: 5,
    },
});
