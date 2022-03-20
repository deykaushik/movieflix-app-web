import { Constants } from './constants';

export class CommonUtility {
  public static getFullImagePath(size: string, imagePath: string) {
    return `${Constants.imageBasePath}${size}${imagePath}`;
  }
}
