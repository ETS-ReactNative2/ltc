import {
  drop,
  filter,
  fromPairs,
  identity,
  ifElse,
  isNil,
  map,
  pipe,
  split,
  test
} from 'ramda'

const parseSearch = pipe(
  drop(1),
  split('&'),
  filter(identity),
  map(split('=')),
  fromPairs,
  map(ifElse(isNil, () => true, identity)),
  map(ifElse(test(/^true|t$/i), () => true, identity)),
  map(ifElse(test(/^false|f$/i), () => false, identity))
)

export default parseSearch
