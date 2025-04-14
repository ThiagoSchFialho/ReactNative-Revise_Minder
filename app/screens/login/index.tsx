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
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) newErrors.email = 'Email é obrigatório';
    else if (!emailRegex.test(email)) newErrors.email = 'Email inválido';

    if (!password) newErrors.password = 'Senha é obrigatória';
    else if (password.length < 6) newErrors.password = 'Senha deve ter pelo menos 6 caracteres';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleLogin = () => {
    if (validate()) {
      console.log({ email, password });
      router.push('/tabs/dashboard');
    }
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("@/app/assets/images/logo.png")}
      />
      <View>
        <View style={[styles.inputContainer, {marginBottom: 2}]}>
          <TextInput
            style={styles.input}
            placeholder='Email'
            placeholderTextColor={theme.secondText}
            keyboardType='email-address'
            autoCapitalize='none'
            onChangeText={email => setEmail(email)}
          />
        </View>
        {errors.email && <Text style={styles.error}>{errors.email}</Text>}

        <View style={[styles.inputContainer, {marginBottom: 2, marginTop: 20 }]}>
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
        {errors.password && <Text style={styles.error}>{errors.password}</Text>}

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