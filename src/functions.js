console.log('*******Function decorator*******')
function FunctionDecorator(target, name, descriptor) {
  const original = descriptor.value
  descriptor.value = function (...args) {
    console.log('Executed....')
    const result = original.apply(this, args)
    console.log(`Result: ${result}`)
    return result
  }

  return descriptor
}

@FunctionDecorator
function mainFunction() {
  const subFunction01 = () => {
    console.log('subFunction01')
  }
  const subFunction02 = () => {
    console.log('subFunction02')
  }
  const subFunction03 = () => {
    console.log('subFunction03')
  }

  console.log('mainFunction')
}

mainFunction()
