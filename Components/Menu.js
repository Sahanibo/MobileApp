import React from 'react'
import { StyleSheet, View, TextInput, Button, FlatList, Text} from 'react-native'
import Search from "./Components/Search";

class Menu extends React.Component {
    render() {
      
      return (
          <View style= {styles.mainview}>
          <Button title='Rechercher' onPress={() => <Search/>}/>
          </View>
      )
    }
}
const styles = StyleSheet.create( {
    mainview: {
        flex: 1,
        marginTop: 20

    }
    
})
export default Menu