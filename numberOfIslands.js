var numIslands = function(grid) {
  let rows = grid.length
  let cols = grid[0].length
  let islandCount = 0
  let matrix = Array(rows)
  let res = []
  for (let i = 0; i < matrix.length; i++) {
      matrix[i] = Array(cols).fill(false)
  }
          let arr = [
              [1,2,3,4,13],[5,6,7,8,14],[9,10,11,12,15],[16,17,18,19,20]
          ]
   let queue = [[0,0]]
   while (queue.length > 1) {
       let current = queue.shift()
       if (current[0] < 0 || current[0] >= rows || current[1] < cols || current[1] >= cols) continue
       if (matrix[current[0]][current[1]]) continue

   }
  }