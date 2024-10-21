import React from 'react';
import Spec from './Spec';
import { useSpecs } from './SpecsContext';
import { Loader } from 'react-feather';

function Specs() {
  let { specs, removeSpec, loading } = useSpecs();
  return (
    <div className="specs">
      <h2>مقترحات اخرى</h2>
      {loading ? (
        <p className="loading">
          <Loader size={20} /> يتم التحديث
        </p>
      ) : specs.length > 0 ? (
        specs.map((spec) => (
          <Spec
            key={spec.id}
            id={spec.id}
            user_name={spec.username}
            spec={spec.spec_text}
            remove={removeSpec}
          />
        ))
      ) : (
        <h4
          style={{
            textAlign: 'center',
            padding: '50px 0',
            color: '#222',
            backgroundColor: '#ccc',
            borderRadius: '10px',
          }}
        >
          لسه محدش ضاف حاجة
        </h4>
      )}
    </div>
  );
}

export default Specs;
