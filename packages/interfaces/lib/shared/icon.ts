import type * as Icons from "react-icons/all";

export type IconNames = keyof typeof Icons;

export type NativeIconTypes =
  | "AntDesign"
  | "Entypo"
  | "EvilIcons"
  | "Feather"
  | "FontAwesome"
  | "FontAwesome5"
  | "Fontisto"
  | "Foundation"
  | "Ionicons"
  | "MaterialCommunityIcons"
  | "MaterialIcons"
  | "Octicons"
  | "SimpleLineIcons"
  | "Zocial"

export type Icon =
  | {
      icon: IconNames;
      type: "icon";
    }
  | {
      icon: string;
      type: "img";
    };

export type NativeIcon = { type: NativeIconTypes; icon: string; };
