export async function submitToGoogleSheets(data: { name: string; phone: string; email: string }) {
 
  const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbwVMV04h83xteOjP5hWyiMal54MCKw7LoCDZ3MWzVTJsrlmU69jH5j4mg86pkL0TOdYSQ/exec';

  try {
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),

      
    });

   
    return { success: true };
  } catch (error) {
    console.error('Error submitting data:', error);
    throw error;
  }
}