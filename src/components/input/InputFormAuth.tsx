import {Text, TextInput, TouchableOpacity, View, ViewStyle} from 'react-native';
import {TEXT_COLORS_DARK, TEXT_COLORS_BLACK} from '../../constants/Color';
import {Controller} from 'react-hook-form';
import {useMemo, useState} from 'react';
import {styles} from './style';
import {SvgXml} from 'react-native-svg';
import {EyeAuthCloseIcon} from '../../assets/svg/auth/EyeAuthCloseIcon';
import {EyeAuthOpenIcon} from '../../assets/svg/auth/EyeAuthOpenIcon';

interface IInputForm {
  title?: string;
  name: string;
  height?: number;
  control: any; // control của hook form
  errors?: any; // errors hook form
  placeholder?: string; // placeholder
  rules?: any; // rules hook form
  secureTextEntry?: boolean;
  keyBoardType?: 'numeric' | 'default';
  inputStyle?: ViewStyle;
  colorIcon?: string;
  strokeColorIcon?: string;
}
const InputFormAuth = ({
  title,
  name,
  height = 50,
  placeholder,
  control,
  errors,
  rules = {},
  secureTextEntry,
  keyBoardType,
  inputStyle,
  colorIcon,
  strokeColorIcon,
}: IInputForm) => {
  const [isSecure, setIsSecure] = useState(true);
  const toggleSecureTextEntry = () => {
    setIsSecure(!isSecure);
  };
  const borderStyle: any = useMemo(() => {
    return !errors
      ? {
          ...styles.InputFormTextView,
          paddingVertical: 13,
          textAlignVertical: height > 53 ? 'top' : 'top',
        }
      : {
          ...styles.InputFormTextErrorView,
          paddingVertical: 13,
          height,
          textAlignVertical: height > 53 ? 'top' : 'center',
        };
  }, [errors]);
  return (
    <View style={styles.InputFormView}>
      {title ? (
        <Text style={styles.InputFormTLabel}>{title || 'Tiêu đề'}</Text>
      ) : null}
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={styles.gap2}>
            <View style={[styles.FormViewAuth, inputStyle]}>
              <TextInput
                style={[borderStyle, styles.AuthInput, inputStyle]}
                placeholder={placeholder}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                placeholderTextColor={TEXT_COLORS_DARK}
                cursorColor={TEXT_COLORS_DARK}
                keyboardAppearance={'dark'}
                secureTextEntry={secureTextEntry == true ? isSecure : false}
                keyboardType={keyBoardType || 'default'}
              />
              {secureTextEntry && (
                <TouchableOpacity onPress={toggleSecureTextEntry}>
                  {isSecure ? (
                    <SvgXml
                      xml={EyeAuthCloseIcon(colorIcon, strokeColorIcon)}
                    />
                  ) : (
                    <SvgXml xml={EyeAuthOpenIcon(colorIcon, strokeColorIcon)} />
                  )}
                </TouchableOpacity>
              )}
            </View>
            {errors ? (
              <Text numberOfLines={1} style={styles.inputError}>
                {errors?.message}
              </Text>
            ) : null}
          </View>
        )}></Controller>
    </View>
  );
};

export default InputFormAuth;
