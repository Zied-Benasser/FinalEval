import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import Card from '../components/Card';
import Pres from '../components/Pres';

const MovieScreen = () => {
    const [img, setImg] = useState('');
    const [titre, setTitre] = useState('');
    const [année, setAnnée] = useState('');
    const [data, setData] = useState(false);
    useEffect(() => {
        async function fetchData() {
            try {
                const f = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=08a341931ab5f5dcee467baeb4a68c76`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (!f.ok) {
                    console.warn(`Erreur HTTP ! Status: ${f.status}`);
                    return Alert.alert("Erreur HTTP");
                } else {
                    const json = await f.json();
                    setData(json);
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
                    <Text >Récuperation des film populaire en cours...</Text>
                </View>
            ) : (
                <View>
                    <Text style={styles.Text}>Liste des films populaire</Text>
                    <FlatList
                        data={data.results}
                        renderItem={({ item }) => <Pres img={"https://image.tmdb.org/t/p/w500" + item.poster_path} titreDesc="Titre :" titre={item.title} synopsisDesc="Description :" synopsis={item.overview} anneeDesc="Date de sortie :" annee={item.release_date} />}
                        keyExtractor={(item) => item.id.toString()} // Assuming item.id is a number
                    />
                </View>
            )}
        </SafeAreaView>
    );
};
export default MovieScreen;


const styles = StyleSheet.create({
    container: {
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