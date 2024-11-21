import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const CategoryFilter = ({ categories, onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleSelectCategory = (item) => {
    setSelectedCategory(item.value);
    onSelectCategory(item.value);
  };

  const data = categories.map(category => ({
    label: category,
    value: category,
  }));

  return (
    <View style={styles.container}>
      <Dropdown
        style={styles.dropdown}
        data={data}
        labelField="label"
        valueField="value"
        value={selectedCategory}
        placeholder="Select Category"
        onChange={handleSelectCategory}
        dropdownPosition="bottom"
        maxHeight={150}
        search={true} // Включаем поиск по категориям
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  dropdown: {
    backgroundColor: '#fafafa',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    height: 40,
    paddingHorizontal: 10,
  },
  selectedCategoryText: {
    marginTop: 20,
    fontSize: 18,
    color: '#333',
  },
});

export default CategoryFilter;
