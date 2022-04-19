import {
  useFonts,
  WorkSans_400Regular,
  WorkSans_500Medium,
  WorkSans_600SemiBold,
  WorkSans_700Bold,
} from '@expo-google-fonts/work-sans';
import { extendTheme, NativeBaseProvider } from 'native-base';
import Loading from './src/components/Loading';
import { awesomeTheme } from './src/constants/Theme';
import { useEffect, useState } from 'react';
import Home from './src/screens/home';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

export default function App() {
  const [theme, setTheme] = useState<any>(null);
  let [fontsLoaded] = useFonts({
    WorkSans_400Regular,
    WorkSans_500Medium,
    WorkSans_600SemiBold,
    WorkSans_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      const MyTheme = extendTheme({ ...awesomeTheme });
      setTheme(MyTheme);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded || !theme) {
    return <Loading />;
  }
  return (
    <NativeBaseProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </NativeBaseProvider>
  );
}
