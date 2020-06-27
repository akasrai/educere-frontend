interface Experties {
  name: string;
  category: string;
  experience: number;
  description: string;
}
export interface ExpertiesPayload {
  experties: Experties[];
}

interface Availability {
  availabilityType: string;
  availableFrom: string;
  availableTo: number;
  location: string;
  description: string;
}
export interface AvailabilityPayload {
  experties: Availability[];
}
