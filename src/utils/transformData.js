export const transformData = (data, crop, scenario) => {
  if (!data || !Array.isArray(data)) {
    console.error('Invalid data provided');
    return [];
  }

  if (!crop || !scenario) {
    console.error('Crop or Scenario not specified');
    return [];
  }

  const excludedKeys = ['Crops', 'Scenarios'];

  // Filter data by crop and scenario
  const filteredData = data.filter(
    item => item.Crops === crop && item.Scenarios === scenario
  );

  console.log('Filtered Data:', filteredData);

  // Transform data
  const transformedData = filteredData.map(item => {
    const transformed = [];
    for (const [key, value] of Object.entries(item)) {
      if (!excludedKeys.includes(key)) {
        transformed.push({ year: key, value: parseFloat(value) || 0 }); // Ensure numeric values
      }
    }
    return transformed;
  }).flat();

  // Sort by year (ascending)
  const sortedData = transformedData.sort((a, b) => parseInt(a.year) - parseInt(b.year));

  console.log('Transformed and Sorted Data:', sortedData);
  return sortedData;
};
