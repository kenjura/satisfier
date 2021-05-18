// credit https://medium.com/weekly-webtips/deep-clone-with-vanilla-js-5ef16e0b365c

export default function cloneDeep(entity, cache = new WeakMap) {
  const referenceTypes = ['Array', 'Object', 'Map', 'Set', 'WeakMap', 'WeakSet'];
  const entityType = Object.prototype.toString.call(entity);
  if (!new RegExp(referenceTypes.join('|')).test(entityType)) return entity;
  if (cache.has(entity)) {
    return cache.get(entity);
  }
  const c = new entity.constructor;
  
  if (entity instanceof Map || entity instanceof WeakMap) {
    entity.forEach((value, key) => c.set(cloneDeep(key), cloneDeep(value)));
  }
  if (entity instanceof Set || entity instanceof WeakSet) {
    entity.forEach((value) => c.add(cloneDeep(value)));
  }
  cache.set(entity, c);
  return Object.assign(c, ...Object.keys(entity).map((prop) => ({ [prop]: cloneDeep(entity[prop], cache) })));
}