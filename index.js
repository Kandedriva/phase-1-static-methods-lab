class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)

  }
  static sanitize(string) {
    const sanitizedStr = string.replace(/[^a-zA-Z0-9-' ]/g, '');
    return sanitizedStr;
  }
  // static titleize(string){
  //   const exceptions = ["a", "an", "but", "of", "and", "for", "at", "by", "from" ]
  //   let capitalizeWord = string.toUpperCase();
  //   let capitalizeFirstWord = string.charAt(0).toUpperCase() + string.slice(1)
  //   let lowerCaseString = string.toLowerCase()
  //   if(exceptions.includes(lowerCaseString)){
  //     return lowerCaseString.charAt(0).toUpperCase + lowerCaseString.slice(1)
  //   }
  //   return capitalizeWord + capitalizeFirstWord
  // }
  // static titleize(string) {
  //   const exceptions = ["a", "an", "but", "of", "and", "for", "at", "by", "from"];
    
  //   const words = string.toLowerCase().split(' ');

  //   const titleizedWords = words.map((word, index) => {
  //     if (index === 0 || !exceptions.includes(word)) {
  //       return word.charAt(0).toUpperCase() + word.slice(1);
  //     }
  //     return word;
  //   });

  //   return titleizedWords.join(' ');
  // }

static titleize(str) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    
    const titleizedStr = str.replace(/\w+/g, (match) => {
      const lowerCaseWord = match.toLowerCase();
      if (exceptions.includes(lowerCaseWord)) {
        return lowerCaseWord;
      }
      return lowerCaseWord.charAt(0).toUpperCase() + lowerCaseWord.slice(1);
    });

    return titleizedStr.charAt(0).toUpperCase() + titleizedStr.slice(1);
  }

}