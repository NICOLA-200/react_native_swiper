import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Switch, Text, View, Image } from 'react-native';
import Swiper from 'react-native-deck-swiper';
// import  data from './data.js'
import { XCircleIcon as SolidCloseIcon } from 'react-native-heroicons/solid';
import { CheckIcon as TickIcon } from 'react-native-heroicons/solid';

export default function App() {
  

  const data = [
    { imageUri: require('./assets/blue.png') },
    { imageUri: require('./assets/green.png') },
    { imageUri: require('./assets/yellow.png') },
    { imageUri: require('./assets/orange.png') },
    { imageUri: require('./assets/red.png') }
  ];

  const [index,setIndex] = useState(0);
  const [icon, setIcon] = useState(false);
  const [tick, setTick] = useState(false);
  const onSwiped = () => {
    setIndex(index + 1);
  }

  const cancerIcon = () => {
    setIcon(true);
  }
  const tickIcon = () => {
    setTick(true);
  }
  const notAny = () => {
    setIcon(false)
    setTick(false)
  }
  return (
<View style={styles.container}>
  
    <Swiper
      cards={data}
      cardIndex={index}
      renderCard={(card) => <Card icon={icon} tick={tick} card={card} />}
      onSwiped={onSwiped}
      stackSize={3}
      stackScale={10}
      stackSeparation={15}
      disableBottomSwipe
      disableTopSwipe
      outputRotationRange={["-10deg", "0deg", "10deg"]}
      inputRotationRange={[-50, 0, 50]}
  
    />
  
    
</View>

  );
}

const Card = ({card, tick, icon}) => (
  
  <View style={styles.card}>

     <Image source={card.imageUri} style={styles.cardImage} />
      {console.log(icon) }

 
       <View style={{position: 'absolute', top: 10, right: 100}}>
    <SolidCloseIcon color="#faa" size={54} />
    </View>
  
    

    <View style={{position: 'absolute', top: 10, left: 10}}>
    <View style={{ backgroundColor: '#6f6',borderRadius: 150, padding: 10 }}>
    <TickIcon color="white" size={25} style={{ marginLeft: 5,  }} />
   
    </View>
    </View>
   

  </View> 
);

const styles = StyleSheet.create({
  container: {
    
    marginTop:100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 50,

  },


  
  cardImage: {
    width: 230,
    height: 300,
    resizeMode:'cover' ,
    borderRadius: 10

   
  }
});
