import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Animated } from 'react-native';
import { Movie } from '../../../data/models/movie';

interface MoviePosterProps {
  movie: Movie;
  opacity: Animated.AnimatedInterpolation<number>;
  translateY?: Animated.AnimatedInterpolation<number>;
  ranking?: string;
}

export const MoviePoster: React.FC<MoviePosterProps> = ({ 
  movie, 
  opacity, 
  translateY = new Animated.Value(0), 
  ranking = "#1 in Movies Today" 
}) => {
  return (
    <Animated.View style={[styles.posterContainer, { opacity }]}>
      <ImageBackground
        source={{ uri: movie.posters?.thumbnail?.url }}
        style={styles.poster}
        imageStyle={styles.posterImage}
      >
        <View style={styles.posterOverlay}>
          <Animated.View style={[
            styles.header,
            { 
              opacity,
              transform: [{ translateY }]
            }
          ]}>
            <Text style={styles.title}>{movie.title}</Text>
            <View style={styles.metadataContainer}>
              <Text style={styles.metadata}>{movie.year?.toString()}</Text>
              <Text style={styles.metadata}>{movie.duration}</Text>
              <View style={styles.ratingPill}>
                <Text style={styles.ratingText}>{movie.rating}</Text>
              </View>
            </View>
            <View style={styles.rankingContainer}>
              <Text style={styles.tvIcon}>📺</Text>
              <Text style={styles.ranking}>{ranking}</Text>
            </View>
          </Animated.View>
        </View>
      </ImageBackground>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  posterContainer: {
    height: 500,
  },
  poster: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  posterImage: {
    resizeMode: 'cover',
  },
  posterOverlay: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 20,
    flex: 1,
    justifyContent: 'flex-end',
  },
  header: {
    zIndex: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0,0,0,0.7)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    marginBottom: 12,
    textAlign: 'center',
  },
  metadataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    justifyContent: 'center',
  },
  metadata: {
    fontSize: 16,
    color: '#FFFFFF',
    marginRight: 10,
    fontWeight: '500',
  },
  ratingPill: {
    backgroundColor: 'transparent',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  ratingText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  rankingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tvIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  ranking: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});