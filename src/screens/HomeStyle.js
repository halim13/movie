import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  search: {
    flex: 5,
    paddingRight: 10,
    borderBottomWidth: 0,
  },
  noBorder: {borderBottomWidth: 0},
  textSearch: {fontSize: 17},
  backTrans: {color: 'rgba(0,0,0,0.4)'},
  backHeader: {backgroundColor: '#ff8f00', height: 55},
  row: {flexDirection: 'row'},
  white: {color: '#fff'},
  menu: {color: '#fff', paddingLeft: 3, paddingTop: 11},
  searchIcon: {padding: 15, fontSize: 25},
  MainContainer: {
    paddingLeft: 4,
    backgroundColor: '#eee',
    flex: 1,
  },
  alignCenterSelf: {
    alignSelf: 'center',
  },
  searchText: {fontWeight: 'bold', fontSize: 17, marginHorizontal: 15},
  badgeButton: {marginRight: 3},
  badgeList: {
    paddingHorizontal: 5,
    marginTop: 5,
    flexDirection: 'row',
  },
  badge: {
    marginHorizontal: 4,
    marginTop: 3,
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  badgeInActive: {backgroundColor: '#999'},
  badgeActive: {backgroundColor: '#555'},
  imageThumbnail: {
    backgroundColor: '#fff',
    height: 260,
    width: 160,
  },
  image: {
    height: 210,
    width: '100%',
  },
  textTitle: {fontWeight: 'bold', fontSize: 15, margin: 5},
  flatListItem: {
    flexDirection: 'column',
    // margin: 5,
    marginHorizontal: 5,
    marginBottom: 10,
  },
  wrap: {
    flex: 1,
    // marginBottom: 5,
    flexWrap: 'wrap',
  },
  backButton: {fontSize: 25, marginRight: 10},
  allCenter: {justifyContent: 'center', flex: 1},
});

export default styles;
