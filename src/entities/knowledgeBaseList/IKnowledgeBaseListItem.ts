export interface IImage {
  id: number;
  url: string;
}

export enum EducationTypesEnum {
  DOCUMENT = 'DOCUMENT',
  COURSE = 'COURSE',
  QUIZ = 'QUIZ',
  FOLDER = 'FOLDER',
  QUESTIONNAIRE = 'QUESTIONNAIRE',
  ANNOUNCEMENT = 'ANNOUNCEMENT',
}

export interface IKnowledgeBaseListItem {
  id: number;
  contentId: number;
  name: string;
  slug: string;
  description: string | null;
  image: IImage | null;
  createdAt: string;
  updatedAt: string;
  sortNumber: number;
  type: EducationTypesEnum;
  itemCounts: {
    FOLDER: number;
    DOCUMENT: number;
    COURSE: number;
    QUIZ: number;
    QUESTIONNAIRE: number;
    ANNOUNCEMENT: number;
  };
}
