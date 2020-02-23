import React, {useState, useEffect} from 'react';
import {Text, View, ActivityIndicator, ScrollView, Image} from 'react-native';
import {Button, Item, Title} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';

import homeStyles from './HomeStyle';
import styles from './SingleStyle';

const Single = ({route, navigation}) => {
  const [details, setDetails] = useState('');
  useEffect(() => {
    const id = route.params?.id;
    if (id) {
      axios
        .get(`https://api.jikan.moe/v3/anime/${id}/`)
        .then(res => {
          setDetails(res.data);
        })
        .catch(err => {
          alert(err);
        });
    }
  }, []);
  const formatDate = date => {
    var monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  };

  return (
    <>
      {!details ? (
        <View style={homeStyles.allCenter}>
          <ActivityIndicator size={50} color="#c56000" />
        </View>
      ) : (
        <>
          <View style={[homeStyles.backHeader, homeStyles.row]}>
            <Button transparent onPress={() => navigation.navigate('Home')}>
              <MaterialCommunityIcons
                name="arrow-left"
                style={[homeStyles.menu, homeStyles.backButton]}
              />
            </Button>
            <Item style={homeStyles.search}>
              <Title>{details.title}</Title>
            </Item>
          </View>
          <ScrollView>
            <View style={{height: 30}} />
            <View style={styles.header}>
              <View style={styles.row}>
                <View style={styles.posterContainer}>
                  <Image
                    style={styles.poster}
                    source={{uri: details.image_url}}
                  />
                </View>
                <View style={styles.info}>
                  <Text style={styles.title} numberOfLines={2}>
                    {details.title}
                  </Text>
                  {/* <Text style={styles.textType}>Source {details.source}</Text> */}
                  <Text style={styles.mb5}>Type: {details.type}</Text>
                  <Text style={styles.mb5}>Source: {details.source}</Text>
                  <Text style={styles.mb5}>Rating: {details.rating}</Text>
                  <Text style={styles.mb5}>Score: {details.score}</Text>
                  <Text style={styles.mb5}>Episodes: {details.episodes}</Text>
                  <Text style={styles.mb5}>Status: {details.status}</Text>
                  <Text>Start: {formatDate(new Date(details.aired.from))}</Text>
                  <Text>
                    End:{' '}
                    {details.episodes === 1
                      ? formatDate(new Date(details.aired.from))
                      : details.aired.to
                      ? formatDate(new Date(details.aired.to))
                      : '-'}
                  </Text>
                </View>
              </View>
              <View>
                <Text style={[styles.subHeader, {marginBottom: 10}]}>
                  Genres:
                </Text>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <View style={homeStyles.row}>
                    {details.genres.length > 0 ? (
                      details.genres.map((genre, index) => (
                        <View key={index} style={styles.genresContainer}>
                          <Text style={styles.genreText}>{genre.name}</Text>
                        </View>
                      ))
                    ) : (
                      <Text>No Genre</Text>
                    )}
                  </View>
                </ScrollView>
              </View>
              <Text
                style={[styles.subHeader, {marginTop: 20, marginBottom: 5}]}>
                Summary:
              </Text>
              <Text style={styles.summary}>{details.synopsis}</Text>
            </View>
          </ScrollView>
        </>
      )}
    </>
  );
};

export default Single;
