import React, { Suspense } from 'react';

const ExpensiveComponent = React.lazy(() => import('./ExpensiveComponent'));

export const DynamicImportComponent = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          value={visible}
          onChange={() => setVisible(!visible)}
        />{' '}
        Show the component
      </label>
      <Suspense fallback={<div>Loading...</div>}>
        {visible && <ExpensiveComponent />}
      </Suspense>
    </div>
  );
};
