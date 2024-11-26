import {ApiResponse} from '../../../type/typeResponse';
import {TypeInformationUser} from '../../../type/typeUser';
export interface PathServices {
  id: number;
  title: string;
  image: any;
  onPress: () => void;
}
export type UserResponse = ApiResponse<TypeInformationUser>;
