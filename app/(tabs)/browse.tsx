import { useState } from "react";
import Search from "@/components/ui/Search";
import { FlatList, SectionList, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { RECENT_SEARCHES } from "@/data/recentSearches";
import { CATEGORIES } from "@/data/categories";
import BrowseCard from "@/components/browseCard";

export default function Browse() {
  const [searchItem, setSearchItem] = useState("");

  const { topSix, remaining } = getCategoriesToDisplay(CATEGORIES);

  const browseDataToDisplay = [
    {
      id: 1,
      title: "Top categories",
      data: topSix,
    },
    {
      id: 2,
      title: "All categories",
      data: remaining,
    },
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          height: "100%",
          width: "100%",
          position: "relative",
          backgroundColor: "#FFF",
        }}
      >
        <View style={{ width: "100%" }}>
          <Search categories={CATEGORIES} recentSearches={RECENT_SEARCHES} />

          <View style={styles.browserWrapper}>
            <FlatList
              data={browseDataToDisplay}
              renderItem={({ item }) => {
                return (
                  <>
                    <Text style={styles.title}>{item.title}</Text>
                    <FlatList
                      data={item.data}
                      renderItem={({ item }) => (
                        <BrowseCard image={item.img} title={item.name} />
                      )}
                      keyExtractor={(item) => item.id.toString()}
                      numColumns={2}
                      columnWrapperStyle={{ gap: 12 }}
                      showsVerticalScrollIndicator={false}
                    />
                  </>
                );
              }}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const getCategoriesToDisplay = (categories) => {
  const sortedCategories = [...categories].sort(
    (a, b) => b.searched - a.searched
  );
  const topSixSorted = sortedCategories.slice(0, 6);
  const remainingCategories = categories.filter(
    (item) => !topSixSorted.some((topItem) => topItem.id === item.id)
  );
  return {
    topSix: topSixSorted,
    remaining: remainingCategories,
  };
};

const styles = StyleSheet.create({
  browserWrapper: {
    paddingHorizontal: 20,
    backgroundColor: "#FFF",
    height: "100%",
    paddingBottom: 150,
  },
  title: {
    fontSize: 24,
    lineHeight: 36,
    fontWeight: 500,
    marginTop: 11,
    marginBottom: 16,
  },
});
