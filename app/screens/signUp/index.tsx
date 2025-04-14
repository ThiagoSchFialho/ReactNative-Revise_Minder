import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './signUp.styles';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { theme } from '@/app/constants/theme';
import { router } from 'expo-router';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) newErrors.email = 'Email é obrigatório';
    else if (!emailRegex.test(email)) newErrors.email = 'Email inválido';

    if (!password) newErrors.password = 'Senha é obrigatória';
    else if (password.length < 6) newErrors.password = 'Senha deve ter pelo menos 6 caracteres';

    if (confirmPassword !== password) newErrors.confirmPassword = 'As senhas não coincidem';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = () => {
    if (validate()) {
      console.log({ email, password, confirmPassword });
      router.push('/screens/verifyEmail');
    }
  };

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
            onChangeText={setEmail}
            value={email}
          />
        </View>
        {errors.email && <Text style={styles.error}>{errors.email}</Text>}

        <View style={[styles.inputContainer, {marginBottom: 2, marginTop: 20 }]}>
          <TextInput
            style={[styles.input, { width: "90%" }]}
            placeholder='Senha'
            placeholderTextColor={theme.secondText}
            secureTextEntry={!isPasswordVisible}
            onChangeText={setPassword}
            value={password}
          />
          <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Icon
              name={isPasswordVisible ? 'eye-off' : 'eye'}
              size={24}
              color={theme.text}
            />
          </TouchableOpacity>
        </View>
        {errors.password && <Text style={styles.error}>{errors.password}</Text>}

        <View style={[styles.inputContainer, { marginTop: 20 }]}>
          <TextInput
            style={[styles.input, { width: "90%" }]}
            placeholder='Confirme a Senha'
            placeholderTextColor={theme.secondText}
            secureTextEntry={!isPasswordVisible}
            onChangeText={setConfirmPassword}
            value={confirmPassword}
          />
          <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Icon
              name={isPasswordVisible ? 'eye-off' : 'eye'}
              size={24}
              color={theme.text}
            />
          </TouchableOpacity>
        </View>
        {errors.confirmPassword && <Text style={styles.error}>{errors.confirmPassword}</Text>}

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <Text style={styles.termsAndPolicy}>
          Ao se cadastrar, você concorda com nossos{' '}
          <Text style={styles.terms} onPress={() => alert('termos')}>Termos de serviço</Text> e{' '}
          <Text style={styles.terms} onPress={() => alert('política')}>Política de privacidade</Text>.
        </Text>
      </View>
    </View>
  );
}
