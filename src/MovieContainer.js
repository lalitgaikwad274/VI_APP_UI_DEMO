import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const MovieContainer = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/popular?page=2&api_key=0b95d03811a07be71328edc89b4dc265',
      )
      .then(res => {
        //   console.log(res.data.results);
        setMovieData(res.data.results.slice(0, 10));
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const renderItem = ({item, index}) => {
    // console.log(item.poster_path);
    return (
      <View style={styles.movieContainer}>
        <View>
          <Text style={styles.textIndex}>{index + 1}</Text>
        </View>
        <Image
          style={styles.imgStyle}
          source={{
            uri: `https://image.tmdb.org/t/p/w1280/${item.poster_path}`,
          }}
        />
      </View>
    );
  };

  return (
    <View style={{marginTop: 20}}>
      <Text style={styles.sectionText}>New Release</Text>

      <FlatList
        horizontal
        data={movieData}
        keyExtractor={key => key.id}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default MovieContainer;

const styles = StyleSheet.create({
  imgStyle: {
    height: 220,
    width: 150,
    resizeMode: 'cover',
    borderRadius: 10,
    margin: 10,
    marginLeft: 30,
  },
  movieContainer: {
    width: 200,
    flexDirection: 'row',
  },
  textIndex: {
    fontSize: 100,
    color: 'white',
    textShadowColor: 'red',
    textShadowRadius: 15,
    position: 'absolute',
    left: -1,
    zIndex: 1,
    fontWeight: 'bold',
    textShadowOffset: {width: -1, height: -1},
  },
  sectionText: {
    fontSize: 20,
    color: 'black',
    marginLeft: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});
