import { useState } from 'react';
import { saveRegistration } from '../utils/storage';
import { submitToGoogleSheets } from '../utils/googleSheets';

interface FormData {
  name: string;
  phone: string;
  email: string;
}

export function useForm(initialState: FormData) {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(null);
    setSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {

      const savedData = saveRegistration(formData);
      
      
      await submitToGoogleSheets(formData);
      
      setSuccess(true);
      setFormData(initialState);
      console.log('Registration saved:', savedData);
    } catch (err) {
      setError('Failed to save registration. Please try again.');
      console.error('Registration error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    isSubmitting,
    error,
    success,
  };
}