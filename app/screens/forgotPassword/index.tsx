import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./forgotPassword.styles";
import { useState } from "react";
import { theme } from '@/app/constants/theme';

export default function ForgotPassword () {
  const [email, setEmail] = useState('');

  const handleEmail = () => {
    alert(email)
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

        <TouchableOpacity style={styles.button} onPress={handleEmail}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}