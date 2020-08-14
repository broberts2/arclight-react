export default {
  randomized: (n) => {
    let arr = [];
    for (let i = 0; i <= n; i++) {
      arr.push({ x: i, y: Math.random() * 200 });
    }
    return arr;
  },
  linear: (n) => {
    let arr = [];
    for (let i = 0, last = 0; i <= n; i++) {
      arr.push({ x: i, y: (last = last + Math.random() * 15) });
    }
    return arr;
  },
};
