import { StyleSheet, View, Text, Image, FlatList } from 'react-native';

const DATA = [
  {
    id: '1', descricao: 'Maçã'
  },
  {
    id: '2', descricao: 'Bola de futebol'
  },
  {
    id: '3', descricao: 'Batata'
  },
  {
    id: '4', descricao: 'Banana'
  },
]

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        style= {styles.capa}
        source= {{
       uri: 'https://www.univates.br/media/institucional/em_imagens/2.jpg'
        }}
      />
      <View style={styles.containerCabecalho}>
        <Text style={styles.cabecalho}>Lista de compras</Text>
      </View>
      <FlatList
        style={styles.containerLista}
        data={DATA}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.textoLista}>• {item.id} - {item.descricao}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3c3c3c',
    justifyContent: 'flex-start',
    marginTop: 30
  },
  containerCabecalho: {
    alignItems: 'center'
  },
  capa: {
    width: '100%',
    height: 200
  },
  cabecalho: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
  },
  textoLista: {
    color: '#FFF',
    fontSize: 15
  },
  containerLista: {
    padding: 20
  }
});