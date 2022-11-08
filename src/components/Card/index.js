import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

const Card = ({ title, style, image, servings }) => {
    return (
        <View style={[styles.container, style]}>
            <Image style={styles.image} source={{ uri: image }} />
            <Text numberOfLines={3} style={styles.title}>{title}</Text>
            {servings ? (
                <>
                    <Text style={styles.label}>Servings</Text>
                    <Text style={styles.value}>{servings}</Text>
                </>
            ) : null}
        </View>
    );
};

export default React.memo(Card);
