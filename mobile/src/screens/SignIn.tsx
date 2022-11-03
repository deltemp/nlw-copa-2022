import { Fontisto } from "@expo/vector-icons";
import { Center, Icon, Text, useColorModeValue } from "native-base";
import { useAuth } from "../hooks/useAuth";

import Logo from "../assets/logo.svg";

import { Button } from "../components/Button";

export function SignIn() {
  const { signIn, user } = useAuth();

  return (
    <Center flex={1} bgColor="gray.900" p={5}>
      <Logo width={212} height={40} />
      <Button
        type="SECONDARY"
        title="Entrar com Google"
        leftIcon={<Icon as={Fontisto} name="google" color="white" size="md" />}
        mt={12}
        onPress={signIn}
      />

      <Text textAlign="center" mt={4}>
        Não utilizamos nenhuma informação além {"\n"}
        do seu e-mail para criação de sua conta.
      </Text>
    </Center>
  );
}
