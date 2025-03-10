import { MaterialIcons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableHighlight,
  Pressable,
  TouchableOpacity,
  SectionList,
} from "react-native";
import { useFocusEffect } from "expo-router";
import { FlatList, BackHandler } from "react-native";
import { SEARCH_FILTERS } from "@/data/searchFilters";

const Search = ({ recentSearches, categories }) => {
  const [searchActive, setSearchActive] = useState(false);
  const [searchCategory, setSearchCategory] = useState(SEARCH_FILTERS[0].id);
  const inputRef = useRef(null);

  //Return to Browse screen on back button when the input is still focused
  useFocusEffect(() => {
    const onBackPress = () => {
      if (searchActive) {
        setSearchActive(false);
        if (inputRef && inputRef.current) inputRef.current.blur();
        return true;
      }
      return false;
    };

    BackHandler.addEventListener("hardwareBackPress", onBackPress);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", onBackPress);
  });

  const searchList = [
    {
      id: 1,
      title: "Recent searches",
      data: recentSearches,
    },
    {
      id: 2,
      title: "Top Categories",
      data: categories,
    },
  ];

  return (
    <View style={{ height: searchActive ? "100%" : "auto" }}>
      <View style={{ paddingHorizontal: 20 }}>
        <View style={styles.searchWrapper}>
          <TouchableOpacity
            onPress={() => {
              if (searchActive) setSearchActive(false);
              if (inputRef && inputRef.current) inputRef.current.blur();
            }}
          >
            <MaterialIcons
              color={"black"}
              size={24}
              name={searchActive ? "arrow-back" : "search"}
            />
          </TouchableOpacity>
          <TextInput
            ref={inputRef}
            style={styles.input}
            placeholder="Food, shopping, drinks, etc"
            placeholderTextColor="#000"
            onFocus={() => setSearchActive(true)}
          />
        </View>
      </View>
      {searchActive && (
        <View style={styles.searchContainer}>
          <View>
            <FlatList
              data={SEARCH_FILTERS}
              renderItem={({ item }) => (
                <SearchFilterItem
                  item={item}
                  onPress={() => {
                    setSearchCategory(item.id);
                  }}
                  selectedItem={searchCategory}
                />
              )}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={{ paddingHorizontal: 30, paddingBottom: 115 }}>
            <SectionList
              sections={searchList}
              keyExtractor={(item, index) => item.id}
              renderItem={({ item }) => {
                return <SearchCategoryItem item={item} onPress={() => {}} />;
              }}
              renderSectionHeader={({ section: { title } }) => {
                return <Text style={styles.searchSectionHeader}>{title}</Text>;
              }}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      )}
    </View>
  );
};

const SearchFilterItem = ({ item, selectedItem, onPress }) => {
  const { id, name } = item;
  return (
    <Pressable onPress={onPress}>
      <View
        style={[
          styles.itemWrapper,
          selectedItem === item.id ? styles.activeItem : null,
        ]}
      >
        <Text>{name}</Text>
      </View>
    </Pressable>
  );
};

const SearchCategoryItem = ({ item, onPress }) => {
  return (
    <View style={styles.searchCategoryItemWrapper}>
      <MaterialIcons color={"black"} size={24} name={"search"} />
      <Text style={styles.searchCategoryItemName}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    position: "absolute",
    top: 65,
    bottom: 0,
    flex: 1,
    height: "50%",
  },
  searchWrapper: {
    backgroundColor: "#EEEEEE",
    width: "100%",
    height: 45,
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 100,
    paddingHorizontal: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: "80%",
    color: "#000",
  },
  itemWrapper: {
    padding: 15,
    borderBottomWidth: 5,
    borderColor: "#E8E8E8",
  },
  activeItem: {
    borderColor: "#000",
  },
  searchCategoryItemWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 22,
    marginTop: 12,
  },
  searchCategoryItemName: {
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    width: "100%",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 500,
  },
  searchSectionHeader: {
    marginVertical: 16,
    fontSize: 14,
    color: "#6B6B6B",
  },
});

export const screenOptions = {
  gestureEnabled: false,
};

export default Search;
