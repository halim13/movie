import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Container, Button, Icon, Title, Item, Input, Picker} from 'native-base';
import {
  StatusBar,
  FlatList,
  Text,
  View,
  ImageBackground,
  Modal,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
import styles from './HomeStyle';

const home = ({navigation}) => {
  const [searchMenu, setSearchMenu] = useState(false);
  const [search, setSearch] = useState('');
  const [Loading, setLoading] = useState(true);
  const [status, setStatus] = useState('');
  const [type, setType] = useState('anime');
  const [genre, setGenre] = useState('');
  const [season, setSeason] = useState('');
  const [year, setYear] = useState('');

  const [dataSource, setDataSource] = useState('');

  useEffect(() => {
    getListAnime();
  }, []);

  const getListAnime = async () => {
    setLoading(true);
    await axios
      .get(`https://api.jikan.moe/v3/season/2020/winter`)
      .then(res => {
        const results = res.data.anime.filter(result => {
          const month = result.airing_start
            ? result.airing_start.split('-')[1]
            : null;
          return (
            result.r18 === false &&
            (month === '01' || month === '02' || month === '03')
          );
        });
        // results.sort((a, b) => {
        //   return a - b;
        // });
        // console.log(res.data.anime);
        // setDataSource(res.data.anime);
        console.log(results.length);
        setDataSource(results);
      })
      .catch(err => {
        alert(err);
      });
    setLoading(false);
  };
  const changeSearchMenu = () => {
    const searchVal = searchMenu;
    setSearchMenu(!searchVal);
  };
  const changeSeason = value => {
    setSeason(value);
  };
  const changeYear = value => {
    setYear(value);
  };
  const changeGenre = value => {
    setGenre(value);
  };
  const changeSearch = value => {
    setSearch(value);
  };
  const changeType = value => {
    setType(value);
  };
  const changeStatus = value => {
    setStatus(value);
  };

  return (
    <>
      <StatusBar backgroundColor="#c56000" barStyle="light-content" />
      {Loading ? (
        <View style={styles.allCenter}>
          <ActivityIndicator size={50} color="#c56000" />
        </View>
      ) : (
        <Container>
          <Modal
            animationType="slide"
            transparent={false}
            visible={searchMenu}
            onRequestClose={() => {
              changeSearchMenu();
            }}>
            <View style={{marginTop: 0, marginHorizontal: 10}}>
              <View>
                {/* <View style={styles.badgeList}>
                <Button transparent style={styles.badgeButton}>
                  <Badge style={styles.badgeActive}>
                    <Text style={styles.badge}>All</Text>
                  </Badge>
                </Button>
                <Button transparent style={styles.badgeButton}>
                  <Badge style={styles.badgeInActive}>
                    <Text style={styles.badge}>Action</Text>
                  </Badge>
                </Button>
              </View> */}
                {/* <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={text => setSearch(text)}
                value={search}
              /> */}
                <Item>
                  <Input placeholder="Search Title Here" />
                </Item>
                {/* <Item style={styles.search}>
                <Input
                  placeholder="Search here"
                  placeholderTextColor="rgba(0,0,0,0.4)"
                />
                <Icon
                  name="search"
                  style={styles.backTrans}
                  // onPress={changeSearchMenu}
                />
              </Item> */}
                <View style={styles.row}>
                  <Item style={[styles.noBorder]}>
                    <Text style={styles.textSearch}>Genre : </Text>
                  </Item>
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{width: undefined, flex: 1}}
                    selectedValue={genre}
                    onValueChange={value => changeGenre(value)}>
                    <Picker.Item label="All" value="" />
                    <Picker.Item label="Action" value="1" />
                    <Picker.Item label="Adventure" value="2" />
                  </Picker>
                </View>

                <View style={styles.row}>
                  <Item style={styles.noBorder}>
                    <Text style={styles.textSearch}>Season : </Text>
                  </Item>
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{width: undefined}}
                    selectedValue={season}
                    onValueChange={value => changeSeason(value)}>
                    <Picker.Item label="All" value="all" />
                    <Picker.Item label="Winter" value="winter" />
                    <Picker.Item label="Spring" value="spring" />
                    <Picker.Item label="Summer" value="summer" />
                    <Picker.Item label="Fall" value="fall" />
                  </Picker>
                </View>

                <View style={styles.row}>
                  <Item style={styles.noBorder}>
                    <Text style={styles.textSearch}>Year : </Text>
                  </Item>
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{width: undefined}}
                    selectedValue={year}
                    onValueChange={value => changeYear(value)}>
                    <Picker.Item label="All" value="" />
                    <Picker.Item label="1917" value="1917" />
                    <Picker.Item label="2017" value="2017" />
                    <Picker.Item label="2018" value="2018" />
                    <Picker.Item label="2019" value="2019" />
                    <Picker.Item label="2020" value="2020" />
                  </Picker>
                </View>

                <View style={styles.row}>
                  <Item style={styles.noBorder}>
                    <Text style={styles.textSearch}>Status : </Text>
                  </Item>
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{width: undefined}}
                    selectedValue={status}
                    onValueChange={value => changeStatus(value)}>
                    <Picker.Item label="All" value="" />
                    <Picker.Item label="Airing" value="airing" />
                    <Picker.Item label="Complete" value="complete" />
                    <Picker.Item label="Upcoming" value="upcoming" />
                  </Picker>
                </View>

                <Button
                  onPress={changeSearchMenu}
                  rounded
                  warning
                  style={styles.alignCenterSelf}>
                  <Text style={styles.searchText}>Search</Text>
                </Button>
              </View>
            </View>
          </Modal>
          <View style={[styles.backHeader, styles.row]}>
            <Button transparent>
              <Icon name="menu" style={styles.menu} />
            </Button>
            {/* {searchMenu ? (
            <>
              <Item style={styles.search}>
                <Icon name="ios-search" style={styles.backTrans} />
                <Input
                  placeholder="Search"
                  placeholderTextColor="rgba(0,0,0,0.4)"
                />
                <Icon
                  name="close"
                  style={styles.backTrans}
                  onPress={changeSearchMenu}
                />
              </Item>
            </>
          ) : (
            <> */}
            <Item style={styles.search}>
              <Title>Anime List</Title>
            </Item>
            <Icon
              name="search"
              style={[styles.backTrans, styles.searchIcon]}
              onPress={changeSearchMenu}
            />
            {/* </>
          )} */}
          </View>
          <View style={styles.MainContainer}>
            <FlatList
              columnWrapperStyle={
                searchMenu
                  ? [styles.wrap, {marginTop: 10}]
                  : [styles.wrap, {marginTop: 10}]
              }
              data={dataSource}
              renderItem={({item}) => (
                <TouchableWithoutFeedback
                  onPress={() => {
                    navigation.navigate('Single', {id: item.mal_id});
                  }}>
                  <View style={styles.flatListItem}>
                    <View style={styles.imageThumbnail}>
                      <ImageBackground
                        source={{
                          uri: item.image_url,
                        }}
                        style={styles.image}>
                        {/* <View style={{alignItems: 'flex-end', margin: 5}}>
                      <Icon
                        name="heart"
                        style={{fontSize: 35, color: 'grey'}}
                      />
                    </View> */}
                      </ImageBackground>
                      <Text numberOfLines={2} style={styles.textTitle}>
                        {item.title}
                      </Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              )}
              //Setting the number of column
              numColumns={100}
              keyExtractor={(item, index) => index}
            />
          </View>
        </Container>
      )}
    </>
  );
};

export default home;
