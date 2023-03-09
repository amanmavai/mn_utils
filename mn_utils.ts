// Map Array to Object, maintains frequency of each item
export function mapArrToObj(arr: any[]) {
    return arr.reduce((acc, item) => {
      if (acc[item] != null) {
        acc[item] = acc[item] + 1;
      } else {
        acc[item] = 1;
      }
      return acc;
    }, {});
  }
  
  // generate unique ids
  export function uniqueID() {
    return Math.floor(Math.random() * Date.now());
  }
  
  export function replaceItemAtIndex(arr: any[], index: number, newValue: any) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }
  
  export function removeItemAtIndex(arr: any[], index: number) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }
  
  export function removeProp(obj: any, prop: string) {
    let { [prop]: _, ...rest } = obj;
    return rest;
  }
  
  let _uid = 0;
  export const uid = () => _uid++;