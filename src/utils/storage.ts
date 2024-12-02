export interface RegistrationData {
  id: string;
  name: string;
  phone: string;
  email: string;
  timestamp: string;
}

export function saveRegistration(data: Omit<RegistrationData, 'id' | 'timestamp'>): RegistrationData {
  const registrations = getRegistrations();
  
  const newRegistration: RegistrationData = {
    ...data,
    id: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
  };
  
  registrations.push(newRegistration);
  localStorage.setItem('registrations', JSON.stringify(registrations));
  
  return newRegistration;
}

export function getRegistrations(): RegistrationData[] {
  const stored = localStorage.getItem('registrations');
  return stored ? JSON.parse(stored) : [];
}