import { View, Text, FlatList ,StyleSheet,ActivityIndicator,Image,Dimensions, TouchableOpacity} from 'react-native'
import React from 'react'
import axios from 'axios';
import {useState,useEffect} from 'react'
const { width, height } = Dimensions.get('window');

const Marvels = ({navigation}) => {

    const [isloading,setloading] = useState(false);
    const [characters , setCharacters] = useState();
    const [isSuccess,setSuccess] = useState(false);
    const url =`https://gateway.marvel.com/v1/public/characters?ts=1&limit=100&apikey=49a09bbe810b57c8e0a63bfb7df6cb44&hash=62141893cace0e123f89e968bf245f7b`
    useEffect(() => {
      const fetchAll = async() =>{
        try {
            setloading(true)
            const response = await axios.get(url)
            setCharacters(response.data)
            setSuccess(true);
            console.log(characters)
        } catch (e) 
         {
            console.log(e)
            setSuccess(false)
            
        }
        finally {
            setloading(false)
        }

      }

fetchAll()
    
    },[])

    if(isloading){
return(
<View style={styles.loader}> 
<ActivityIndicator size ="2000" color="#fff" />
</View>
)


    }
   if(isSuccess){
  return (
    <View style = {styles.background}>
      <FlatList data = {characters.data.results}
      renderItem = {({item}) => (<TouchableOpacity onPress ={() => navigation.navigate("Character Details",{name:item.name , path : item.thumbnail.path , extension : item.thumbnail.extension,description :item.description,comics:item.comics})} style = {styles.card}><Image source = {{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }}  style = {styles.image}></Image><Text style = {styles.text}>{item.name}</Text></TouchableOpacity>)}
      keyExtractor = {item => (item.id)}
      numColumns = {3}
      showsVerticalScrollIndicator={false}
      ListHeaderComponentStyle = {styles.header}
     >
      </FlatList>
    </View>
  )
}else{
return(

  <View style={styles.loader}> 
<Text style = {{fontSize : 20 , fontWeight :"900" , color : "#fff"}}> Retry Later!</Text>
</View>

)

}
}


const styles =StyleSheet.create({

loader : {
    flex : 1,
    justifyContent :"center",
    alignItems : "center",
    backgroundColor : "#151c26"
},
background : {
flex : 1 ,
alignItems: "center",
backgroundColor : "#151c26"
},
header : {
  backgroundColor : "#151c26"
}
,
card : {
  width: width * 0.25, 
  height: height * 0.2,
  borderWidth : 1,
  borderColor : "#ffff",
 margin : 10,
 shadowColor :"#888",
 elevation : 10
},
image: {
  flex: 1,
  alignContent : "center",

},
text: {
  color: 'white',
  fontSize: 10,
  fontWeight: 'bold',
  textAlign: 'center',
  backgroundColor: '#000000c0',
},

})

export default Marvels