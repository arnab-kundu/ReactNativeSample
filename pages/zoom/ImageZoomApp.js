import ImageView from 'react-native-image-view';
import { useState } from 'react';
import { Animated } from 'react-native';

const images = [
  {
    source: {
      uri: 'https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg',
    },
    title: 'Paris',
    width: 806,
    height: 720,
  },
  {
    source: {
      uri: 'https://user-images.githubusercontent.com/4661784/56037265-88219f00-5d37-11e9-95ef-9cb24be0190e.png',
    },
    title: 'React native',
    width: 806,
    height: 720,
  },
  {
    source: {
      uri: 'https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg',
    },
    title: 'Paris',
    width: 806,
    height: 720,
  },
];

export const ImageZoomApp = () => {
  return (
    <ImageView
      images={images}
      imageIndex={0}
      isVisible={true}
    />
  );
}