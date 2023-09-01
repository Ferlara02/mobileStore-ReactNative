import { ActivityIndicator, View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { ImageSelector } from '../../components';
import { useGetProfileQuery, useUpdateImageProfileMutation } from '../../store/settings/api';
import { COLORS } from '../../themes';

const Profile = ({navigation}) => {
  const localId = useSelector((state) => state.auth.user.localId);
  const [uploadImageProfile, { data, isLoading, error }] = useUpdateImageProfileMutation();

  const { data: userData, isLoading: isLoadingUserData } = useGetProfileQuery({localId});

  const onHandlerImage = async ({ uri, base64 }) => {
    await uploadImageProfile({ localId, image: `data:image/jpeg;base64,${base64}` });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageSelector profileImage={userData?.profileImage} onSelect={onHandlerImage} />
        {isLoading && (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color={COLORS.text} />
          </View>
        )}
      </View>
      <Text style={styles.title}>Address</Text>
      <Text style={styles.addressText}>{userData?.address}</Text>
      <TouchableOpacity style={styles.changeAddress} onPress={() => navigation.navigate("Address")}>
        <Text style={styles.changeText}>Change the address</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;