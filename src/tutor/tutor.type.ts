interface Experties {
  name: string;
  category: string;
  experience: number;
  description: string;
}
export interface ExpertiesPayload {
  experties: Experties[];
}
