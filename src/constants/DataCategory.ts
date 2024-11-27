export interface CareCategory {
  id: string;
  name: string;
  value: string;
}
export const CareCategory: CareCategory[] = [
  {
    id: '1',
    name: 'Sức khỏe',
    value: 'Health',
  },
  {
    id: '2',
    name: 'Xét nghiệm',
    value: 'Testing',
  },
  {
    id: '3',
    name: 'Tiêm chủng',
    value: 'Vaccination',
  },
];
