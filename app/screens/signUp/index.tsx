import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { theme } from '@/app/constants/theme';
import { router } from 'expo-router';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSignUp = () => {
    router.push('screens/verifyEmail'),
    alert(email + password + confirmPassword);
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

        <View style={[styles.inputContainer, {marginBottom: 30}]}>
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

        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, {width: "90%"}]}
            placeholder='Confirme a Senha'
            placeholderTextColor={theme.secondText}
            secureTextEntry={!isPasswordVisible}
            onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
          />
          <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Icon
              name={isPasswordVisible ? 'eye-off' : 'eye'}
              size={24}
              color="#fff"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <Text
          style={styles.termsAndPolicy}
        >
          Ao se cadastrar, você concorda com nossos <Text style={styles.terms} onPress={() => alert('termos')}>Termos de serviço</Text> e <Text style={styles.terms} onPress={() => alert('política')}>Política de privacidade</Text>.
        </Text>
      </View>
    </View>
  )
}