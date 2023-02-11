export interface Asset {
  id: number;
  isStartable: boolean;
  location: string;
  owner: string;
  createdBy: string;
  name: string;
  status: string;
  tags: string[];
  cpu: number;
  ram: number;
  createdAt: Date;
  parentId: number
}