import React, { useState } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import logo from './assets/cara1.png';
import logo1 from './assets/lv.png';


// Componentes de página
const PaginaInicial = () => {
  return (
    <View style={styles.pagina}>
      <Text style={styles.textoPagina}>
      <Image style={styles.images} source={ logo1 }/> {"\n\n\n\n"}
        {"\n"}Nome: Luis Vinicius F. Silva
        {"\n"}Idade - 23 Anos
        {"\n"}Ocupação - Estudante
      </Text>
    </View>
  );
};

const Sobremim = () => {
  return (
    <View style={styles.pagina2}>
      <Text style={styles.images}><Image style={styles.images1} source={ logo }/> </Text>
      <Text style={styles.textoPagina1}>
      Olá, eu sou Luis Vinicius, estudante da área de programação e design e aluno do curso de Analise e Desenvolvimento de Sistemas através do SENAC (Embarque Digital) em Recife, Pernambuco.{"\n"}
      Amante de tecnologia, Jogos são o meu hobby, alem de livros e filmes. Atualmente, sou entusiasta na área de programação e banco de dados, masterizando linguagens como C# e JavaScript e aprendendo cada dia mais sobre toda a area de tecnologia.{"\n"}
      </Text>
    </View>
  );
};

const Habilidades = () => {
  return (
    <View style={styles.pagina}>
      <Text style={styles.textoPagina1}>
      {"\n"}<Text style={styles.textoPagina}>LINGUAGENS</Text>{"\n"}
        HTML, CSS, JavaScript.{"\n"}
        Python.{"\n"}
        C# - Iniciante. {"\n"}
      {"\n"}<Text style={styles.textoPagina}>SOFT SKILLS</Text>{"\n"}
        Comunicação. {"\n"}
        Resiliência. {"\n"}
        Trabalho em equipe. {"\n"}
        Empatia.{"\n"}
      {"\n"}<Text style={styles.textoPagina}>IDIOMAS</Text>{"\n"} 
        Portugues - Fluente. {"\n"}
        Ingles - Avançado.
      </Text>
    </View>
  );
};

const Contatos = () => {
  return (
    <View style={styles.pagina}>
      <Text style={styles.textoPagina}>
      <Image style={styles.images2} source={ logo1 }/> {"\n\n\n\n"}
      {"\n"}           Luis Vinicius F. Silva{"\n"}
        {"\n"}     Telefone: (81) 99805-4372
        {"\n"}Email: Luis.silva@edu.pe.senac.br
        {"\n"}          Recife, Pernambuco.

      </Text>
    </View>
  );
};

const App = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState('Página Inicial');

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const navegarPara = (pagina) => {
    setPaginaAtual(pagina);
    setMenuAberto(false);
  };

  // Renderização condicional da página atual
  const renderizarPagina = () => {
    switch (paginaAtual) {
      case 'Página Inicial':
        return <PaginaInicial />;
      case 'Sobre Mim':
        return <Sobremim />;
      case 'Habilidades':
        return <Habilidades />;
      case 'Meus Contatos':
        return <Contatos />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.titulo}>Meu Currículo</Text>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
          <Text>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Menu */}
      {menuAberto && (
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página Inicial')}>
            <Text style={styles.menuItemText}>Página Inicial</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Sobre Mim')}>
            <Text style={styles.menuItemText}>Sobre Mim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Habilidades')}>
            <Text style={styles.menuItemText}>Habilidades</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Meus Contatos')}>
            <Text style={styles.menuItemText}>Meus Contatos</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Conteúdo */}
      <View style={styles.content}>{renderizarPagina()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuIcon: {
    padding: 10,
  },
  menu: {
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuItemText: {
    fontSize: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagina: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 150,
  },
  pagina2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50,
  },
  textoPagina: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textoPagina1: {
    fontSize: 18,
    flex: 1,
    
  },
  images: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: 200, 
    height: 200, 
    marginRight: 20,
  },
  images1: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    width: 200, 
    height: 200, 
    marginRight: 50,
  },
  images2: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    width: 200, 
    height: 200, 
    
  },
});

export default App;