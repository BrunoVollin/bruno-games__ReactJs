export default function (num, per) {
    const percent = Math.round((num * 100) / per);
    
    const rebate = 100 - percent.toFixed(0);
    return rebate;
}