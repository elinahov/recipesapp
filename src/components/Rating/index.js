import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

const Rating = ({ rating }) => {
    const arr = [1,2,3,4,5]
    // 0-1.4 = 1 star
    // 1.5-2.4 = 2 star
    // 2.5-3.4 = 3 star
    // 3.5-4.4 = 4 star
    // 4.5-5 = 5 star

    const renderStars = () => {
        return arr?.map(star => {
            if (Math.round(rating) >= star) {
                return (
                    <Image key={star} style={styles.star} source={require('../../../assets/star.png')} />
                )
            }

            return (
                <Image key={star} style={styles.star} source={require('../../../assets/starEmpty.png')} />
            )
        })
    }

    return (
        <View style={styles.row}>
            {renderStars()}
        </View>
    );
};

export default React.memo(Rating);
