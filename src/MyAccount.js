import HeadComp from './Header/headComp';
import Banner from './Header/Banner';
import IconContainer from './Header/IconContainer';
import {
  circleIconData,
  musicData,
  ottData,
  newsData,
  gameData,
  helpData,
} from './data';
import PacksBanner from './PacksBanner';
import MovieContainer from './MovieContainer';
import ContainerList from './ContainerList';
import {
  GameRenderFunction,
  helpRenderFunction,
  MusicRenderFunction,
  NewsRenderFunction,
  ottRenderFunction,
} from './RenderFunctions';
import Posters from './Posters';
import NewConntion from './NewConntion';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';
import Carousl from './Header/Carousl';
import Banner1 from './Header/Banner1';
import Index from './Header/Index';
import ImageCarousel from './Header/ImageCarousel';

const MyAccount = () => {
  return (
    <ScrollView style={{backgroundColor: '#e32636'}}>
      <HeadComp />
      <View
        style={{
          height: '100%',
          backgroundColor: '#F3EFE0',
          borderRadius: 20,
          position: 'relative',
        }}>
        {/* <Index /> */}
        <ImageCarousel />
        {/* <Banner1 srcimg={require('./assets/images/banner1.png')} name="big" /> */}
        {/* <Banner srcimg={require('./assets/images/banner1.png')} name="big" /> */}
        <IconContainer name="circle" data={circleIconData} />
        <Banner srcimg={require('./assets/images/layer2.1.png')} name="small" />
        <PacksBanner />
        <MovieContainer />
        <ContainerList
          data={newsData}
          renderFunction={NewsRenderFunction}
          sectionName="Newa Channel Live"
        />
        <Image
          style={{marginTop: 50, width: '100%', marginBottom: 30}}
          source={require('./assets/images/poster.jpeg')}
        />
        <Image
          style={{
            marginTop: 20,
            width: '100%',
            marginBottom: 30,
            height: 80,
            resizeMode: 'cover',
          }}
          source={require('./assets/images/raftar.jpeg')}
        />
        <ContainerList
          data={musicData}
          renderFunction={MusicRenderFunction}
          sectionName="Trending Music"
        />
        <ContainerList
          data={gameData}
          renderFunction={GameRenderFunction}
          sectionName="enjoy-non stop gaming"
        />
        <Posters />
        <NewConntion />
        <ContainerList
          data={ottData}
          renderFunction={ottRenderFunction}
          sectionName="featured offer for you"
        />
        <ContainerList
          data={helpData}
          renderFunction={helpRenderFunction}
          sectionName="help and support"
        />
        <View>
          <Text style={styles.text}>SO COOL!</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default MyAccount;

const styles = StyleSheet.create({
  text: {
    color: 'red',
    textAlign: 'center',
    fontSize: 50,
    fontFamily: 'sans-serif-medium',
    marginBottom: 20,
    fontWeight: 'bold',
  },
});
