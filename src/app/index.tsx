import FoodCard from '@/components/FoodCard';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

// ข้อมูลรายการอาหาร
const foodList = [
  { id: '1', name: 'ข้าวกะเพราไก่ไข่ดาว', priceText: '50 บาท', priceValue: 50 },
  { id: '2', name: 'ข้าวหมูทอดกระเทียม', priceText: '45 บาท', priceValue: 45 },
  { id: '3', name: 'ข้าวผัดแหนม', priceText: '40 บาท', priceValue: 40 },
  { id: '4', name: 'บะหมี่เกี๊ยวน้ำ', priceText: '45 บาท', priceValue: 45 },
];

export default function HomeScreen() {
  const [likedIds, setLikedIds] = useState<string[]>([]);

  const toggleLike = (id: string) => {
    if (likedIds.includes(id)) {
      setLikedIds(likedIds.filter((item) => item !== id));
    } else {
      setLikedIds([...likedIds, id]);
    }
  };

  // กรองเฉพาะเมนูที่ถูกเลือก
  const result = foodList.filter((food) => likedIds.includes(food.id));

  // คำนวณราคารวม
  const totalPrice = result.reduce((sum, food) => sum + food.priceValue, 0);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>กินในงบ - Supanut</Text>

      {/* แถบแสดงสรุปราคารวม */}
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>เมนูที่เลือก: {likedIds.length} เมนู</Text>
        <Text style={styles.summaryText}>รวมเป็นเงิน: {totalPrice} บาท</Text>
      </View>

      {/* แสดงข้อความเตือนถ้ายัไม่ได้เลือกเมนู */}
      {result.length === 0 && (
        <Text style={styles.emptyText}>ไม่มีเมนูในงบนี้</Text>
      )}

      {/* วนลูปแสดงการ์ดอาหารทั้งหมด */}
      {foodList.map((item) => {
        const isLiked = likedIds.includes(item.id);
        return (
          <FoodCard
            key={item.id}
            name={item.name}
            price={item.priceText}
            isLiked={isLiked}
            onToggleLike={() => toggleLike(item.id)}
          />
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  summaryContainer: {
    backgroundColor: '#f0f4f8',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#d9e2ec',
  },
  summaryText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#334e68',
  },
  emptyText: {
    fontSize: 14,
    color: '#829ab1',
    marginVertical: 10,
    fontStyle: 'italic',
  },
});