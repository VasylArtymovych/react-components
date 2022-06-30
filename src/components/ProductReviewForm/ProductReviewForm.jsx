import styled from "styled-components";



// const ErrorText = styled('p')`
//     color: red;
// `;
// const FromError = ({name}) => {
//     return (
//         <ErrorMessage
//             name={name}
//             render={message => <ErrorText>{message}</ErrorText>}
//         />
//     )
// }

const products = ['Sweater', 'Keyboard', 'Sofa', 'Freezer'];

export const ProductReviewForm = () => {
    const handleSubmit = () => {
    
    };

    return (
    <form>
        <div>
            <label htmlFor="name"></label>
            <div>
            <input type='text' name='name' placeholder="Full name"/>
            </div>
        </div>
        <div>
            <label htmlFor="name"></label>
            <div>
            <input type='text' name='name' placeholder="Full name"/>
            </div>
        </div>
        <div>
            <label htmlFor="name"></label>
            <div>
            <input type='text' name='name' placeholder="Full name"/>
            </div>
        </div>
        <div>
            <label htmlFor="name"></label>
            <div>
            <input type='text' name='name' placeholder="Full name"/>
            </div>
        </div>
    </form>
    );
};

// <form autoComplete="off">
//         <div>
//             <label htmlFor="name">Full name</label>
//             <div>
//                 <input name="name" type="text" placeholder="Full name" />
//                 <FormError name="name" />
//             </div>
//         </div>
//         <div>
//             <label htmlFor="email">Email address</label>
//             <div>
//                 <input name="email" type="text" placeholder="Email address" />
//                 <FormError name="email" />
//             </div>
//         </div>
//         <div>
//             <label htmlFor="product">Product</label>
//             <div>
//                 <input name="product" as="select">
//                 <option value="">Select a product</option>
//                 {products.map((product, idx) => (
//                     <option value={product} key={idx}>
//                     {product}
//                     </option>
//                 ))}
//                 </input>
//                 <FormError name="product" />
//             </div>
//         </div>
//         <div>
//             <label htmlFor="title">Title</label>
//             <div>
//                 <input name="title" type="text" placeholder="Title" />
//                 <FormError name="title" />
//             </div>
//         </div>
//         <div>
//             <label htmlFor="review">Review</label>
//             <div>
//                 <input name="review" as="textarea" placeholder="Review" />
//                 <FormError name="review" />
//             </div>
//         </div>
//         <div>
//             <label htmlFor="rating">Rating</label>
//             <div>
//                 <input name="rating" type="number" placeholder="Rating" />
//                 <FormError name="rating" />
//             </div>
//         </div>
//         <div>
//             <div>
//                 <label htmlFor="wouldRecommend">
//                 <input name="wouldRecommend" type="checkbox" />
//                 Would recommend
//                 </label>
//             </div>
//         </div>
//         <button type="submit">Submit</button>
//     </form>