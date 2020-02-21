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
  View,
} from 'native-base';
import {StyleSheet, Text, ScrollView, StatusBar} from 'react-native';

const home = () => {
  const [search, setSearch] = useState(false);
  const changeSearch = () => {
    const searchVal = search;
    setSearch(!searchVal);
  };

  return (
    <>
      <StatusBar backgroundColor="#c56000" barStyle="light-content" />
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

        <ScrollView>
          <Text>cek</Text>
        </ScrollView>
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
});

export default home;
