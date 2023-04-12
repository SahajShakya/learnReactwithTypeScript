type RandomNumberType = {
    value: number
}
type PositiveNumber = RandomNumberType & {
    isPostive: boolean,
    isNegative?: never,
    isZero?: never,
}
type NegativeNumber = RandomNumberType & {
    isNegative: boolean,
    isPostive?: never,
    isZero?: never,
}
type Zero = RandomNumberType & {
    isZero: boolean,
    isPostive?: never,
    isNegative?: never,
}
type RandomNumberProps = PositiveNumber | NegativeNumber | Zero; 

export const RandomNumber = ({
    value,
    isPostive,
    isNegative,
    isZero,
}:RandomNumberProps)  => {
    return (
        <div>
            {value} {isPostive && 'positive'} {isNegative && 'Negative'} {isZero && 'zero'}    
        </div>
    )
}

