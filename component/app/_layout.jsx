import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "French Made Simple" }} />
      <Stack.Screen name="sentences/index" options={{ title: "Sentence Formation" }} />
      <Stack.Screen name="grammar/index" options={{ title: "Grammar" }} />
      <Stack.Screen name="practice/[type]" options={{ title: "Practice" }} />
    </Stack>
  );
}
