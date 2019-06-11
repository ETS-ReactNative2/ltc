import { isEmpty, join, length, pipe, reduce, reverse, split } from 'ramda'

const softWrap = pipe(
  split(' '),
  reduce((acc, wd) => {
    if (isEmpty(acc)) {
      return [wd]
    }

    const [currentLine, ...otherLines] = acc
    const updatedLine = `${currentLine} ${wd}`

    if (length(updatedLine) > 80) {
      return [wd, ...acc]
    }

    return [updatedLine, ...otherLines]
  }, []),
  reverse,
  join('\n')
)

export default softWrap
