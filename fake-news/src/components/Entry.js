import React from 'react';

const Entry = React.createContext({
    submitterName: 'Guest',
    dataType: null, // data type - text, link, or photo
    data: null,
    upvotes: 0,
    downvotes: 0,
    comments: [],
    id: 0,
});


// render() {
//     return (
//         <div>
//             <div class="article-content">
//                 <p>Submitted by + {this.state.submitterName}</p>
//                 <p>data</p>
//             </div>
//             <div class="article-rating">
//                 <h2>Reliability score</h2>
//                 <button>upvotes</button>
//                 <button>downvotes</button>
//                 <h2>Comments</h2>

//             </div>
//         </div>

//     );
// }
// }

export default Entry;