import React from 'react';
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking} from 'react-native';

const colorGithub = "#010409";
const colorFontGithub='#C9D1D9'; 
const colorDarkFontGithub= '#4F565E';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/71729281?v=4';
const urlToMyGithub = 'https://github.com/TiagoMerc';

const App = () => {
//Função para navegar ao GitHub
    const handlePressGoToGithub = async () => {
        console.log('verificando link');
        const res = await Linking.canOpenURL(urlToMyGithub);
       
        if(res){
            console.log('Link aprovado');
            console.log('Abrindo Link...');
            await Linking.openURL(urlToMyGithub);
        }
    };

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
            <View style={style.content}>
              <Image
               accessibilityLabel='Tiago na área de serviço com com fundo branco na parte inferior e o ceú azul na parte superior'
               style={style.avatar}
               source={{uri: imageProfileGithub}}
             />
               <Text
               accessibilityLabel="Nome: Tiago Mercês" 
               style={[style.defaultText, style.name]}>
                    Tiago
               </Text>
               <Text
               accessibilityLabel="Nickname: Tiago Mercês"
               style={[style.defaultText, style.nickname]}>
                   TiagoMerc
               </Text>
               <Text
               accessibilityLabel="Descrição:   Graduando no curso de Sistemas de Informação - UFVJM | Dev em formação ORACLE + Alura | 
               Empreendedorismo | Censo de propósito | Censo de comunidade"
               style={[style.defaultText, style.description]}>
                  Graduando no curso de Sistemas de Informação - UFVJM | Dev em formação ORACLE + Alura | 
                  Empreendedorismo | Censo de propósito | Censo de comunidade
               </Text>

               <Pressable onPress={handlePressGoToGithub}>
                  <View style={style.button}>
                       <Text style={[style.defaultText, style.textButton]}>
                          Open in GitHub
                        </Text>
                   </View>
               </Pressable>
          </View>
        </SafeAreaView>
      
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        //Column
        backgroundColor: colorGithub,
        flex: 1, //Expandir para a tela inteira
        justifyContent: 'center',
        alignItems: 'center',
        //flexDirection: 'row', 
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText: {
        color: colorFontGithub,
    },
    name: {
        marginTop: 20,
        fontWeight:'bold',
        fontSize: 24,
    },
    nickname: {
        fontSize: 18,
        color: colorDarkFontGithub,
    },
    description: {
        fontWeight:'bold',
        textAlign: 'justify',
        fontSize: 14,
    },
    button: {
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
    },
    textButton: {
        fontWeight:'bold',
        fontSize: 16,
    },
});
