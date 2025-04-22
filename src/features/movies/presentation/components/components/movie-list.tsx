import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AspectRatio, ContainerId } from '../../../../../core/types';
import { MovieCategoryList } from '../movie-list';
import { Movie } from '../../../data/models/movie';

interface MovieListsProps {
  onMoviePress: (movie: Movie) => void;
}

export const MovieLists: React.FC<MovieListsProps> = ({ onMoviePress }) => {
  return (
    <View style={styles.container}>
      <MovieCategoryList
        title="You Might Like"
        containerType={ContainerId.YOU_MIGHT_LIKE}
        aspectRatio={AspectRatio.PORTRAIT}
        onMoviePress={onMoviePress}
      />
      <MovieCategoryList
        title="My List"
        containerType={ContainerId.MY_LIST}
        aspectRatio={AspectRatio.LANDSCAPE}
        onMoviePress={onMoviePress}
      />
      <MovieCategoryList
        title="Upcoming"
        containerType={ContainerId.UPCOMING}
        aspectRatio={AspectRatio.LANDSCAPE}
        onMoviePress={onMoviePress}
      />
      <MovieCategoryList
        title="Trending Now"
        containerType={ContainerId.TRENDING}
        aspectRatio={AspectRatio.LANDSCAPE}
        onMoviePress={onMoviePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
});