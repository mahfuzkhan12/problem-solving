/**
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */
var minimumFuelCost = function(roads, seats) {
    let result = 0;
    let adjacencyList = Array.from({length: roads.length + 1}, () => []);
  
    for (const [u, v] of roads) {
      adjacencyList[u].push(v);
      adjacencyList[v].push(u);
    }
  
    function depthFirstSearch(node, parent) {
      let peopleCount = 1;
      for (const neighbor of adjacencyList[node]) {
        if (neighbor === parent) continue;
        peopleCount += depthFirstSearch(neighbor, node);
      }
      if (node > 0) {
        result += Math.ceil(peopleCount / seats);
      }
      return peopleCount;
    }
  
    depthFirstSearch(0, -1);
    return result;
};