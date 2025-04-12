import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./verifyEmail.styles";
import { useState, useRef } from "react";
import { router } from "expo-router";

export default function ForgotPassword() {
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
  const [lastEditedIndex, setLastEditedIndex] = useState<number | null>(null);
  const inputRefs = useRef<(TextInput | null)[]>([]);

  const handleCodeChange = (text: string, index: number) => {
    if (text.length > 1) return;

    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
    setLastEditedIndex(index);

    if (text && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
    if (!text && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleFocus = () => {
    if (lastEditedIndex !== null) {
      const nextIndex = Math.min(lastEditedIndex + 1, 5);
      inputRefs.current[nextIndex]?.focus();
    } else {
      inputRefs.current[0]?.focus();
    }
  };

  const handleVerificationCode = () => {
    const fullCode = code.join("");
    console.log(fullCode);
    router.push('/tabs/dashboard');
  };

  const handleResendVerificationCode = () => {
    console.log("Reenviando código");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("@/app/assets/images/logo.png")}
      />

      <Text style={styles.title}>Código de verificação enviado para:</Text>
      <Text style={styles.text}>email@example.com</Text>

      <View>
        <View style={styles.inputContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.input}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleCodeChange(text, index)}
              ref={(ref) => (inputRefs.current[index] = ref)}
              onFocus={() => handleFocus()}
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === "Backspace" && !digit && index > 0) {
                  inputRefs.current[index - 1]?.focus();
                }
              }}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleVerificationCode}>
          <Text style={styles.buttonText}>Verificar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.resendButton} onPress={handleResendVerificationCode}>
          <Text style={styles.resendButtonText}>Reenviar Código</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}