import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { styles } from "./styles";
import { LocationSelector } from "../../components";
import { GOOGLE_API_KEY, URL_BASE_GEOCODING } from "../../constants/maps";
import { insertPlace } from "../../db";
import { useUpdateAddressMutation, useGetProfileQuery } from "../../store/settings/api";
const Address = ({ navigation }) => {
  const localId = useSelector((state) => state.auth.user.localId);
  const imageUrl = useSelector((state) => state.address.imageUrl);

  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);
  const [updateAddress] = useUpdateAddressMutation();

  const onLocation = ({ lat, lng }) => {
    setLocation({ lat, lng });
  };

  const onHandleUpdateLocation = async () => {
    updateAddress({ localId, address, location });
    const result = await insertPlace({ address, coords: location, image: imageUrl });

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
        console.warn(address);
        setAddress(address);
      };
      getGeocoding();
    }
  }, [location]);

  return (
    <View style={styles.container}>
      <LocationSelector onLocation={onLocation} imageUrl={imageUrl} localId={localId}/>
      <TouchableOpacity onPress={onHandleUpdateLocation} style={styles.button}>
        <Text style={styles.text}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Address;
