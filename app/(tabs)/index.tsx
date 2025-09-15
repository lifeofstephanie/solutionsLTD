import { StyleSheet, View } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context';
import HomePage from '@/components/home/HomePage';
import { useThemeColor } from '@/hooks/use-theme-color';


export default function HomeScreen() {
  const theme = useThemeColor({}, 'text')
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name={'close-outline'} size={30} color={theme}/>
      </View>
      <HomePage/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
container:{
  flex:1
},
header:{
  marginTop: 20,
  paddingHorizontal:20
}
});
