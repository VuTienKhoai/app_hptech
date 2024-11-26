import {SvgXml} from 'react-native-svg';
import {
  icon_Home,
  icon_HomeFocus,
  icon_Medical_report,
  icon_Medical_reportAcitve,
  icon_ProfileUser,
  icon_User,
  icon_UserActive,
} from '../../assets/svg/iconTabNavigation';
import {COLOR_NAVIGATION_FOCUS} from '../../constants/Color';
import {Image} from 'react-native';

interface ITabbarIcon {
  focused: boolean;
  name: string;
}

export default function TabbarIcon(props: ITabbarIcon) {
  switch (props.name) {
    case 'Home':
      return (
        <SvgXml
          key={props.name}
          xml={props.focused ? icon_HomeFocus : icon_Home}
        />
      );
    case 'Medicalreport':
      return (
        <SvgXml
          key={props.name}
          xml={props.focused ? icon_Medical_reportAcitve : icon_Medical_report}
        />
      );

    case 'ProfileUser':
      if (props.focused) {
        return (
          <Image
            width={20}
            height={20}
            source={require('../../assets/images/icon_tab/icon_Medical_report.png')}
            style={{width: 27, height: 27, marginBottom: -1}}
          />
        );
      } else {
        return (
          <SvgXml
            key={props.name}
            xml={icon_ProfileUser(
              props.focused ? COLOR_NAVIGATION_FOCUS : undefined,
            )}
          />
        );
      }
    case 'User':
      return (
        <SvgXml
          key={props.name}
          xml={props.focused ? icon_UserActive : icon_User}
          style={{marginBottom: -2}}
        />
      );
    default:
      return <></>;
  }
}
