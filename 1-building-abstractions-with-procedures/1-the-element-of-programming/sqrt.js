import {avg, divide, lt, subtract, square, xif, abs} from '../../lib.js'

const goodEnough = (guess, x) => lt(abs(subtract(square(guess), x)), 0.001)

const improveGuess = (guess, x) => avg(guess, divide(x, guess))

const sqrtIter = (guess, x) =>
    xif(goodEnough(guess, x),
        () => guess,
        () => sqrtIter(improveGuess(guess, x), x))

/**
 The importance of this decomposition strategy is not simply that
 one is dividing the program into parts. After all, we could take any large
 program and divide it into parts—the ﬁrst ten lines, the next ten lines,
 the next ten lines, and so on. Rather, it is crucial that each procedure ac-
 complishes an identiﬁable task that can be used as a module in deﬁning
 other procedures.
 */
export const sqrt = (x) => sqrtIter(1.0, x)