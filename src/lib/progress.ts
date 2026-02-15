export type Progress = {
  unlockedDays: string[];
  gameCompleted: boolean;
};

export const defaultProgress: Progress = {
  unlockedDays: [],
  gameCompleted: false,
};
