import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './changePassword.styles';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { theme } from '@/app/constants/theme';
import { router } from 'expo-router';
import Constants from 'expo-constants';

export default function SignUp() {
  const apiUrl = Constants.expoConfig?.extra?.API_URL;
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!password) newErrors.password = 'Senha atual é obrigatória';
    else if (password.length < 6) newErrors.password = 'Senha deve ter pelo menos 6 caracteres';

    if (!newPassword) newErrors.newPassword = 'Senha é obrigatória';
    else if (newPassword.length < 6) newErrors.newPassword = 'Senha deve ter pelo menos 6 caracteres';

    if (confirmNewPassword !== newPassword) newErrors.confirmNewPassword = 'As senhas não coincidem';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChangePassword = () => {
    console.log(errors)
    if (validate()) {
      console.log('API_URL:', apiUrl);
      console.log({ password, newPassword, confirmNewPassword });
      router.push('../tabs/profile');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alterar senha</Text>
      <View>
      <Text style={styles.label}>Senha atual</Text>
      <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { width: "90%" }]}
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

        <Text style={styles.label}>Senha</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { width: "90%" }]}
            secureTextEntry={!isPasswordVisible}
            onChangeText={setNewPassword}
            value={newPassword}
          />
          <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Icon
              name={isPasswordVisible ? 'eye-off' : 'eye'}
              size={24}
              color={theme.text}
            />
          </TouchableOpacity>
        </View>
        {errors.newPassword && <Text style={styles.error}>{errors.newPassword}</Text>}

        <Text style={styles.label}>Confirme a Senha</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { width: "90%" }]}
            secureTextEntry={!isPasswordVisible}
            onChangeText={setConfirmNewPassword}
            value={confirmNewPassword}
          />
          <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Icon
              name={isPasswordVisible ? 'eye-off' : 'eye'}
              size={24}
              color={theme.text}
            />
          </TouchableOpacity>
        </View>
        {errors.confirmNewPassword && <Text style={styles.error}>{errors.confirmNewPassword}</Text>}

        <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
