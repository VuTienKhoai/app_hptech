export const formatTimeIso = (isoDate: string) => {
  if (isoDate) {
    const date = new Date(isoDate);
    let hours: number = date.getHours();
    const minutes: string = String(date.getMinutes()).padStart(2, '0');
    const period: string = hours < 12 ? 'Buổi sáng' : 'Buổi chiều';

    hours = hours % 12;
    const formattedHours = hours ? String(hours).padStart(2, '0') : '12'; // Format hours as string for the return value
    return `${formattedHours}:${minutes} (${period})`;
  }
  return '';
};
