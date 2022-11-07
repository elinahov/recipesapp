import React from "react";
import { SafeAreaView, Text } from "react-native";
import Input from "../../components/Input";
import styles from "./styles";

const Search = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Input />
        </SafeAreaView>
    )
}

export default React.memo(Search);