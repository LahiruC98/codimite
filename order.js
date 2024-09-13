const TotalSpent = (details) => {
  let customer = details[0].CustomerName;
  details.map((detail, i) => {
    for (j = i; j < details.length - 1; j++) {
      j = j + 1;
      if (detail.TotalSpent < details[j].TotalSpent) {
        customer = details[j];
      }
    }
  });
  console.log(customer);
  
};