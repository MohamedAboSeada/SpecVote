import React, { useEffect, useState, useContext } from 'react';
import { supabase } from './DB.mjs';

const specsContext = React.createContext();

function SpecsProvider({ children }) {
  const [specs, setSpecs] = useState([]);
  const [loading, setLoading] = useState(false); // Track loading state
  const [message, setMessage] = useState(''); // Track message

  const getSpecs = async () => {
    setLoading(true); // Show loading state
    let { data: Specs, error } = await supabase.from('Specs').select('*');
    if (!error) {
      setSpecs(Specs);
    }
    setLoading(false); // Hide loading state
  };

  useEffect(() => {
    getSpecs();
  }, []);

  const addSpec = async (username, spec_text) => {
    setLoading(true);
    const { error } = await supabase
      .from('Specs')
      .insert({ username, spec_text })
      .select();
    if (!error) {
      setMessage('تم اضافة الاقتراح');
      getSpecs();
    } else {
      setMessage('Error adding spec.');
    }
    setLoading(false);

    setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
  };

  const editSpec = async (spec_id, spec_text) => {
    setLoading(true);
    const { error } = await supabase
      .from('Specs')
      .update({ spec_text })
      .eq('id', spec_id)
      .select();
    if (!error) {
      setMessage('تم تعديل الاقتراح');
      getSpecs();
    } else {
      setMessage('Error updating spec.');
    }
    setLoading(false);

    setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
  };

  const removeSpec = async (spec_id) => {
    setLoading(true);
    const { error } = await supabase.from('Specs').delete().eq('id', spec_id);
    if (!error) {
      setMessage('تم حذف الاقتراح');
      getSpecs();
    } else {
      setMessage('Error deleting spec.');
    }
    setLoading(false);

    setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
  };

  return (
    <specsContext.Provider
      value={{ specs, addSpec, editSpec, removeSpec, loading, message }}
    >
      {children}
    </specsContext.Provider>
  );
}

const useSpecs = () => {
  const context = useContext(specsContext);

  if (!context) {
    throw new Error('useSpecs must be used within a SpecsProvider');
  }

  return context;
};

export { SpecsProvider, useSpecs };
