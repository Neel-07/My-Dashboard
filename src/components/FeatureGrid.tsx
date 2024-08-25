"use client";

import React, { useState, useEffect } from 'react';
import FeatureCard from './FeatureCard';

interface Feature {
  title: string;
  label: string;
  description: string;
}

const FeatureGrid: React.FC = () => {
  const [features, setFeatures] = useState<Feature[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `http://api.mediastack.com/v1/news?access_key=a8f60e3db78dff865b628be2e975bb8e&languages=en&limit=6&sources=sports,business,general,entertainment,technology,science,health`
        );
        const data = await response.json();
        const articles = data.data.map((article: any) => ({
          title: article.title,
          label: article.source, // Source of the news as label
          description: article.description,
        }));
        setFeatures(articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
      {features.map((feature, index) => (
        <FeatureCard 
          key={index} 
          title={feature.title} 
          label={feature.label} 
          description={feature.description} 
        />
      ))}
    </div>
  );
};

export default FeatureGrid;
