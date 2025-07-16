import { create } from 'zustand';
import { IKnowledgeBaseListItem } from '../entities/knowledgeBaseList/IKnowledgeBaseListItem';

interface KnowledgeBaseState {
  items: IKnowledgeBaseListItem[];
  setItems: (items: IKnowledgeBaseListItem[]) => void;
}

export const useKnowledgeBaseStore = create<KnowledgeBaseState>((set) => ({
  items: [],
  setItems: (items) => set({ items }),
}));
