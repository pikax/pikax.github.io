import { provide, inject, InjectionKey } from '@vue/composition-api';

interface UserInfo {
  name: string;

  position: string;
  profile_img: string;

  greeting: string;

  social: Array<{ name: string; url: string }>;
}

const INFO_KEY: InjectionKey<UserInfo> = Symbol('user_info');

export function setInfo(user: UserInfo) {
  provide(INFO_KEY, user);
}

export function useInfo() {
  return inject(INFO_KEY);
}
