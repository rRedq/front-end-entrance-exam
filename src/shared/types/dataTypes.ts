interface EducationItem {
  year: string;
  title: string;
  tags: string[];
  source: string;
}

interface ProfileNameData {
  greeting: string;
  name: string;
  position: string;
}

interface ContactsData {
  label: string;
  email: string;
  phone: string;
}

interface LanguageData {
  language: string;
  level: string;
}

interface ExperienceData {
  period: string;
  position: string;
  time: string;
  list: string[];
}

export {
  type EducationItem,
  type ProfileNameData,
  type ContactsData,
  type LanguageData,
  type ExperienceData,
};
