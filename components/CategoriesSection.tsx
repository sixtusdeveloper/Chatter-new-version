// components/CategoriesSection.tsx
import React from 'react';

const CategoriesSection = () => {
  const categories = [/* Array of categories */];

  return (
    <section className="bg-black-200 py-12" id="categories">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Post &nbsp;<span className='text-purple'>Categories</span></h2>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map(category => (
            <a
              key={category.id}
              href={`/categories/${category.slug}`}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
            >
              {category.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
