import { Text, TextInput, TouchableOpacity, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { styles } from './profile.styles';
import { useState } from 'react';
import { router } from 'expo-router';

export default function Reviews () {
  const [email, setEmail] = useState<string>('example@email.com');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) newErrors.email = 'Email é obrigatório';
    else if (!emailRegex.test(email)) newErrors.email = 'Email inválido';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const changeEmail = () => {
    if(validate()) {
      console.log({email});
    }
  }

  const handleDeleteAccount = () => {
    alert('Delete Account');
  }
  
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Meu perfil</Text>

      <Text style={styles.label}>Email</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <Text style={styles.label}>Senha</Text>
      <TouchableOpacity style={styles.inputContainer} onPress={() => router.push('../screens/changePassword')}>
        <TextInput
          style={styles.input}
          value={'Display password'}
          secureTextEntry
          editable={false}
          pointerEvents="none"
        />
      </TouchableOpacity>

      <View style={styles.line}></View>

      <View style={styles.deleteAccountContainer}>
        <Text style={styles.deleteText1}>Se essa conta for excluida todos os dados serão excluidos.</Text>
        <Text style={styles.deleteText2}>Essa operação não pode ser desfeita.</Text>
        <TouchableOpacity onPress={() => handleDeleteAccount()}>
          <View style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>Excluir conta</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 130}}></View>
    </ScrollView>
  )
}