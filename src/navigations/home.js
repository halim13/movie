import React, {useState, useEffect} from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Item,
  Input,
} from 'native-base';
import {StyleSheet, StatusBar, FlatList, Text, Image, View} from 'react-native';

const home = () => {
  const [search, setSearch] = useState(false);
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      src: 'http://placehold.it/200x200?text=1',
    },
    {
      id: 2,
      src: 'http://placehold.it/200x200?text=2',
    },
    {
      id: 3,
      src: 'http://placehold.it/200x200?text=3',
    },
    {
      id: 4,
      src: 'http://placehold.it/200x200?text=4',
    },
    {
      id: 5,
      src: 'http://placehold.it/200x200?text=5',
    },
  ]);
  const changeSearch = () => {
    const searchVal = search;
    setSearch(!searchVal);
  };

  return (
    <>
      <StatusBar backgroundColor="#c56000" barStyle="light-content" />
      <Image
        source={{
          uri:
            'https://raw.githubusercontent.com/AboutReact/sampleresource/master/sample_img.png',
        }}
        style={{width: 400, height: 400, margin: 16}}
      />
      <Container>
        {search ? (
          <View style={[styles.backHeader, styles.row]}>
            <Button transparent>
              <Icon name="menu" style={styles.menu} />
            </Button>
            <Item style={styles.search}>
              <Icon name="ios-search" style={styles.backTrans} />
              <Input
                placeholder="Search"
                style={styles.white}
                placeholderTextColor="rgba(0,0,0,0.4)"
              />
              <Icon
                name="close"
                style={styles.backTrans}
                onPress={changeSearch}
              />
            </Item>
          </View>
        ) : (
          <Header style={styles.backHeader} androidStatusBarColor="#c56000">
            <Left>
              <Button transparent>
                <Icon name="menu" />
              </Button>
            </Left>
            <Body>
              <Title>Title</Title>
            </Body>
            <Right>
              <Button transparent onPress={changeSearch}>
                <Icon name="search" style={styles.backTrans} />
              </Button>
            </Right>
          </Header>
        )}

        <View style={styles.MainContainer}>
          <FlatList
            // data={dataSource}
            data={[
              {
                id: 5,
                src:
                  'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
              },
            ]}
            renderItem={({item}) => (
              <View style={styles.flatListItem}>
                <Text>{item.id}</Text>
                <Image style={styles.imageThumbnail} source={{uri: item.src}} />
              </View>
            )}
            //Setting the number of column
            numColumns={3}
            keyExtractor={(item, index) => index}
          />
        </View>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  search: {
    flex: 5,
    paddingRight: 10,
    borderBottomWidth: 0,
  },
  backTrans: {color: 'rgba(0,0,0,0.4)'},
  backHeader: {backgroundColor: '#ff8f00', height: 55},
  row: {flexDirection: 'row'},
  white: {color: '#fff'},
  menu: {color: '#fff', paddingLeft: 3, paddingTop: 11},
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 5,
  },

  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
  },
  flatListItem: {flex: 1, flexDirection: 'column', margin: 1},
});

export default home;
