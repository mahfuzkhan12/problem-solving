def isHappy(n: int):
    visited = set()
    current = n
    while current != 1 and current not in visited:
        visited.add(current)
        digits = [int(d) for d in str(current)]
        current = sum(d*d for d in digits)
    return current == 1


print(isHappy(19))
