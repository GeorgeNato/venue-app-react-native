import { useColorScheme } from 'react-native';
import { lightTheme, darkTheme } from '@/constants/Colors';

export default function useThemeColor() {
  const scheme = useColorScheme();
  return scheme === 'dark' ? darkTheme : lightTheme;
}
