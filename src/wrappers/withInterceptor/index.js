import { branch, renderComponent } from 'recompose'

const withInterceptor = (component, propName = 'loading') =>
  branch(props => props[propName], renderComponent(component))

export default withInterceptor
