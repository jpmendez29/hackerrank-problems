function mergeHighDefinitionIntervals(intervals: number[][]): number[][] {
    if(intervals.length === 0) return [];
    
    let sortArra = intervals.map(interavl => [...interavl]).sort((a, b) => a[0] - b[0]);
    let completeIntervals: number[][] = [[...sortArra[0]]];

    for (let i = 1; i < sortArra.length; i++) {
        let lastInterval : number[] = completeIntervals[completeIntervals.length - 1];
        let newInterval : number [] = sortArra[i];

        if(newInterval[0] <= lastInterval[1]){
            lastInterval[1] = Math.max(lastInterval[1],newInterval[1])
        }else{
            completeIntervals.push([...newInterval])
        }
    }
    return completeIntervals;
}