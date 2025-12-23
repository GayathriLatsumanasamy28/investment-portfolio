import { Stack } from "expo-router";
import { InvestmentProvider } from "../src/context/InvestmentContext";

export default function RootLayout() {
  return (
    <InvestmentProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </InvestmentProvider>
  );
}
