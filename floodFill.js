var floodFill = function (image, sr, sc, newColor) {
  let old = image[sr][sc];
  if (old === newColor) return image;
  let cols = image[0].length;
  let rows = image.length;
  function depth(image, row, column) {
    let validRow = row >= 0 && row < rows;
    let validCol = column >= 0 && column < cols;
    if (!validRow || !validCol) return;
    if (image[row][column] !== old) return;
    else {
      image[row][column] = newColor;
      depth(image, row - 1, column);
      depth(image, row + 1, column);
      depth(image, row, column - 1);
      depth(image, row, column + 1);
    }
  }
  depth(image, sr, sc);
  return image;
};

var floodFill2 = function (image, sr, sc, color) {
  let oldColor = image[sr][sc];
  if (oldColor === color) return image;
  let rows = image.length;
  let cols = image[0].length;
  function search(image, r, c) {
    if (r >= rows || r < 0) return;
    if (c >= cols || c < 0) return;
    if (image[r][c] !== oldColor) return;
    else {
      image[r][c] = color;
      search(image, r - 1, c);
      search(image, r + 1, c);
      search(image, r, c - 1);
      search(image, r, c + 1);
    }
  }
  search(image, sr, sc);
  return image;
};
/**
 * start from the given pixel of an image
 * //if the adjacent pixels have the same color check the pixels around it
 * keep branching outward. only stopping a chain if the value !== orignal color
 */
