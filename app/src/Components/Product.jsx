import React from 'react';
import Lists from './Lists';

import portret1 from "../portret/portret (1).jpg"
import portret2 from "../portret/portret (2).jpg"
import portret3 from "../portret/portret (3).jpg"
import portret4 from "../portret/portret (4).jpg"
import portret5 from "../portret/portret (5).jpg"
import portret6 from "../portret/portret (6).jpg"
import portret7 from "../portret/portret (7).jpg"
import portret8 from "../portret/portret (8).jpg"



const Product = () => {
    return (
        <>
            <h1 style={{ textAlign: "center" }}>When you purchase our products</h1>

            <div className='product'>


                <Lists name="Rolex box" img={portret6}/>
                <Lists name="aaa" img={portret3}/>
                <Lists name="aaa" img={portret4}/>
                <Lists name="aaa" img={portret5}/>
                <Lists name="rolex pasport" img={portret1} />
                <Lists name="aaa" img={portret2} />
                <Lists name="aaa" img={portret8}/>
                <Lists name="aaa" img={portret7}/>

               


            </div>
        </>
    );
};

export default Product;