import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./forgotPassword.styles";
import { useState } from "react";
import { theme } from '@/app/constants/theme';

export default function ForgotPassword () {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) newErrors.email = 'Email é obrigatório';
    else if (!emailRegex.test(email)) newErrors.email = 'Email inválido';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleEmail = () => {
    if (validate()) {
      alert(email)
    }
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("@/app/assets/images/logo.png")}
      />

      <Text style={styles.title}>Esqueci minha senha</Text>
      <Text style={styles.text}>Você receberá um link no seu e-mail para redefinir a sua senha.</Text>

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

        <TouchableOpacity style={styles.button} onPress={handleEmail}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}