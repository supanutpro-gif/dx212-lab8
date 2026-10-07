import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type FoodCardProps = {
  name: string;
  price: string;
  isLiked: boolean;
  onToggleLike: () => void;
};

export default function FoodCard({ name, price, isLiked, onToggleLike }: FoodCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.foodName}>{name}</Text>
          <Text style={styles.price}>ราคา: {price}</Text>
        </View>
        
        <TouchableOpacity onPress={onToggleLike}>
          <Text style={styles.heartIcon}>{isLiked ? '❤️' : '🤍'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 8,
    marginVertical: 6,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  foodName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: 'gray',
    marginTop: 4,
  },
  heartIcon: {
    fontSize: 24,
  },
});