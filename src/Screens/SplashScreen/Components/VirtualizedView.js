import React from 'react';
import { FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function VirtualizedView(props) {
  return (
    <FlatList
        style={props.style}
      data={[]}
      ListEmptyComponent={null}
      keyExtractor={(item, key)=>key.toString()}
      renderItem={null}
      ListHeaderComponent={() => (
        <ScrollView>{props.children}</ScrollView>
      )}
    />
  );
}