export default function mySort(data, sortBy){
    switch(sortBy){
      case 'Up':
        return [...data].sort((a, b) => a.price - b.price)
      case 'Down':
          return [...data].sort((a, b) => b.price - a.price)
      case 'Default':
          return data
    }
}