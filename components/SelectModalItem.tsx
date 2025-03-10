import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type ItemType = {
  id: number;
  country: string;
  countryCode: string;
  flag: ImageSourcePropType;
};

type SelecModalItemType = {
  item: ItemType;
  onPress: () => void;
};

const SelectModalItem = ({ item, onPress }: SelecModalItemType) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={stlyes.itemWrapper}>
        <Image source={item.flag} />
        <Text style={stlyes.countryName}>{item.country}</Text>
        <Text>{item.countryCode}</Text>
      </View>
    </TouchableOpacity>
  );
};

const stlyes = StyleSheet.create({
  itemWrapper: {
    display: "flex",
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    gap: 10,
  },
  countryName: {
    color: "#000",
  },
});

export default SelectModalItem;
