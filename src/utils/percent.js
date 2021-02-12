export default function (num, per) {
    return Math.round(((num / 100) * per) * 100).toFixed(1);
}