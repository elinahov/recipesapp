import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.lightGrey,
        padding: 10,
        marginVertical: 16,
    },
    input: {
        color: colors.black,
        fontSize: 14,
        flex: 1,
    },
    icon: {
        width: 16,
        height: 16,
        marginRight: 16,
    }
})

export default styles;