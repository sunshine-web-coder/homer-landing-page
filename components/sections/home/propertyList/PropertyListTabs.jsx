"use client"

import { useState } from "react";
import { propertiesData } from "./data";
import PropertyList from "./PropertyList";

export default function PropertyListTabs() {
    const [selectedCategory, setSelectedCategory] = useState('Residential');

    const categories = [...new Set(propertiesData.map(property => property.category))];
  
    const handleTabClick = (category) => {
      setSelectedCategory(category);
    };
  
    const filteredProperties = propertiesData.filter(property => property.category === selectedCategory);
  
  return (
    <div>
      <div>
        {categories.map(category => (
          <button key={category} onClick={() => handleTabClick(category)}>
            {category}
          </button>
        ))}
      </div>
      <PropertyList properties={filteredProperties} />
    </div>
  )
}
