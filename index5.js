// Q.2) find the flatline in the calculated graph of the global warming index of the year 2023 and 2022 for the given months (n,m), (a,b), the calculated graph c() is calculated of {c[i] = a[i]/b[i]}
// such that c[i] is rounded of like {0.5->1 0.2->0 | 12->1 18->2};

// Define the rounding rules
const roundingRules = {
    0.5: 1,
    0.2: 0,
    12: 1,
    18: 2
  };
  
  // Function to apply the rounding rules
  function applyRoundingRules(value) {
    for (const rule in roundingRules) {
      if (Math.abs(value - rule) <= 0.1) {
        return roundingRules[rule];
      }
    }
    return Math.round(value);
  }
  
  // Sample data for the global warming index
  const months2022 = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const values2022 = [12.5, 14.8, 8.3, 9.2, 18.1, 22.7];
  
  const months2023 = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const values2023 = [6.2, 3.9, 12.5, 16.7, 18.8, 11.2];
  
  // Calculate the graph c() using the formula c[i] = a[i] / b[i]
  const graph2022 = values2022.map((value, index) => applyRoundingRules(value / values2023[index]));
  const graph2023 = values2023.map((value, index) => applyRoundingRules(value / values2022[index]));
  
  // Find the flatline in the graph for 2022
  const flatline2022 = graph2022.every(value => value === graph2022[0]);
  
  // Find the flatline in the graph for 2023
  const flatline2023 = graph2023.every(value => value === graph2023[0]);
  
  console.log('Flatline in 2022:', flatline2022);
  console.log('Flatline in 2023:', flatline2023);
