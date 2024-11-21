import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import SearchBar from './components/SearchBar';


function App() {
  const handleSearch = (text: any) => {
    console.log('Search text:', text);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <SearchBar placeholder="Search something..." onSearch={handleSearch} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;