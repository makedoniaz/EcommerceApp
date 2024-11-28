import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../utils/colors'

import SearchIcon from '../assets/icons/search.svg';


interface Props {
    placeholder: string,
    onSearch: (text: string) => void
}

export const SearchBar: React.FC<Props> = ({ placeholder, onSearch }) => {
    const [searchText, setSearchText] = useState('');

    const handleChangeText = (text: string) => {
        setSearchText(text);
    };

    return (
        <View style={styles.searchWrapper}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    value={searchText}
                    onChangeText={handleChangeText}
                    placeholderTextColor="#aaa"
                />

                <TouchableOpacity onPress={() => onSearch(searchText)}>
                    <SearchIcon height={36} width={36} fill={'#fafafa'}/>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    searchWrapper: {
        backgroundColor: Colors.darkGray,
        paddingVertical: 20,
    },

    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',

        gap: 10,

        marginHorizontal: 10,
    },

    input: {
        flex: 1,
        fontSize: 20,
        color: Colors.textBlack,
        backgroundColor: Colors.offWhite,
        borderRadius: 20,
        height: 60,
        
        paddingHorizontal: 15,
    }
});