import { CustomAny } from '../types/CustomAny';

export default class LocalStorageService {
  static setValue(keyName: string, value: CustomAny): void {
    const stringValue = JSON.stringify(value);

    localStorage.setItem(keyName, stringValue);
  }

  static getValue(keyName: string): CustomAny | undefined {
    const value = localStorage.getItem(keyName);

    if (value) {
      return JSON.parse(value);
    }
  }

  static removeAll(): void {
    localStorage.clear();
  }
}
