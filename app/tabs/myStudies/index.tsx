import { View, Text, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { styles } from './myStudies.styles';
import { useState } from 'react';
import dayjs from 'dayjs';
import Icon from 'react-native-vector-icons/Feather';
import { router } from 'expo-router';

interface Study {
  id: number;
  topic: string;
  qnt_reviews: number;
  date: string;
  user_id: number;
}

const MockStudies = [
  { id: 1, topic: 'JavaScript', qnt_reviews: 3, date: '2025-04-11', user_id: 1 },
  { id: 2, topic: 'React Native', qnt_reviews: 2, date: '2025-04-10', user_id: 1 },
  { id: 3, topic: 'TypeScript', qnt_reviews: 4, date: '2025-04-09', user_id: 1 },
  { id: 4, topic: 'Node.js', qnt_reviews: 1, date: '2025-04-08', user_id: 1 },
  { id: 5, topic: 'JavaScript array iteration techniques', qnt_reviews: 5, date: '2025-04-07', user_id: 1 },
  { id: 6, topic: 'Docker', qnt_reviews: 3, date: '2025-04-06', user_id: 1 }
];

export default function MyStudies () {
  const [studies, setStudies] = useState<Study[]>(MockStudies);
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  const formatDate = (date: string) => {
    return dayjs(date).format("DD/MM/YYYY");
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <TouchableWithoutFeedback onPress={() => setOpenMenuId(null)}>
        <View>
          <Text style={styles.title}>Meus estudos</Text>

          {studies.map((study: Study) => (
            <View key={study.id} style={styles.studyContainer}>
              <View style={styles.topStudyContainer}>
                <Text style={styles.studyTopic}>{study.topic}</Text>
                <TouchableOpacity onPress={() => setOpenMenuId(openMenuId === study.id ? null : study.id)}>
                  <Icon
                    name={'more-horizontal'}
                    size={30}
                    color="#fff"
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.studyInfo}>
                <Text style={styles.studyInfoText}>{study.qnt_reviews} Revisões</Text>
                <Text style={styles.studyInfoText}>{formatDate(study.date)}</Text>
              </View>
              {openMenuId === study.id && (
                <View style={styles.menuBox}>
                  <TouchableOpacity onPress={() => router.push({
                    pathname: '/tabs/studyForm',
                    params: {
                      id: String(study.id)
                    }
                  })}>
                  <View style={styles.menuItemContainer}>
                      <Icon
                        name={'edit'}
                        size={20}
                        color="#FFFFFF"
                      />
                      <Text style={styles.menuItem}>Editar</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => console.log('Excluir', study.id)}>
                    <View style={styles.menuItemContainer}>
                      <Icon
                        name={'trash-2'}
                        size={20}
                        color="#FF5353"
                      />
                      <Text style={[styles.menuItem, { color: '#FF5353' }]}>Excluir</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          ))}

          <View style={{marginTop: 90}}></View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  )
}