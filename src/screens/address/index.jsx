import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

import { styles } from "./styles";
import { LocationSelector } from "../../components";
import { GOOGLE_API_KEY, URL_BASE_GEOCODING } from "../../constants/maps";
import { insertPlace, selectPlaces } from "../../db";
import { useUpdateAddressMutation, useGetProfileQuery } from "../../store/settings/api";
const Address = ({ navigation }) => {
  const [places, setPlaces] = useState([]);
  const localId = useSelector((state) => state.auth.user.localId);
  const imageUrl = useSelector((state) => state.address.imageUrl);
  const [isDisabled, setIsDisabled] = useState(true); //deshabilito el boton confirmar por default para que el usuario no mande datos vacíos al updateAddress

  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);
  const [updateAddress] = useUpdateAddressMutation();

  const onLocation = ({ lat, lng }) => {
    setLocation({ lat, lng });
    setIsDisabled(false);
  };

  const onHandleUpdateLocation = async () => {
    const result = await insertPlace({ address, coords: location, image: imageUrl });
    updateAddress({ localId, address, location });

    navigation.navigate("Settings");
  };

  useEffect(() => {
    if (location) {
      const getGeocoding = async () => {
        const response = await fetch(
          `${URL_BASE_GEOCODING}/json?latlng=${location.lat},${location.lng}&key=${GOOGLE_API_KEY}`
        );
        const data = await response.json();

        if (!data.results) {
          throw new Error("Something went wrong");
        }
        const address = data.results[0].formatted_address;
        setAddress(address);
      };
      getGeocoding();
    }
  }, [location]);

  useFocusEffect(
    useCallback(() => {
      const getPlaces = async () => {
        const places1 = await selectPlaces();
        setPlaces(places1);
      };
      getPlaces();
      console.log("PLACES--->", places);
      return () => {
        setPlaces([]);
      };
    }, [])
  );
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contView}>
        <LocationSelector onLocation={onLocation} imageUrl={imageUrl} localId={localId} />
        <TouchableOpacity
          onPress={onHandleUpdateLocation}
          style={isDisabled ? styles.buttonDisabled : styles.button}
          disabled={isDisabled}>
          <Text style={styles.text}>Confirm</Text>
        </TouchableOpacity>
        <View style={styles.containerPlaces}>
          <Text style={styles.titlePlaces}>List of your address</Text>
          <FlatList
            data={places}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <View style={styles.mapImage}>
                  <Image source={{ uri: item.image }} style={styles.image} />
                </View>
                <View style={styles.detail}>
                  <Text style={styles.detailText}>{item.address}</Text>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Address;
