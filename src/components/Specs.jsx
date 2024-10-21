import React from 'react';
import Spec from './Spec';
import { useSpecs } from './SpecsContext';
import { Loader,RefreshCw } from 'react-feather';

function Specs() {
  let { specs, removeSpec,getSpecs, loading } = useSpecs();
  return (
    <div className="specs">
      <div style={{display: 'flex',alignItems:'center',justifyContent:'space-between'}}>
        <h2>مقترحات الاعضاء</h2>
        <button onClick={getSpecs} style={{padding: '0',width:'36px',borderRadius: '50%',height: '36px',backgroundColor: 'white',display:'grid',placeItems:'center'}}><RefreshCw size={16}/></button>
      </div>
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
