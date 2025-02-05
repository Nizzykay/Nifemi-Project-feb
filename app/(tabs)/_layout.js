import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const _layout = () => {
    const friends = [
        { id: 1, name: 'john', email: 'kolawole23@gmail.com' },
        { id: 1, name: 'joseph', email: 'koladisi23@gmail.com' },
    ]
    return (
        <View style={styles.page}>
            <Text style={{ fontsize: 30, color: 'black', fontWeight: 'bold' }}>List Component</Text>
            <FlatList
                data={friends}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            <Text>{item.name}</Text>
                            <Text>{item.email}</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
};

export default _layout;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 50,
        paddingHorizontal: 30,
    },
    container: {
        height: 100,
        borderWidth: 1,
        marginBottom: 20,
    },

});