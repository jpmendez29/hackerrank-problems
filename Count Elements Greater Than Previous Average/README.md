# Count Elements Greater Than Previous Average

## 📌 Problem Description
Given an array of positive integers, return the number of elements that are **strictly greater than the average of all previous elements**.

- The first element is always skipped since it has no previous elements.
- The result should be a single integer.

---

## 🧠 Example

### Input
[100, 200, 150, 300]

**Output**
2

**Explanation**
- Day 0: 100 → skipped
- Day 1: 200 > average(100) → count = 1
- Day 2: 150 > average(100, 200) → not greater
- Day 3: 300 > average(100, 200, 150) → count = 2

### Input Format
- Integer `n` (0 ≤ n ≤ 1000), number of elements
- Next `n` lines contain integers `responseTimes[i]`
- If `n = 0`, no additional input

### Output Format
- Single integer representing the count

### Constraints
- `0 ≤ responseTimes.length ≤ 1000`
- `1 ≤ responseTimes[i] ≤ 10^9`

### Sample Input
4
100
200
150
300

### Sample Output
2

### Approach
- Keep a running sum of previous elements
- For each index `i > 0`, compare `responseTimes[i]` with `sum / i`
- Increment the count if greater

### Complexity
- **Time:** O(n)
- **Space:** O(1)
