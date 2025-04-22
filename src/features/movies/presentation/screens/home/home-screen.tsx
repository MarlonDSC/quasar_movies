import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, ActivityIndicator } from 'react-native';
import { observer } from 'mobx-react-lite';
import { useMoviesStore } from '../../providers';
import { Movie } from '../../../data/models/movie';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../../App';
import { MoviePoster } from '../../components/atoms/movie-poster';
import { MovieLists } from '../../components/components/movie-list';

type HomeRouteProp = RouteProp<RootStackParamList, 'HomeScreen'>;

export const HomeScreen: React.FC = observer(() => {
  const route = useRoute<HomeRouteProp>();
  const movie = route.params?.movie;
  const scrollY = useRef(new Animated.Value(0)).current;
  const store = useMoviesStore();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const getData = async () => {
    await store.getContainers();
  };

  useEffect(() => {
    getData();
  }, []);

  const handleMoviePress = (movie: Movie) => {
    navigation.navigate('HomeScreen', { movie });
  };

  // Header animations
  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [0, -50],
    extrapolate: 'clamp',
  });

  if (store.isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#F5C518" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        contentContainerStyle={styles.scrollContent}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      >
        {movie && (
          <MoviePoster 
            movie={movie} 
            opacity={headerOpacity} 
            translateY={headerTranslateY}
            ranking="#1 in Movies Today"
          />
        )}
        <MovieLists onMoviePress={handleMoviePress} />
      </Animated.ScrollView>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContent: {
    paddingBottom: 40,
  },
});