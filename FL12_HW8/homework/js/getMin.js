function getMin() {
  let balancer = arguments[0];
  for (let i = 0; i < arguments.length; i++) {
    if (balancer > arguments[i]) { 
      balancer = arguments[i];
    }
    
  }
  return balancer;
}
getMin(123, 254, 567, 999, 0, -1);