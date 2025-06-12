import React from 'react';

const Category_xx = ({ categoryFilter }) => {
  return (
    <div className='btn-container'>
      <button
        type='button'
        className='filter-btn'
        data-id='all'
        onClick={() => categoryFilter('all')}
      >
        all
      </button>
      <button
        type='button'
        className='filter-btn'
        data-id='breakfast'
        onClick={() => categoryFilter('breakfast')}
      >
        breakfast
      </button>
      <button
        type='button'
        className='filter-btn'
        data-id='lunch'
        onClick={() => categoryFilter('lunch')}
      >
        lunch
      </button>
      <button
        type='button'
        className='filter-btn'
        data-id='shakes'
        onClick={() => categoryFilter('shakes')}
      >
        shakes
      </button>
      <button
        type='button'
        className='filter-btn'
        data-id='dinner'
        onClick={() => categoryFilter('dinner')}
      >
        dinner
      </button>
    </div>
  );
};

export default Category_xx;