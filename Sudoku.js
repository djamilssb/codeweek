let grid = [
    [-5, -4, 0, 0, -2, 0, -8, 0, -6],
    [0, -1, -9, 0, 0, -7, 0, 0, -3],
    [0, 0, 0, -3, 0, 0, -2, -1, 0],
    [-9, 0, 0, -4, 0, -5, 0, -2, 0],
    [0, 0, -1, 0, 0, 0, -6, 0, -4],
    [-6, 0, -4, 0, -3, -2, 0, -8, 0],
    [0, -6, 0, 0, 0, 0, -1, -9, 0],
    [-4, 0, -2, 0, 0, -9, 0, 0, -5],
    [0, -9, 0, 0, -7, 0, -4, 0, -2]
];
update_grid(grid);
function input(val, pos_i, pos_j) {
    if (val >= 0) {
        grid[pos_i][pos_j] = val;
        update_grid(grid);
    }
}
function check_line(index) {
    let line = grid[index];
    for (let i = 0; i < line.length; i++) {
        if (has_double(line, line[i]) == true) {
            return false;
        }
    }
    return true;
}
function check_col(index) {
    let col = [];
    for (let i = 0; i < grid_size; i++) {
        col.push(grid[i][index]);
    }
    for (let i = 0; i < grid_size; i++) {
        if (has_double(col, col[i])) {
            return false;
        }
    }
    return true;
}
function has_double(l, n) {
    let cpt = 0;
    for (let i = 0; i < l.length; i++) {
        if (Math.abs(l[i]) == Math.abs(n)) {
            cpt = cpt + 1;
        }
        if (cpt <= 1) {
            return false;
        }
        if (cpt == 2) {
            return true;
        }
    }
}
//# sourceMappingURL=Sudoku.js.map