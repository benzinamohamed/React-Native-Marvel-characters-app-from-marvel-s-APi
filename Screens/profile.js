import { View, Text,StyleSheet, Image, ScrollView,Dimensions, TouchableOpacity} from 'react-native'
import React from 'react'
const {height , width} = Dimensions.get("window")
const Profile = ({navigation,route}) => {
  const {name,path,extension,description,comics} = route.params
  console.log(typeof(description))
  return (
    <ScrollView style = {styles.contianer}>
      <View style = {styles.pic}>
      <Image style ={styles.Image}  source = {{ uri: `${path}.${extension}`}}  resizeMode={"cover"} ></Image>
      </View>
    <View>
      <Text style = {styles.text}>{name}</Text>
      <Text style = {styles.description} >{description?description:"there is no Description"}</Text>
  <TouchableOpacity onPress = {()=>navigation.navigate("Comics",{comics : comics})} style = {styles.comics}><Text style ={styles.text}>See all {name}'s comics!</Text></TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({

contianer : {
flex : 1,
alignContent : "center",
backgroundColor : "#151c26"
},
pic : {
borderWidth : 3,
borderColor : "#fff",
alignSelf : "center"
}
,
Image : {
  height: height*0.4,
  width : width * 0.9,
  alignContent : "center",
  justifyContent : "center",
},
text : {
fontWeight : "bold",
fontSize : 30,
color : "#fff",
margin : 10,
textAlign :"center"
},
description : {
  borderWidth : 2,
  borderColor : "#fff",
  padding : 10 ,
  fontWeight : "bold",
  borderTopLeftRadius : 20,
  borderBottomRightRadius : 20 ,
  fontSize : 20,
  color : "#fff",
  margin : 10
},
comics : {
borderWidth : 2 ,
borderColor : "#fff",
flex : 0.2,
alignSelf : "center",
backgroundColor : "#0403E2"
}




})

export default Profile