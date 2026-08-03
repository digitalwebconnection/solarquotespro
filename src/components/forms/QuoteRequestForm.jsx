import React, { useState } from 'react';
import Button from '../common/Button';

const QuoteRequestForm = () => {
  const [step, setStep] = useState(1);
  const [zipCode, setZipCode] = useState('');

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 max-w-md w-full mx-auto">
      <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Get Free Solar Quotes</h3>
      
      {step === 1 ? (
        <form onSubmit={handleNext}>
          <div className="mb-4">
            <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">Enter your zip code</label>
            <input 
              type="text" 
              id="zip" 
              required
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g. 90210"
            />
          </div>
          <Button type="submit" variant="primary" className="w-full py-3 text-lg">Start My Quote</Button>
        </form>
      ) : (
        <div className="text-center">
          <p className="text-green-600 font-medium mb-4">Great! We have installers in {zipCode}.</p>
          <p className="text-gray-600 mb-6">Complete your profile to see matches.</p>
          <Button variant="outline" onClick={() => setStep(1)} className="w-full">Back</Button>
        </div>
      )}
    </div>
  );
};

export default QuoteRequestForm;
