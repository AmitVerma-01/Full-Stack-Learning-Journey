// const coding=["js","cpp","py","numpy"]
// const val = coding.forEach( (item)=> {
//     // console.log(item);
//     return item;
// } )

// console.log(val);

const arr = [ 1, 2, 3 , 4 , 5 ,6 ,7]

// const val = arr.filter( (num) => {
//     return num>4
//  })

// console.log(val);

const newNum = [];

arr.forEach( (num) => {
    if(num>4){
        newNum.push(num)
    }
} )

console.log(newNum);

const books = [{
    title: 'How to win friends and influence people',
    authors: ['Dale Carnegie'],
    publisher: 'Pocket Books',
    year: '1936'
  }, {
    title: 'Management: tasks, responsibilities, practices',
    authors: ['Peter F. Drucker'],
    publisher: 'Harper Business',
    year: '1985'
  }, {
    title: 'Strength finder 2.0',
    authors: ['Tom Rath'],
    publisher: 'Gallup Press',
    year: '2007'
  }, {
    title: 'In search of excellence: Lessons from America\'s best-run companies',
    authors: ['Thomas Peters', ' Robert H. Waterman'],
    publisher: 'Harper Collins',
    year: '1982'
  }, {
    title: 'Built to last: Successful habits of visionary companies',
    authors: ['James C. Collins', 'Jerry I. Porras'],
    publisher: 'Harper Collins',
    year: '1994'
  }, {
    title: 'Reengineering the corporation: A manifesto for business revolution',
    authors: ['Michael Hammer', 'James A. Champy'],
    publisher: 'Harper Collins',
    year: '1993'
  }, {
    title: 'Competitive advantage: Creating and sustaining superior performance',
    authors: ['Michael E. Porter'],
    publisher: 'Free Press',
    year: '1998'
  }, {
    title: 'Crossing the chasm: Marketing and selling technology products to mainstream customers',
    authors: ['Geoffrey A. Moore', 'Regis McKenna'],
    publisher: 'Pocket Books',
    year: '1936'
  }, {
    title: '7 habits of highly effective people: Powerful lessons in personal change',
    authors: ['Stephen R. Covey'],
    publisher: 'Simon and Shuster',
    year: '1990'
  }, {
    title: 'The Six Sigma Way',
    authors: ['Peter S. Pande et al', 'Robert P. Neuman', 'Roland R. Cavanagh'],
    publisher: 'McGraw Hill',
    year: '2000'
  }, {
    title: 'The innovator\'s dilemma: When new technologies cause great firms to fail',
    authors: ['Clayton M. Christensen'],
    publisher: 'Harvard Business School Press',
    year: '1997'
  }, {
    title: 'The Essential Drucker',
    authors: ['Peter F. Drucker'],
    publisher: 'Harper Business',
    year: '2001'
  }];

//   const userBooks = books.filter( (bk) => bk.year>1999 )
  const userBooks = books.filter( (bk) => {
    return bk.year>1999
 })

  console.log(userBooks);