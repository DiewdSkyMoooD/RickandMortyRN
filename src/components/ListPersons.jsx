import { StyleSheet, FlatList } from "react-native";
import Constant from "expo-constants";
import React, { useEffect, useState } from "react";
import Person from "./Person";
import RenderLoader from "./RenderLoader";

const ListPersons = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const getPersons = () => {
    if (loading) return;
    setLoading(true);
    fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
      .then((res) => res.json())
      .then((res) => {
        setData([...data, ...res.results]);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPersons();
  }, [currentPage]);

  const renderPersons = ({ item: person }) => {
    return <Person {...person}></Person>;
  };

  const loadMorePersons = () => {
    if (loading) return;
    setCurrentPage(currentPage + 1);
  };

  return (
    <FlatList
      style={styles.list_persons}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderPersons}
      ListFooterComponent={loading ? RenderLoader : null}
      onEndReached={loadMorePersons}
      onEndReachedThreshold={0.05}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  list_persons: {
    marginTop: Constant.statusBarHeight,
    backgroundColor: "black",
  },
});

export default ListPersons;
