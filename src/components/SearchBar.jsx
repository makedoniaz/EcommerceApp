import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import CategoryFilter from './CategoryFilter';

const categories = ['Technology', 'Science', 'Health', 'Sports', 'Business'];

const SearchBar = ({ placeholder, onSearch }) => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [searchText, setSearchText] = useState('');

    const handleClear = () => {
        setSearchText('');
        if (onSearch) 
            onSearch('');
    };

    const handleChangeText = (text) => {
        setSearchText(text);
        if (onSearch) onSearch(text);
    };

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
        console.log('Selected Category:', category);
      };

    return (
        <View>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    value={searchText}
                    onChangeText={handleChangeText}
                    placeholderTextColor="#aaa"
                />
                
                <TouchableOpacity onPress={handleClear} style={styles.clearButton}>
                    <Text>Clear</Text>
                </TouchableOpacity>
            </View>

            <View>
                <CategoryFilter
                    categories={categories}
                    onSelectCategory={handleSelectCategory}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 5,
        margin: 10,
    },
    icon: {
        marginRight: 5,
    },
    input: {
        flex: 1,
        height: 40,
        fontSize: 16,
        color: '#333',
    },
    clearButton: {
        marginLeft: 5,
    },
});

 
export default SearchBar;