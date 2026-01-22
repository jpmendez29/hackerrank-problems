# Merge and Sort Intervals

## 📌 Problem Description

Given an array of intervals `[startTime, endTime]`, **merge all overlapping intervals** and return a sorted array of **non-overlapping intervals**.

---

## 🧠 Example

### Input
intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]

### Output
[[1, 6], [8, 10], [15, 18]]


**Explanation**
- Step 1: Sort intervals by start time (already sorted).
- Step 2: Initialize merged list with first interval [1,3].
- Step 3: Compare [2,6] with last merged [1,3]. They overlap (2 ≤ 3), so merge into [1,6].
- Step 4: Compare [8,10] with last merged [1,6]. No overlap (8 > 6), append [8,10].
- Step 5: Compare [15,18] with last merged [8,10]. No overlap (15 > 10), append [15,18].
- Result: [[1,6],[8,10],[15,18]].

### Input Format
- The first line contains an integer n denoting the number of intervals.
- The second line contains an integer m denoting the length of individual interval arrays (always 2).
- Each of the next n lines contains two space-separated integers startTime and endTime.
- Intervals may be provided in any order; duplicates and fully contained intervals are allowed.

4
2
1 3
2 6
8 10
15 18

### Constraints
- `0 ≤ intervals.length ≤ 100000`
- `intervals[i].length == 2 for all 0 ≤ i < intervals.length`
- `0 ≤ intervals[i][0] < intervals[i][1] ≤ 10^9 for all 0 ≤ i < intervals.length`

### Output Format
Return a 2D array of two space-separated integers start and end, representing the merged intervals sorted by increasing start time.

### Sample Input 0
0
0

### Sample Input 1
1
2
5 10

### Sample Output 1
5 10

### Approach
- Sort intervals by start time.
- Initialize a merged list with the first interval.
- For each subsequent interval:
    - If it overlaps with the last interval in the merged list, merge them.
    - Otherwise, append it as a new interval.
- Return the merged list.

### Complexity
- **Time:** O(n log n)
- **Space:** O(n)