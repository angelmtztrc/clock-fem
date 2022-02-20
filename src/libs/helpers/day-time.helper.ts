export const dayState = (hours: string) => {
  return Number(hours) < 12 ? 'morning' : 'evening';
};
