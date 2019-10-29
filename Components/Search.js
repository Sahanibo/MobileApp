import React from 'react'
import { StyleSheet, View, TextInput, Button, FlatList, Text} from 'react-native'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'

class Search extends React.Component {

    constructor(props){
        super(props)
        this.state = { 
            films: [],
            searchedText: "" 
        }
    }

    _searchTextInputChanged(text) {
        this.setState({ searchedText: text })
    }
 

    _loadseries(){

        console.log(this.state.searchedText)
        if (this.state.searchedText.length > 0){

            getFilmsFromApiWithSearchedText(this.state.searchedText).then(data => {
        
                this.setState ({films: data.results})
             })
        }

    }
    render(){
        
        return(
        <View style={styles.view}>
            <TextInput style={styles.textinput} 
            placeholder='Titre du film' 
            onChangeText={(text) => this._searchTextInputChanged(text)} 
            onSubmitEditing={() => this._loadseries()}
            />

            <Button title='Rechercher' onPress={() => this._loadseries()}/>

            
            <FlatList 
            
            data={this.state.films}
            keyExtractor={(item) => item.id.toString()}   
            renderItem={({item}) => <FilmItem film = {item} />}
              
           
            />
         
        </View>

        )
    }
  
}

const styles = StyleSheet.create( {
    view: {
        flex: 1,
        marginTop: 20

    },

    textinput: {
        marginLeft: 5, 
        marginRight: 5,
        height: 50, 
        borderColor: '#000000', 
        borderWidth: 1, 
        paddingLeft: 5
    }

    
})

export default Search