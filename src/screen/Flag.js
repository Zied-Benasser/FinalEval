import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Alert } from 'react-native';
import Card from '../components/Card';


const Flag = () => {
    const [img, setImg] = useState('');
    const [titre, setTitre] = useState('');
    const [année, setAnnée] = useState('');
    const [data, setData] = useState(false);
    useEffect(() => {
        async function fetchData() {
            try {
                const f = await fetch(`https://restcountries.com/v2/all`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (!f.ok) {
                    console.warn(`Erreur HTTP ! Status: ${f.status}`);
                    return Alert.alert("Erreur HTTP");
                } else {
                    const Json = await f.json();
                    setData(Json);
                }
            } catch (e) {
                console.warn(e)
            }
        }
        fetchData();
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            {data == false ? (
                <View>
                    <Text >Récuperation des Pays en cours...</Text>
                </View>
            ) : (
                <View>
                    <Text style={styles.Text}>Liste des Pays</Text>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => <Card img={"https://image.tmdb.org/t/p/w500" + item.flags['png']} titre={item.name} pop={item.population} />}
                        keyExtractor={(item) => item.alpha3Code.toString()}
                    />
                </View>
            )}
        </SafeAreaView>
    );
};
export default Flag;


const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    Text: {
        fontSize: 24,
        fontStyle: 'italic',
        textAlign: 'center',
        marginHorizontal: 20,
    },
});