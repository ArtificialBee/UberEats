import {
  FlatList,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SelectModalItem from "./SelectModalItem";

type ItemType = {
  id: number;
  country: string;
  countryCode: string;
  flag: ImageSourcePropType;
};

type SelectModalType = {
  openModal: boolean;
  items: ItemType[];
  setValue: (item: ItemType) => void;
  closeModal: () => void;
};

const SelectModal = ({
  openModal,
  items,
  setValue,
  closeModal,
}: SelectModalType) => {
  return (
    <>
      {openModal && (
        <View style={styles.screenOverlay}>
          <View style={styles.modalWrapper}>
            <FlatList
              data={items}
              renderItem={({ item, index }) => (
                <SelectModalItem
                  item={item}
                  onPress={() => {
                    setTimeout(() => {
                      setValue(items[index]);
                      closeModal();
                    }, 200);
                  }}
                />
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  screenOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 50,
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalWrapper: {
    width: 300,
    maxHeight: 300,
    backgroundColor: "#FFF",
    zIndex: 50,
  },
});

export default SelectModal;
