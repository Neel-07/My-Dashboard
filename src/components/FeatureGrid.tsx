"use client";

import React, { useEffect, useState } from 'react';
import FeatureCard from './FeatureCard';
import axios from 'axios';

const FeatureGrid: React.FC<{ searchTerm: string; category: string; refresh: boolean }> = ({ searchTerm, category, refresh }) => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.mediastack.com/v1/news?access_key=a8f60e3db78dff865b628be2e975bb8e&categories=business,sports,technology,health`);
        const filteredData = response.data.data.filter(
          (item: any) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (category === 'All Categories' || item.category.toLowerCase() === category.toLowerCase())
        );
        setFeatures(filteredData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [searchTerm, category, refresh]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
      {features.map((feature: any) => (
        <FeatureCard key={feature.id} title={feature.title} label={feature.category} description={feature.description} />
      ))}
    </div>
  );
};

export default FeatureGrid;
