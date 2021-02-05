console.log('*******class member decorators*******')
/**
 * @param  target class target Foo
 * @param name method name sum
 * @param descriptor method sum
 */
function log(target, name, descriptor) {
  const original = descriptor.value
  descriptor.value = function (...args) {
    console.log('Executed....')
    const result = original.apply(this, args)
    console.log(`Result: ${result}`)
    return result
  }

  return descriptor
}

class Foo {
  @log
  sum(a, b) {
    return a + b
  }
}

const foo = new Foo()
foo.sum(1, 2)

// *************************
console.log('-----------')

// Example 02
function logWithTagName(tagName) {
  return function decorator(target, name, descriptor) {
    const original = descriptor.value
    descriptor.value = function (...args) {
      console.log(`${tagName} Executed....`)
      const result = original.apply(this, args)
      console.log(`${tagName} Result: ${result}`)
      return result
    }

    return descriptor
  }
}

class Bar {
  @logWithTagName('service-foo')
  sum(a, b) {
    return a + b
  }
}

const bar = new Bar()
bar.sum(1, 2)

/**
 
*******class member decorators*******
Executed....
Result: 3
-----------
service-foo Executed....
service-foo Result: 3

 */
