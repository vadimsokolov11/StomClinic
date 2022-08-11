/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default function App() {
  const {
    container,
    title,
    avatar,
    fullname,
    GroupTitle,
    GroupItem,
    Group,
    GrayText,
    GroupDate,
  } = styles;

  return (
    <View style={container}>
      <View style={Group}>
        <View style={GroupTitle}>
          <Text style={title}>11 сентября</Text>
          <TouchableOpacity style={GroupItem}>
            <Image
              source={{
                uri: 'https://sun4-15.userapi.com/s/v1/ig2/mc9qxmhpK8aPVcwms_3ZbYPDDBgksz6Y4i4-PsdfSwBu5w56f6iw5I8z_KLYtdhRcPj8DoDut_bCRRXm4vn6ZG8R.jpg?size=200x299&quality=95&crop=148,548,1340,2008&ava=1',
              }}
              style={avatar}
            />
            <View style={{flex: 1}}>
              <Text style={fullname}>Анна Сахаров</Text>
              <Text style={GrayText}>Удаление себя</Text>
            </View>
            <View>
              <Text style={GroupDate}>12:30</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={GroupItem}>
            <Image
              source={{
                uri: 'https://sun4-15.userapi.com/s/v1/ig2/pfuc-1eW0YGTx_RYHdJGbqZyW17Pbhuo8hOoTFQRCojXPZOjlsJ2IdxnOZZenWk0JKgRR2z86DpUx2cRlDV1JWQq.jpg?size=100x100&quality=95&crop=60,224,1228,1228&ava=1',
              }}
              style={avatar}
            />
            <View style={{flex: 1}}>
              <Text style={fullname}>Никита Горбатых</Text>
              <Text style={GrayText}>Удаление жизни</Text>
            </View>
            <View>
              <Text style={GroupDate}>12:30</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={GroupItem}>
            <Image
              source={{
                uri: 'https://sun4-12.userapi.com/s/v1/ig2/76agnYcLa2d416CXpgxgYRnfv1EYnd9NF4-nfMTzW7QXDW2t11cKq8D-ReEKq3qo-C3eftP76liMxPRpQrEOZ1lS.jpg?size=200x200&quality=95&crop=1338,487,376,376&ava=1',
              }}
              style={avatar}
            />
            <View style={{flex: 1}}>
              <Text style={fullname}>Вадим Соколов</Text>
              <Text style={GrayText}>Удаление всего</Text>
            </View>
            <View>
              <Text style={GroupDate}>12:30</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  GroupDate: {
    //Время посещения
    //	backgroundColor: ${props => (props.active ? 'o9f5ff' : 'black')} ДОРАБОТАТЬ!!!
    borderRadius: 18,
    fontWeight: '600',
    color: '#4294FF',
    fontSize: 14,
    width: 70,
    height: 32,
    backgroundColor: '#o9f5ff',
    textAlign: 'center',
    lineHeight: 28,
  },

  GrayText: {
    //причина посещения
    fontSize: 16,
    color: '#8B979F',
  },

  fullname: {
    //фио пациента
    fontWeight: '600', // вес шрифта
    fontSize: 16, // размер шрифта
  },

  avatar: {
    //аватарка
    borderRadius: 50,
    width: 40,
    height: 40,
    marginRight: 15,
  },

  title: {
    //дата посещения
    fontWeight: '800', // вес шрифта
    fontSize: 22, // размер шрифта
  },

  GroupTitle: {
    // группа дат
    marginTop: 10, // отступ сверху
  },

  Group: {
    //группа пациенттов
    padding: 20,
  },

  GroupItem: {
    //группа пациента
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f3f3f3',
  },
  container: {
    //все приложение
    flex: 1,
    marginTop: 50, // отступ сверху
  },
});
