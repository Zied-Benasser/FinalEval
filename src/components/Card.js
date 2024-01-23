import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function Card (props) {

    let img = props.img
    let titre = props.titre
    let desc = props.desc
    let année = props.année
    let genre = props.genre
    let auteur = props.auteur
    let population = props.pop

    return (<View style={styles.horizontal}>
          <Image source={{uri : img}} style={styles.image}/>
          <View style={styles.presentation}>
            <Text style={styles.titreFilm}>{titre}</Text>
            <Text style={styles.description}>{desc}</Text>
            <View style={styles.genres}>
                <View><Text>{année}  </Text></View>
                <View><Text>{genre}</Text></View>
            </View>
            <Text>{population}</Text>
            <Text style={styles.auteur}>{auteur}</Text>
          </View>

          
          <StatusBar style="auto" />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image:{
      height: 200,
      width: 100,
      
    },
    horizontal: {
      flexDirection: "row",
      width: 300,
      borderWidth : 1,
      padding: 10,
      margin: 10,
      alignItems: "center",
    },
    presentation: {
      justifyContent: "center",
      padding: 5,
      flex: 1,
    },
    titreFilm: {
        fontSize: 25,
        fontWeight: "bold",
    },
    genres: {
        flexDirection: "row",
        paddingLeft: 8,
    },
    description: {
      padding: 8,
    },
    auteur: {
      padding: 8,
    }
  });