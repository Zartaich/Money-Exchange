// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

    const result = {};

    const H = Math.floor(currency / 50);
    const Q = Math.floor((currency - H * 50) / 25);
    const D = Math.floor((currency - H * 50 - Q * 25) / 10);
    const N = Math.floor((currency - H * 50 - Q * 25 - D * 10) / 5);
    const P = Math.floor((currency - H * 50 - Q * 25 - D * 10 - N * 5) / 1);

    H > 0 ? result.H = H : null;
    Q > 0 ? result.Q = Q : null;
    D > 0 ? result.D = D : null;
    N > 0 ? result.N = N : null;
    P > 0 ? result.P = P : null;

    if (currency <= 0) {
        return {};
    } else if (currency > 10000) {
        return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    } else {
        return result
    };
}
