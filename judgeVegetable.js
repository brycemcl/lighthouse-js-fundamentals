const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const judgeVegetable = (vegetables, metric) => {
  let bestMetric = -Infinity;
  vegetables.forEach(element => {
    if (bestMetric < element[metric]) {
      bestMetric = element[metric];
    };
  });
  return vegetables.filter(element => {
    return bestMetric == element[metric];
  })[0].submitter;
};


const metric = 'redness';
judgeVegetable(vegetables, metric);
console.log(judgeVegetable(vegetables, metric));