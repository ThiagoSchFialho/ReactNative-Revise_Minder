import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./home.styles";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import changeNavigationBarColor from "react-native-navigation-bar-color";

interface Benefit {
  image: any;
  title: string;
  text: string;
}

export default function Home() {
  const screenWidth = Dimensions.get("window").width;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    changeNavigationBarColor('#171823', false);
  }, []);

  const RenderBenefitItem = ({ item }: { item: Benefit }) => {
    return (
      <View style={styles.benefitContainer}>
        <Image style={styles.backgroundImg} source={item.image} />
        <Text style={styles.benefitTitle}>{item.title}</Text>
        <Text style={styles.benefitText}>{item.text}</Text>
      </View>
    );
  };

  const benefits: Benefit[] = [
    {
      image: require("@/app/assets/images/rocket.png"),
      title: "Melhore a Retenção",
      text: "Nossa abordagem de revisão espaçada é comprovada para melhorar a retenção de informações.",
    },
    {
      image: require("@/app/assets/images/clock.png"),
      title: "Economize Tempo",
      text: "Elimine a preocupação de quando revisar. Nosso sistema faz o trabalho pesado por você.",
    },
    {
      image: require("@/app/assets/images/calendar.png"),
      title: "Agendamento Flexível",
      text: "Nosso sistema se adapta à sua programação. Mude as datas de estudo conforme necessário e continue recebendo um plano de revisão otimizado.",
    },
    {
      image: require("@/app/assets/images/star.png"),
      title: "Simplicidade Intuitiva",
      text: "Navegue pelo nosso app de forma fácil e intuitiva. Não é necessário ser um expert em tecnologia para aproveitar todos os benefícios.",
    },
  ];

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / screenWidth);
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("@/app/assets/images/logo.png")}
        resizeMode="contain"
      />
      <Text style={styles.title}>
        Comece a aproveitar ao máximo o seu tempo de estudo!
      </Text>

      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {benefits.map((item, index) => (
          <RenderBenefitItem key={index} item={item} />
        ))}
      </ScrollView>

      <View style={styles.dots}>
        {benefits.map((_, index) => (
          <View
            key={index}
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: currentIndex === index ? "#1A97F0" : "#FFFFFF",
              marginHorizontal: 10,
            }}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.startButton} onPress={() => router.push('/screens/signUp')}>
        <Text style={styles.startButtonText}>Começar</Text>
      </TouchableOpacity>

      <Text style={styles.haveAnAccount}>
        Já tem uma conta? <Text style={styles.anchor} onPress={() => router.push('/screens/login')}>Entre</Text>
      </Text>
    </View>
  );
}
