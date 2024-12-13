import React from "react";
import { StyleSheet, View, Dimensions, Text, Image, ScrollView } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function DetailScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View style={styles.tripadealimage}>
          <Image source={require('../imagess/tad_qff_1.png')} style={styles.companyname} />
        </View>

        <View style={styles.Box1}>
          <View style={styles.BoxImage}>
            <Image source={require('../imagess/image1.jpg')} style={styles.image1} />
            <View style={styles.textBox}>
              <Text style={styles.paragraph}>
                Good Food,great winde,iconic,landmarks and awe-inspring vistas
                that'll make your heart skip a beat; italy us everything you could
                want from a Mediterranean holiday rolled into one .From Rome to
                venice, sicily to milan,you'll be living La Dolce Vita in no time
              </Text>
            </View>
          </View>
        </View>


        <View style={styles.HeadingsName}>
          <Text style={styles.AvailabeName}>
            Available Deals
          </Text>

          <View style={styles.SortName}>
            <Text style={styles.SortName}>
              sort
            </Text>
          </View>

        </View>


        <View style={styles.tourBox}>
          <View style={styles.tourImage}>
            <Image source={require('../imagess/image2.jpg')}
              style={styles.tourimage2}
            />
          </View>
          <View style={styles.iconsBox}>
            <View style={styles.icon1}>
              <Image source={require('../imagess/badge-flight.png')}
                style={styles.icon1Image}
              />

            </View>
            <View style={styles.icon1}>
              <Image source={require('../imagess/badge-flight.png')}
                style={styles.icon1Image}
              />

            </View>

            <View style={styles.icon1}>
              <Image source={require('../imagess/badge-flight.png')}
                style={styles.icon1Image}
              />
            </View>


            <View style={[styles.icon1, styles.lastIcon]}>
              <Image source={require('../imagess/badge-flight.png')}
                style={styles.icon1Image}
              />
            </View>



          </View>
          <View style={[styles.icon1, styles.bottomLast]}>
            <Image source={require('../imagess/badge-flight.png')}
              style={styles.icon1Image}
            />
          </View>


        </View>
        <View style={styles.CardPlace}>
          <View style={styles.CardCountryName}>
            <Text>
              Magnificent Mediterranean{"\n"} Voyage
            </Text>
          </View>

          <View style={styles.CardCost}>
            <Text>
              $7999
            </Text>
          </View>
        </View>


        <View style={styles.tourBox}>
          <View style={styles.tourImage}>
            <Image source={require('../imagess/image3.jpg')}
              style={styles.tourimage2}
            />
          </View>
          <View style={styles.iconsBox}>
            <View style={styles.icon1}>
              <Image source={require('../imagess/badge-flight.png')}
                style={styles.icon1Image}
              />

            </View>
            <View style={styles.icon1}>
              <Image source={require('../imagess/badge-flight.png')}
                style={styles.icon1Image}
              />

            </View>

            <View style={styles.icon1}>
              <Image source={require('../imagess/badge-flight.png')}
                style={styles.icon1Image}
              />
            </View>


            <View style={[styles.icon1, styles.lastIcon]}>
              <Image source={require('../imagess/badge-flight.png')}
                style={styles.icon1Image}
              />
            </View>



          </View>
          <View style={[styles.icon1, styles.bottomLast]}>
            <Image source={require('../imagess/badge-flight.png')}
              style={styles.icon1Image}
            />
          </View>


        </View>
        <View style={styles.CardPlace}>
          <View style={styles.CardCountryName}>
            <Text>
              Magnificent Mediterranean{"\n"} Voyage
            </Text>
          </View>

          <View style={styles.CardCost}>
            <Text>
              $7999
            </Text>
          </View>
        </View>



        <View style={styles.tourBox}>
          <View style={styles.tourImage}>
            <Image source={require('../imagess/image4.jpg')}
              style={styles.tourimage2}
            />
          </View>
          <View style={styles.iconsBox}>
            <View style={styles.icon1}>
              <Image source={require('../imagess/badge-flight.png')}
                style={styles.icon1Image}
              />

            </View>
            <View style={styles.icon1}>
              <Image source={require('../imagess/badge-flight.png')}
                style={styles.icon1Image}
              />

            </View>

            <View style={styles.icon1}>
              <Image source={require('../imagess/badge-flight.png')}
                style={styles.icon1Image}
              />
            </View>


            <View style={[styles.icon1, styles.lastIcon]}>
              <Image source={require('../imagess/badge-flight.png')}
                style={styles.icon1Image}
              />
            </View>



          </View>
          <View style={[styles.icon1, styles.bottomLast]}>
            <Image source={require('../imagess/badge-flight.png')}
              style={styles.icon1Image}
            />
          </View>


        </View>
        <View style={styles.CardPlace}>
          <View style={styles.CardCountryName}>
            <Text>
              Magnificent Mediterranean{"\n"} Voyage
            </Text>
          </View>

          <View style={styles.CardCost}>
            <Text>
              $7999
            </Text>
          </View>
        </View>



        <View style={styles.tourBox}>
          <View style={styles.tourImage}>
            <Image source={require('../imagess/image5.jpg')}
              style={styles.tourimage2}
            />
          </View>
          <View style={styles.iconsBox}>
            <View style={styles.icon1}>
              <Image source={require('../imagess/badge-flight.png')}
                style={styles.icon1Image}
              />

            </View>
            <View style={styles.icon1}>
              <Image source={require('../imagess/badge-flight.png')}
                style={styles.icon1Image}
              />

            </View>

            <View style={styles.icon1}>
              <Image source={require('../imagess/badge-flight.png')}
                style={styles.icon1Image}
              />
            </View>


            <View style={[styles.icon1, styles.lastIcon]}>
              <Image source={require('../imagess/badge-flight.png')}
                style={styles.icon1Image}
              />
            </View>



          </View>
          <View style={[styles.icon1, styles.bottomLast]}>
            <Image source={require('../imagess/badge-flight.png')}
              style={styles.icon1Image}
            />
          </View>


        </View>
        <View style={styles.CardPlace}>
          <View style={styles.CardCountryName}>
            <Text>
              Magnificent Mediterranean{"\n"} Voyage
            </Text>
          </View>

          <View style={styles.CardCost}>
            <Text>
              $7999
            </Text>
          </View>
        </View>

        <View style={styles.tourBox}>
          <View style={styles.tourImage}>
            <Image source={require('../imagess/image6.jpg')}
              style={styles.tourimage2}
            />
          </View>
          <View style={styles.iconsBox}>
            <View style={styles.icon1}>
              <Image source={require('../imagess/badge-flight.png')}
                style={styles.icon1Image}
              />

            </View>
            <View style={styles.icon1}>
              <Image source={require('../imagess/badge-flight.png')}
                style={styles.icon1Image}
              />

            </View>

            <View style={styles.icon1}>
              <Image source={require('../imagess/badge-flight.png')}
                style={styles.icon1Image}
              />
            </View>


            <View style={[styles.icon1, styles.lastIcon]}>
              <Image source={require('../imagess/badge-flight.png')}
                style={styles.icon1Image}
              />
            </View>



          </View>
          <View style={[styles.icon1, styles.bottomLast]}>
            <Image source={require('../imagess/badge-flight.png')}
              style={styles.icon1Image}
            />
          </View>


        </View>
        <View style={styles.CardPlace}>
          <View style={styles.CardCountryName}>
            <Text style={styles.countryName}>
              Magnificent Mediterranean{"\n"} Voyage
            </Text>
          </View>

          <View style={styles.CardCost}>
            <Text style={styles.countryCost}>
              $7999
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tripadealimage: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 5,

  },
  companyname: {
    width: 150,
    height: 150,
    resizeMode: 'contain',

  },
  Box1: {
    marginTop: "5%",
    alignItems: 'center',
    justifyContent: 'center',

  },
  BoxImage: {
    width: width * 0.9,
    height: height * 0.4,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  image1: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,

  },
  textBox: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    width: width * 0.9,

  },
  paragraph: {
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 12
  },

  HeadingsName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: '3%',
  },
  AvailabeName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  SortName: {
    fontSize: 16,
    color: '#007BFF',
    padding: 5,
  },
  tourBox: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center'
  },
  tourImage: {

  },
  tourimage2: {
    width: width * 0.9,
    height: height * 0.3,
    resizeMode: 'cover',
    borderRadius: 22
  },
  iconsBox: {
    position: 'absolute',
    left: 25,
    right: 0,
    top: 0,
    marginVertical: '2%',
    flexDirection: 'row',
    gap: 9,
  },
  icon1: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon1Image: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  lastIcon: {
    position: 'absolute',
    bottom: 0,
    right: 30,
  },

  bottomLast: {
    position: 'absolute',
    right: 30,
    bottom: 30,
    alignSelf: 'center',
  },
  CardPlace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '5%',
    backgroundColor: 'white',   
    width: width * 0.9,
    borderRadius: 10,           
    padding: 15,                
    shadowColor: '#000',         
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.1,          
    shadowRadius: 5,             
    elevation: 5,   
    alignItems: 'center',
    marginTop:'-5%'   
  },
  CardCountryName: {
    fontWeight: '900',          
  },
  countryName:{
      fontSize:16,
      fontWeight:'600'
  },
  countryCost:{
    fontSize:18,
    fontWeight:'600'
  },

  CardCost: {
    fontWeight: 'bold',          
    fontSize: 16,               
  }



});
