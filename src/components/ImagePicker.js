import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { storeData } from "../utils/asyncStorage";

export default function PickAvatar() {
    const [image, setImage] = useState(null);


    const pickImageFromLibrary = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });


        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    if (image === null) {
        return (

            <View style={{display:'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Button
                    title="Importer une image"
                    onPress={pickImageFromLibrary}
                />

            </View>
        );
    } else {

        storeData('image', image)

        return (

            <View style={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}>
                {image && (
                    <Image source={{ uri: image }} style={{ width: 200, height: 200, borderRadius: 300 }} />
                )}
            </View>
        );
    }

}

