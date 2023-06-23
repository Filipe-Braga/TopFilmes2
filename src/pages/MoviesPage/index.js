import { StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import Filme from '../../components/Filme'
import { ScrollView, ActivityIndicator, SafeAreaView } from 'react-native';

export default function MoviesPage(){

    let [filmes, setfilmes] = useState([]);

  
    const baseURL = 'https://api.otaviolube.com/api/filmes?populate=*';
  
  
    useEffect(function(){
      fetch(baseURL)
        .then(data => data.json())
        .then(objeto => {console.log(objeto.data);
        setfilmes(objeto.data);})
    },[]);



    return(

        <SafeAreaView style={styles.back}>
          {filmes.length > 0 ? <ScrollView horizontal>
            {
              filmes.map(filme => <Filme key={filme.id} filme={filme.attributes}/> )
            }
          </ScrollView>: <ActivityIndicator/>}
        </SafeAreaView>

        // <View style={styles.back}>
        //   <View style={styles.header}>
        //     <Text style={styles.topF}>TopFilmes</Text>
        //   </View>
        //   <View>{filmes.length > 0 ? filmes.map(filme => <Filme key={filme.id} filme={filme.attributes}/> ) 
        //   : <ActivityIndicator/>}</View>
        //   <StatusBar style="auto" />
        // </View>
    );


    
}

const styles = StyleSheet.create({
    back: {
      width: '100%',
      height: '100%',
      //flex: 1,
      backgroundColor: '#203027',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


