import { ScrollView, Text, View } from 'react-native';
import { styles } from './reviews.styles';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

interface Review {
  id: number;
  topic: string;
  status: string;
  date: string;
  study_id: number;
  user_id: number;
}

const MockReviews = [
  { id: 1, topic: "Spread operator - JavaScript", status: "todo", date: "2025-03-14", study_id: 0, user_id: 0 },
  { id: 2, topic: "Next.js fundamentals", status: "done", date: "2025-03-14", study_id: 0, user_id: 0 },
  { id: 3, topic: "Array methods", status: "todo", date: "2025-03-17", study_id: 0, user_id: 0 },
  { id: 4, topic: "Mutability vs Immutability in JS", status: "done", date: "2025-03-18", study_id: 0, user_id: 0 },
  { id: 5, topic: "Destructuring objects and arrays", status: "done", date: "2025-03-19", study_id: 0, user_id: 0 },
  { id: 6, topic: "JavaScript array iteration techniques", status: "todo", date: "2025-03-20", study_id: 0, user_id: 0 },
];

export default function Reviews () {
  const [reviews, setReviews] = useState<Review[]>(MockReviews);
  const [pastReviews, setPastReviews] = useState<Review[]>([]);

  const today = dayjs().startOf('day');

  useEffect(() => {
    const pastReviews = reviews?.filter((review: Review) => {
      return dayjs(review.date).startOf('day').isBefore(today);
    })

    setPastReviews(pastReviews);
  }, [reviews]);

  const formatDate = (date: string) => {
    return dayjs(date).format("DD/MM/YYYY");
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Revisões passadas</Text>
      {pastReviews.map((review: Review) => (
        <View key={review.id} style={styles.reviewContainer}>
          <Text style={styles.reviewTopic}>{review.topic}</Text>
          <View style={styles.reviewInfo}>
            <View style={
              [
                styles.reviewStatus,
                review.status == "done" ? {backgroundColor: '#80FFD1'} : {backgroundColor: '#FF8080'}
              ]}
            >
              <Text
                style={
                  [
                    styles.reviewStatusText,
                    review.status == "done" ? {color: '#006B45'} : {color: '#A30000'}
                  ]}
              >
                {review.status == "done" ? "Realizada" : "Não realizada"}
              </Text>
            </View>
            <Text style={styles.reviewDate}>{formatDate(review.date)}</Text>
          </View>
        </View>
      ))}
      
      <View style={{marginTop: 90}}></View>
    </ScrollView>
  )
}