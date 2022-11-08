import React from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Categories = ({ categories, selectedCategory, onCategoryPress }) => {
    return (
        <FlatList
            horizontal
            data={categories}
            keyExtractor={item => String(item)}
            showsHorizontalScrollIndicator={false}
            style={{ marginHorizontal: -24, marginTop: 24 }}
            renderItem={({ item, index }) => {
                const selected = selectedCategory === item;
                const displayName = item?.replace('_', ' ')

                return (
                    <TouchableOpacity
                        onPress={() => onCategoryPress(item)}
                        style={[styles.itemContainer, selected ? styles.selectedItemContainer : {}, index === 0 ? { marginLeft: 24 } : {}]}
                    >
                        <Text style={[styles.item, selected ? styles.selectedItem : {}]}>{displayName}</Text>
                    </TouchableOpacity>
                );
            }}
        />
    );
};

export default React.memo(Categories);
