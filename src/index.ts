export interface ArqlAnd {
  op: 'and'
  expr1: ArqlOp,
  expr2: ArqlOp, 
}

export interface ArqlOr {
  op: 'or'
  expr1: ArqlOp,
  expr2: ArqlOp, 
}

export interface ArqlEquals {
  op: 'equals'
  expr1: string
  expr2: string
}

export type ArqlOp = (ArqlAnd | ArqlOr | ArqlEquals)

export function equals(expr1: string, expr2: string): ArqlEquals {
  return { op: 'equals', expr1, expr2 }
}

export function or(...exprs: ArqlOp[]): ArqlOp {
  if (exprs.length == 0) {
    throw new Error('0 arguments pass to or()')
  }
  if (exprs.length == 1) {
    return exprs[0];
  }
  const op: ArqlOr = {
    op: 'or', 
    expr1: exprs.shift()!,
    expr2: exprs.length > 1 ? or(...exprs) : exprs[0]
  }
  return op;
}

export function and(...exprs: ArqlOp[]): ArqlOp {
  if (exprs.length == 0) {
    throw new Error('0 arguments pass to and()')
  }
  if (exprs.length == 1) {
    return exprs[0]
  }
  const op: ArqlAnd = {
    op: 'and', 
    expr1: exprs.shift()!,
    expr2: exprs.length > 1 ? and(...exprs) : exprs[0]
  }
  return op;
}