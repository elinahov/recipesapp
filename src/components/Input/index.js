import React from "react";
import { Image, Pressable, TextInput, View } from "react-native";
import styles from "./styles";
import colors from "../../constants/colors";

const Input = ({ showSearchIcon, pressable, onPress, style, ...props }) => {
    const renderInput = () => (
        <View style={[styles.container, style]}>
            {showSearchIcon ? (
                <Image style={styles.icon} source={require('../../../assets/search.png')} />
            ) : null}
            <TextInput {...props} editable={!pressable} placeholderTextColor={colors.lightGrey} style={styles.input} />
        </View>
    )


    if (pressable) {
        return (
            <Pressable onPress={onPress}>
                {renderInput()}
            </Pressable>
        )
    }

    return renderInput()
}

Input.defaultProps = {
    placeholder: 'Search recipe',
    showSearchIcon: true,
}

export default React.memo(Input);