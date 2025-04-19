import { Text } from 'react-native';
import useThemeColor from '@/hooks/useThemeColor';

type ThemedTextProps = React.ComponentProps<typeof Text>;

export default function ThemedText(props: ThemedTextProps) {
  const { style, ...otherProps } = props;
  const colors = useThemeColor();
  
  return (
    <Text 
      style={[{ color: colors.text }, style]}
      {...otherProps}
    />
  );
}
