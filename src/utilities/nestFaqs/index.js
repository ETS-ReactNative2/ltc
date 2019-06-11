import { ascend, groupBy, head, map, pick, prop, sortWith, values } from 'ramda'

export default function nestFaqs (faqs) {
  return map(cat => {
    const { categoryName, categoryDescription } = head(cat)

    return {
      name: categoryName,
      description: categoryDescription,
      faqs: map(
        pick(['question', 'answer', 'tags']),
        sortWith([ascend(prop('faqSpot'))], cat)
      )
    }
  }, values(groupBy(f => f.categorySpot, faqs)))
}
