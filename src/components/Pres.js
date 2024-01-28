import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native';

const Pres = (props) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.containCover}>
                    <Image style={styles.cover} source={{ uri: props.img }} />
                </View>
                <View style={styles.containText}>
                    <View style={styles.textval}>
                        <Text style={styles.title}>{props.titreDesc}</Text>
                        <Text style={styles.values}>{props.titre}</Text>
                    </View>
                    <ScrollView style={styles.textval}>
                        <Text style={styles.title}>{props.synopsisDesc}</Text>
                        <Text style={styles.values}>{props.synopsis}</Text>
                    </ScrollView>
                    <View style={styles.textval}>
                        <Text style={styles.title}>{props.anneeDesc}</Text>
                        <Text style={styles.values}>{props.annee}</Text>
                    </View>
                    <View style={styles.textval}>
                        <Text style={styles.title}>{props.genreDesc}</Text>
                        <Text style={styles.values}>{props.genre1} {props.genre2}</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView >
    );
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderWidth: 2,
        margin: 5,
        borderRadius: 10,

    },
    cover: {

        height: 150,
        width: 100,
        borderRadius: 8,
        resizeMode: 'cover',
    },
    containCover: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 5,
        paddingLeft: 10,
    },
    containText: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'left',
        margin: 5,
        padding: 5,
        borderRadius: 10,
    },
    textval: {
        display: 'flex',
        flexDirection: 'column',
        padding: 5
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16
    },
    values: {
        maxWidth: 250,
        maxHeight: 150,
        textAlign: 'justify',
        fontSize: 16


    }

});

export default Pres;
