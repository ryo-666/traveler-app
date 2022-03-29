class NumberUtil {

    // 引数の数以上の最小の整数を返します(四捨五入なしの無条件切り上げ)
    static roundByCeil = (numerator, denominator) => {
        return Math.ceil(numerator / denominator)
    }
}

export default NumberUtil