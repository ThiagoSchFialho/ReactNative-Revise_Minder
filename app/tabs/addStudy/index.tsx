import { Text, TextInput, TouchableOpacity, View, Platform } from 'react-native';
import { styles } from './addStudy.styles';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';
import Icon from 'react-native-vector-icons/Feather';

export default function AddStudy () {
  const [topic, setTopic] = useState<string>('');
  const [qntReviews, setQntReviews] = useState<number>(3);
  const [studyDate, setStudyDate] = useState<Date | null>(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!topic) newErrors.topic = 'Esse é obrigatório';

    if (!qntReviews) newErrors.qntReviews = 'O minimo de revisões é 1';
    else if (qntReviews > 10) newErrors.qntReviews = 'O máximo de revisões é 10';
    else if (qntReviews < 1) newErrors.qntReviews = 'O minimo de revisões é 1';

    if (!studyDate) newErrors.studyDate = 'Esse é obrigatório';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = () => {
    if (validate()) {
      console.log({ topic, qntReviews, studyDate });
    }
  };

  const handleDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) setStudyDate(selectedDate);
  };

  const formatDate = (date: Date | null) => {
    const currentDate = date ? date.toISOString().split('T')[0] : '';
    return dayjs(currentDate).format("DD/MM/YYYY");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar estudo</Text>

      <Text style={styles.label}>Tópico</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={topic}
          onChangeText={setTopic}
        />
      </View>
      {errors.topic && <Text style={styles.error}>{errors.topic}</Text>}

      <Text style={styles.label}>Número de revisões</Text>
      <View style={styles.inputContainer}>
      <TouchableOpacity onPress={() => {if (qntReviews > 1) setQntReviews(qntReviews - 1)}}>
          <Icon
            name={'minus'}
            size={24}
            color="#fff"
          />
        </TouchableOpacity>
        <TextInput
          style={[styles.input, {textAlign: 'center', width: '60%'}]}
          keyboardType='number-pad'
          value={qntReviews ? qntReviews.toString() : '0'}
          onChangeText={qntReviews => setQntReviews(qntReviews ? parseInt(qntReviews) : 0)}
        />
        <TouchableOpacity onPress={() => {if (qntReviews < 10) setQntReviews(qntReviews + 1)}}>
          <Icon
            name={'plus'}
            size={24}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
      {errors.qntReviews && <Text style={styles.error}>{errors.qntReviews}</Text>}

      <Text style={styles.label}>Data do estudo</Text>
      <TouchableOpacity
        style={styles.inputContainer}
        onPress={() => setShowDatePicker(true)}
      >
        <TextInput
          style={[styles.input, {width: '90%'}]}
          value={formatDate(studyDate)}
          editable={false}
          pointerEvents="none"
        />
        <Icon
          name={'calendar'}
          size={24}
          color="#fff"
        />
      </TouchableOpacity>
      {errors.studyDate && <Text style={styles.error}>{errors.studyDate}</Text>}
      {showDatePicker && (
        <DateTimePicker
          value={studyDate || new Date()}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  )
}