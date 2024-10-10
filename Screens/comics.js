import { View, Text, FlatList , StyleSheet} from 'react-native'
import React from 'react'

const Comics = ({route}) => {
    const {comics} = route.params
    console.log(comics)
  return (
    <View style = {{backgroundColor : "#151c26",flex : 1}}>
        <FlatList data = {comics.items}
        renderItem ={({item}) =>(<View style = {styles.border}><Text style = {styles.text}> {item.name}</Text></View>)}
        >

        </FlatList>
    </View>
  )
}
const styles = StyleSheet.create({
    border : {
        borderWidth : 2,
        borderColor : "#fff",
        padding : 10 ,
        fontWeight : "bold",
        borderTopLeftRadius : 20,
        borderBottomRightRadius : 20 ,
        fontSize : 20,
        margin : 10
    },

text :{

    color : "#fff"
} 

})

export default Comics