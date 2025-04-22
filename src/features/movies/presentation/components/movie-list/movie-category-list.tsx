import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { observer } from 'mobx-react-lite';
import { useMoviesStore } from '../../providers';
import { Movie } from '../../../data/models/movie';
import { AspectRatio, ContainerId } from '../../../../../core/types';

interface MovieCategoryListProps {
  title: string;
  containerType: ContainerId;
  aspectRatio: AspectRatio;
  onMoviePress?: (movie: Movie) => void;
}

export const MovieCategoryList: React.FC<MovieCategoryListProps> = observer(({
  title,
  containerType,
  aspectRatio,
  onMoviePress
}) => {
  const store = useMoviesStore();
  const movies = store.filterMoviesByContainerId(containerType);

  useEffect(() => {
    if (store.containers.length === 0 && !store.isLoading) {
      store.getContainers();
    }
  }, [store]);

  const renderMovie = ({ item }: { item: Movie }) => {
    return (
      <TouchableOpacity
        style={aspectRatio === AspectRatio.PORTRAIT ? styles.portraitMovie : styles.landscapeMovie}
        onPress={() => onMoviePress?.(item)}
      >
        <Image
          source={{ uri: item.posters.portrait.url }}
          style={{ aspectRatio: aspectRatio, borderRadius: 20 }}
          resizeMode="stretch"
        />
      </TouchableOpacity>
    );
  };

  if (store.isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (store.error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {store.error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {movies.length > 0 ? (
        <FlatList
          data={movies}
          renderItem={renderMovie}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No movies found</Text>
        </View>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  loadingContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorContainer: {
    padding: 20,
    backgroundColor: '#ffeeee',
    borderRadius: 8,
  },
  errorText: {
    color: '#ff0000',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    marginLeft: 16,
    color: '#fff',
  },
  listContent: {
    paddingHorizontal: 16,
  },
  portraitMovie: {
    marginRight: 12,
    width: 140,
    height: 210,
  },
  landscapeMovie: {
    marginRight: 12,
    width: 210,
    height: 140,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  year: {
    fontSize: 12,
    color: '#666',
  },
  emptyContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    color: '#666',
    textAlign: 'center',
  },
}); 