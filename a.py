def minimumFuelCost(roads, seats):
    graph = {i:[] for i in range(len(roads) + 1)}
    for u, v in roads:
        graph[u].append(v)
        graph[v].append(u)

    def dfs(node, parent):
        children = graph[node]
        fuels = [dfs(child, node) for child in children if child != parent]
        return sum((fuel + seats - 1) // seats for fuel in fuels) + 1
    return dfs(0, -1)

roads = [[3,1],[3,2],[1,0],[0,4],[0,5],[4,6]]
seats = 2
print(minimumFuelCost(roads, seats)) # 7