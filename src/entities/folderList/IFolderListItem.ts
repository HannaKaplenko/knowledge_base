import { EducationTypesEnum, IImage } from "../knowledgeBaseList/IKnowledgeBaseListItem";

export interface IFolderListItem {
    contentId: number;
    createdAt: string;
    dislikeCount: number;
    id: number;
    image: IImage | null;
    isDisliked: boolean;
    isFavorite: boolean;
    isLiked: boolean;
    likeCount: number;
    name: string;
    sortNumber: number;
    type: EducationTypesEnum;
    updatedAt: string;
    viewCount: number;
    description: string | null;
}
