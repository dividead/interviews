def taxi(n, drivers, dst):
  f = open("input.txt", "r") 
  content = f.read().splitlines()
  n = content[0]
  drivers = content[1:n+1]
  dst = content[n+1:]
  res = []
  taken = set()
  for i, b in reversed(list(enumerate(drivers))):
    mn = float("inf")
    n = 0
    for k, p in list(enumerate(dst)):
      if k not in taken:
        total = abs(p[0] - p[2]) + abs(p[1] - p[3]) + abs(b[0] - p[0]) + abs(b[1] - p[2])
        if total < mn:
          mn = total
          n = k
    res.append(n + 1)
    taken.add(n)
  for x in reversed(res):
    print(x)

taxi(3,
  [
    [100, 100], [200, 200], [300, 300]
  ], [
    [190, 230, 180, 220],
    [190, 190, 400, 400],
    [249, 249, 700, 700]])