function solution(price, money, count) {
    const totalCost = (price * count * (count + 1)) / 2;
    return Math.max(totalCost - money, 0);
}