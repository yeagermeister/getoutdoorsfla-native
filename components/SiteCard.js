import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SiteCard = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                {props.sites.map(item => (
                    <View key={item.id} style={styles.col}>
                        <View style={styles.card}>
                            <Text style={styles.title}>{item.name}</Text>
                            <View style={styles.imageContainer}>
                                <Image source={{ uri: item.imageUrl }} style={styles.image} />
                            </View>
                            <View style={styles.cardBody}>
                                <Text style={styles.description}>{item.description}</Text>
                            </View>
                            <View style={styles.footer}>
                                <Text style={styles.distance}>67 miles away</Text>
                                <Text style={styles.weather} id={`weather${item.id}`} />
                                <Text style={styles.moreInfo}>
                                    <a href={`/site/${item.id}`} style={styles.button}>More Information</a>
                                </Text>
                            </View>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        width: '60%',
        margin: 5,
        padding: 5,
    },
    col: {
        flex: 1,
    },
    card: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        margin: 5,
        padding: 10,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: 10,
    },
    image: {
        width: '75%',
        height: undefined,
        aspectRatio: 16 / 9,
        borderRadius: 10,
    },
    cardBody: {
        marginTop: 10,
    },
    description: {
        textAlign: 'justify',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    distance: {
        marginRight: 5,
    },
    weather: {

    },
    moreInfo: {

    },
    button: {
        color: 'white',
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 10,
    },
});

export default SiteCard;