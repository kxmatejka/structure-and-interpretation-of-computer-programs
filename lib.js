export const sum = (...args) => args.reduce((p, c) => p + c)
export const multiply = (...args) => args.reduce((p, c) => p * c)
export const square = (x) => multiply(x, x)

export const gt = (x, y) => x > y
export const eq = (x, y) => x === y
export const lt = (x, y) => x < y

export const cond = (...args) => {
    for (const [p, e] of args) {
        if (p) {
            return e
        }
    }
}

export const xif = (p, c, a) => (p) ? c : a

export const and = (...args) => args.reduce((p, c) => !!(p && c))
export const or = (...args) => args.reduce((p, c) => !!(p || c))
export const not = (e) => !e

export const gte = (x, y) => or(lt(x, y), eq(x, y))
export const lte = (x, y) => or(gt(x, y), eq(x, y))
