function countResponseTimeRegressions(responseTimes: number[]): number {
    let count = 0;
    let arraylengh = responseTimes.length;
    if(!responseTimes || arraylengh <= 1){
        return 0
    }else{
        for (var i = 1; i < arraylengh; i++) {
            const avg = avgFunction(responseTimes.slice(0,i))
            if(responseTimes[i]>avg){
                count++;
            }
        }
    }
    return count
}

function avgFunction(avgArray: number []): number{
    return avgArray.reduce((a, b) => a + b) / avgArray.length;
}
