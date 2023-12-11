import Image from "next/image";
import {
  SettingsOptionContainer,
  SettingsOptionText,
} from "./SettingsOption.styles";
import settingsIcon from "./assets/settings-day.svg?url";

export default function SettingsOption() {
  return (
    <SettingsOptionContainer>
      <Image src={settingsIcon} alt="settings" width={24} height={24} />
      <SettingsOptionText>Settings</SettingsOptionText>
    </SettingsOptionContainer>
  );
}