import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const Route = {
  Home: ['Home'],
  ProfileUser: ['ProfileUser'],
  Medicalreport: ['Medicalreport'],
  User: ['User'],
};

interface INavigationRoute {
  name: keyof typeof Route;
  params?: {[key: string]: any};
}

export function tabBarVisible(route: INavigationRoute) {
  const routeName = getFocusedRouteNameFromRoute(route) || ''; // Cung cấp giá trị mặc định là ''

  if (Route[route?.name]) {
    return Route[route?.name].includes(routeName) || !routeName;
  }
  return false;
}
