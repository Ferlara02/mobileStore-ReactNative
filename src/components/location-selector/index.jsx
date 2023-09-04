import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from "expo-location";
import { useEffect, useState } from "react";
import { View, Button, Text, Alert } from "react-native";
import { useDispatch } from "react-redux";

import { styles } from "./styles";
import { URL_MAPS } from "../../constants/maps";
import { saveImageUrl } from "../../store/address/address.slice";
import { useGetProfileQuery } from "../../store/settings/api";
import { COLORS } from "../../themes/colors";
import MapPreview from "../map-preview";

const LocationSelector = ({ onLocation, imageUrl, localId }) => {
  const { data: userData, isLoading: isLoadingUserData } = useGetProfileQuery({ localId });
  const [pickedLocation, setPickedLocation] = useState(userData ? userData.location : null);
  const dispatch = useDispatch();

  

  const verifyPermissions = async () => {
    const { status } = await requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Insufficient permissions!",
        "You need to grant location permissions to use this app.",
        [{ text: "Okay" }]
      );
      return false;
    }
    return true;
  };
  const image = pickedLocation
    ? URL_MAPS({ lat: pickedLocation.lat, lng: pickedLocation.lng, zoom: 15 })
    : "";
  const onHandlerGetLocation = async () => {
    const isLocationPermissions = await verifyPermissions();
    if (!isLocationPermissions) return;
    const location = await getCurrentPositionAsync({
      accuracy: 6,
      timeInterval: 5000,
    });
    const { latitude, longitude } = location.coords;

    setPickedLocation({ lat: latitude, lng: longitude });
    onLocation({ lat: latitude, lng: longitude });
    
  };

  useEffect(() => {
    if (pickedLocation) {
      dispatch(saveImageUrl(image));
    }
    
  }, [pickedLocation]);
  return (
    <View style={styles.container}>
      <MapPreview location={pickedLocation} image={image} style={styles.preview}>
        <Text style={styles.noLocation}>No location chosen yet!</Text>
      </MapPreview>
      <Text style={styles.title}>Address</Text>
      <Text style={styles.addressText}>{userData?.address}</Text>
      <Button
        title={pickedLocation ? "Change address" : "Get user location"}
        onPress={onHandlerGetLocation}
        color={COLORS.text}
      />
    </View>
  );
};

export default LocationSelector;
