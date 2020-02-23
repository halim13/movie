import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  search: {
    flex: 5,
    paddingRight: 10,
    borderBottomWidth: 0,
  },
  image: {
    height: 350,
    resizeMode: 'cover',
  },
  ratingContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFBB27',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    right: 20,
    bottom: 25,
  },
  ratingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  header: {
    marginHorizontal: 20,
    top: -50,
  },
  row: {flexDirection: 'row'},
  poster: {
    width: 126,
    height: 177,
    top: 30,
    borderRadius: 10,
  },
  posterContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
  info: {
    marginLeft: 20,
    marginTop: 25,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  textType: {
    fontWeight: '400',
    color: '#B4B9C5',
    marginBottom: 5,
  },
  subHeader: {fontWeight: 'bold', fontSize: 17, color: '#B4B9C5'},
  summary: {lineHeight: 25},
  genresContainer: {
    marginRight: 5,
    backgroundColor: '#FFBB27',
    height: 25,
    borderRadius: 5,
    justifyContent: 'center',
  },
  genreText: {paddingHorizontal: 5, color: '#FFF'},
  mb5: {marginBottom: 5},
});

export default styles;
