import { View, Text, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { styles } from './dashboard.styles';
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
  { id: 1, topic: "Spread operator - JavaScript", status: "todo", date: "2025-04-14", study_id: 0, user_id: 0 },
  { id: 2, topic: "Next.js fundamentals", status: "done", date: "2025-04-14", study_id: 0, user_id: 0 },
  { id: 3, topic: "Array methods", status: "todo", date: "2025-04-17", study_id: 0, user_id: 0 },
  { id: 4, topic: "Mutability vs Immutability in JS", status: "todo", date: "2025-04-18", study_id: 0, user_id: 0 },
  { id: 5, topic: "Destructuring objects and arrays", status: "todo", date: "2025-04-19", study_id: 0, user_id: 0 },
  { id: 6, topic: "JavaScript array iteration techniques", status: "todo", date: "2025-04-20", study_id: 0, user_id: 0 },
];

export default function Dashboard () {
  const [reviews, setReviews] = useState<Review[]>(MockReviews);
  const [todaysReviews, setTodaysReviews] = useState<Review[]>([]);
  const [futureReviews, setFutureReviews] = useState<Review[]>([]);

  const today = dayjs().startOf('day');

  useEffect(() => {
    const todaysReviews = reviews?.filter((review: Review) => {
      return dayjs(review.date).startOf('day').isSame(today);
    })

    const futureReviews = reviews?.filter((review: Review) => {
      return dayjs(review.date).startOf('day').isAfter(today);
    })

    setTodaysReviews(todaysReviews);
    setFutureReviews(futureReviews);
  }, [reviews]);

  const formatDate = (date: string) => {
    return dayjs(date).format("DD/MM/YYYY");
  }

  const toggleReviewStatus = (id: number) => {
    setReviews((prevReviews) =>
      prevReviews.map((review) =>
        review.id === id
          ? { ...review, status: review.status === "todo" ? "done" : "todo" }
          : review
      )
    );
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Revisões para hoje</Text>
      {todaysReviews.map((review: Review) => (
        <TouchableWithoutFeedback key={review.id} onPress={() => toggleReviewStatus(review.id)}>
          <View
            style={review.status == "todo" ? styles.reviewContainerTodo : styles.reviewContainerDone}
          >
            <Text style={styles.reviewTopic}>{review.topic}</Text>
            <View style={review.status == "todo" ? styles.reviewStatusTodo : styles.reviewStatusDone}></View>
          </View>
        </TouchableWithoutFeedback>
      ))}

      <Text style={styles.futureReviewsTitle}>Revisões futuras</Text>
      <View style={styles.line}></View>

      {futureReviews.map((review: Review) => (
        <View key={review.id} style={styles.reviewContainer}>
          <Text style={styles.futureReviewTopic}>{review.topic}</Text>
          <View style={styles.reviewInfo}>
            <View style={styles.reviewStatus}>
              <Text style={styles.reviewStatusText}>Pendente</Text>
            </View>
            <Text style={styles.reviewDate}>{formatDate(review.date)}</Text>
          </View>
        </View>
      ))}
      
      <View style={{marginTop: 90}}></View>
    </ScrollView>
  )
}