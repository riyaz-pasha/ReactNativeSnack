// @ts-nocheck

import * as React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

type IconProps = {
  family: IconFamily;
  name: string;
  size: number;
  color?: string;
  testID?: string;
};

export const Icon: React.FC<IconProps> = ({
  size = 20,
  color = 'green',
  family = 'Feather',
  name = 'check-circle',
}) => {
  let VectorIcon;
  switch (family) {
    case 'Entypo':
      VectorIcon = Entypo;
      break;
    case 'EvilIcons':
      VectorIcon = EvilIcons;
      break;
    case 'Feather':
      VectorIcon = Feather;
      break;
    case 'FontAwesome':
      VectorIcon = FontAwesome;
      break;
    case 'Foundation':
      VectorIcon = Foundation;
      break;
    case 'Ionicons':
      VectorIcon = Ionicons;
      break;
    case 'MaterialCommunityIcons':
      VectorIcon = MaterialCommunityIcons;
      break;
    case 'MaterialIcons':
      VectorIcon = MaterialIcons;
      break;
    case 'Octicons':
      VectorIcon = Octicons;
      break;
    case 'SimpleLineIcons':
      VectorIcon = SimpleLineIcons;
      break;
    case 'Zocial':
      VectorIcon = Zocial;
      break;
    default:
      VectorIcon = Ionicons;
  }

  return <VectorIcon name={name} {...{ size, color }} />;
};

export default Icon;
