export class EmployeeModel {
  constructor(
    public id: number,
    public name: string,
    public phone: string,
    public department: string,
    public email?: string
  ) {
  }
}


export const departments: string[] = [
  'Designer', 'Develop', 'Marketing'
];

export const employee: EmployeeModel[] = [
  {
    id: 1,
    name: '太郎',
    phone: '00011112222',
    department: 'Develop',
    email: 'taro@example.com'
  }, {
    id: 2,
    name: '花子',
    phone: '00033332222',
    department: 'Desiginer',
    email: 'hanako@example.com'
  }, {
    id: 3,
    name: '二郎',
    phone: '00033334444',
    department: 'Marketing'
  }, {
    id: 4,
    name: '三郎',
    phone: '11122223333',
    department: 'Develop',
    email: 'saburo@example.com'
  }, {
    id: 5,
    name: '香織',
    phone: '44422223333',
    department: 'Desiginer',
    email: 'kaori@example.com'
  }
]
