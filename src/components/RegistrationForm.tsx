import React from 'react';
import { useForm } from '../hooks/useForm';
import { Input } from './ui/Input';
import { UserRound, Phone, Mail, CheckCircle2 } from 'lucide-react';

export function RegistrationForm() {
  const { formData, handleChange, handleSubmit, isSubmitting, error, success } = useForm({
    name: '',
    phone: '',
    email: '',
  });

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Register</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm flex items-center gap-2">
          <span className="flex-1">{error}</span>
        </div>
      )}

      {success && (
        <div className="mb-4 p-3 bg-green-50 text-green-700 rounded-lg text-sm flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5" />
          <span className="flex-1">Registration successful!</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          icon={<UserRound className="w-5 h-5 text-gray-500" />}
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          autoComplete="name"
        />

        <Input
          icon={<Phone className="w-5 h-5 text-gray-500" />}
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          autoComplete="tel"
          pattern="[0-9]*"
        />

        <Input
          icon={<Mail className="w-5 h-5 text-gray-500" />}
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          autoComplete="email"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200 disabled:opacity-70"
        >
          {isSubmitting ? 'Submitting...' : 'Register'}
        </button>
      </form>

      
    </div>
  );
}