import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './login.styles';
import { useState } from 'react';
import { router } from 'expo-router';
import Icon from 'react-native-vector-icons/Feather';
import { theme } from '@/app/constants/theme';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleLogin = () => {
    alert(email + password);
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("@/app/assets/images/logo.png")}
      />
      <View>
        <View style={[styles.inputContainer, {marginBottom: 30}]}>
          <TextInput
            style={styles.input}
            placeholder='Email'
            placeholderTextColor={theme.secondText}
            keyboardType='email-address'
            autoCapitalize='none'
            onChangeText={email => setEmail(email)}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, {width: "90%"}]}
            placeholder='Senha'
            placeholderTextColor={theme.secondText}
            secureTextEntry={!isPasswordVisible}
            onChangeText={password => setPassword(password)}
          />
          <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Icon
              name={isPasswordVisible ? 'eye-off' : 'eye'}
              size={24}
              color="#fff"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Text
          style={styles.forgotPassword}
          onPress={() => router.push('/screens/forgotPassword')}
        >Esqueci minha senha</Text>
      </View>
    </View>
  )
}