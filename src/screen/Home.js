import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform, Text, TextInput, StyleSheet } from "react-native";
import PickAvatar from "../components/ImagePicker";
import { storeData, getData, removeData } from "../utils/asyncStorage";
import Bouton from "../components/Bouton";


const Bienvenue = (props) => {




    const [user, setUser] = useState(null);
    const [image, setImage] = useState(null);
    const [create, setCreate] = useState(false);
    const [temp, setTemp] = useState(null);


    useEffect(() => {
        const fetchUserData = async () => {
            const storedUser = await getData('user');
            const storedImage = await getData('image');
            setUser(storedUser);
            setImage(storedImage);
        };
        fetchUserData();
    }, [user, image]);



    if (user === null) {
        return (
            <View style={styles.container}>
                <Text style={styles.title} >Bienvenue sur mes Hobbies</Text>
                <TextInput
                    placeholder="Entrez votre nom"
                    onChangeText={(text) => setTemp(text)}
                />
                <Button
                    title="Valider"
                    onPress={() => storeData('user', temp) && setUser(temp)}
                />

            </View>
        );
    } else if (image === null) {
        async function deleteImage() {
            await removeData('image');
            setImage(null);
        }

        return (
            <><View style={styles.container}>
                <Text style={styles.title}>Bienvenue {user}</Text> 
                <Text>Choisissez une image de profil</Text>
            </View><View style={{ display: 'flex', flexDirection: 'row' }} />
                <PickAvatar />
                <Bouton text="Choisir une autre image" action={() => deleteImage()} />
                <Button
                    title="Valider"
                    onPress={() => props.navigation.push('Home')} /></>
        );
    } else if (create === false && user !== null && image !== null) {
        async function resetData() {
            await removeData('user');
            await removeData('image');
            setUser(null);
            setImage(null);
            setCreate(false);
        }

        return (


            <View style={styles.container}>
                <Text style={styles.title} >Bienvenue {user}</Text>

                <Image source={{ uri: image }} style={{ width: 200, height: 200, borderRadius: 300 }} />

                <Bouton text="Recommencer" action={() => resetData()} />
                <Button title="Valider" onPress={() => setCreate(true)} />

            </View>
        );
    } else if (create === true) {
        async function resetData() {
            await removeData('user');
            await removeData('image');
            setUser(null);
            setImage(null);
            setCreate(false);
        }
        return (
            <View style={styles.container}>
                <Text style={styles.title} >Bienvenue {user}</Text>

                <Image source={{ uri: image }} style={{ width: 200, height: 200, borderRadius: 300 }} />
                <Bouton text="Recommencer" action={() => resetData()}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
    },
});

export default Bienvenue;