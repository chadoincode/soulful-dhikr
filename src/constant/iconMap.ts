import DailyDuaIcon from '../assets/daily-dua-icon.png';
import DhikrAfterSalahIcon from '../assets/dhikr-after-sala.png';
import EveningDhikrIcon from '../assets/evening-dhikr.png';
import MorningDhikrIcon from '../assets/morning-dhikr.png';
import SelectedDuaIcon from '../assets/selected-dua-icon.png';

const IconMap: Record<string, {icon: string; alt:string}> = {
  'daily-dua' : {
    icon: DailyDuaIcon,
    alt: 'Daily Dua Icon'
  },
  'dhikr-after-salah': {
    icon: DhikrAfterSalahIcon,
    alt: 'Dhikr After Salah Icon'
  },
  'evening-dhikr': {
    icon: EveningDhikrIcon,
    alt: 'Evening Dhikr Icon'
  },
  'morning-dhikr': {
    icon: MorningDhikrIcon,
    alt: 'Morning Dhikr Icon'
  },
  'selected-dua': {
    icon: SelectedDuaIcon,
    alt: 'Selected Dua Icon'
  },
}

export default IconMap;