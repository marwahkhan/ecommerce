import React from "react";

const BoxSlider = ( ) =>{
    return(
        <div className="collection-box section">
        <div className="container-fluid">
            <div className="collection-grid">
                    <div className="collection-grid-item">
                        <a href="collection-page.html" className="collection-grid-item__link">
                            <img data-src="images/collection/fashion.jpg" src="images/collection/fashion.jpg" alt="Fashion" className="blur-up lazyload"/>
                            <div className="collection-grid-item__title-wrapper">
                                <h3 className="collection-grid-item__title btn btn--secondary no-border">Fashion</h3>
                            </div>
                        </a>
                    </div>
                    <div className="collection-grid-item">
                        <a href="collection-page.html" className="collection-grid-item__link">
                            <img className="blur-up lazyload" data-src="images/collection/cosmetic.jpg" src="images/collection/cosmetic.jpg" alt="Cosmetic"/>
                            <div className="collection-grid-item__title-wrapper">
                                <h3 className="collection-grid-item__title btn btn--secondary no-border">Cosmetic</h3>
                            </div>
                        </a>
                    </div>
                    <div className="collection-grid-item blur-up lazyloaded">
                        <a href="collection-page.html" className="collection-grid-item__link">
                            <img data-src="images/collection/bag.jpg" src="images/collection/bag.jpg" alt="Bag" className="blur-up lazyload"/>
                            <div className="collection-grid-item__title-wrapper">
                                <h3 className="collection-grid-item__title btn btn--secondary no-border">Bag</h3>
                            </div>
                        </a>
                    </div>
                    <div className="collection-grid-item">
                        <a href="collection-page.html" className="collection-grid-item__link">
                            <img data-src="images/collection/accessories.jpg" src="images/collection/accessories.jpg" alt="Accessories" className="blur-up lazyload"/>
                            <div className="collection-grid-item__title-wrapper">
                                <h3 className="collection-grid-item__title btn btn--secondary no-border">Accessories</h3>
                            </div>
                        </a>
                    </div>
                    <div className="collection-grid-item">
                        <a href="collection-page.html" className="collection-grid-item__link">
                            <img data-src="images/collection/shoes.jpg" src="images/collection/shoes.jpg" alt="Shoes" className="blur-up lazyload"/>
                            <div className="collection-grid-item__title-wrapper">
                                <h3 className="collection-grid-item__title btn btn--secondary no-border">Shoes</h3>
                            </div>
                        </a>
                    </div>
                    <div className="collection-grid-item">
                        <a href="collection-page.html" className="collection-grid-item__link">
                            <img data-src="images/collection/jewellry.jpg" src="images/collection/jewellry.jpg" alt="Jewellry" className="blur-up lazyload"/>
                            <div className="collection-grid-item__title-wrapper">
                                <h3 className="collection-grid-item__title btn btn--secondary no-border">Jewellry</h3>
                            </div>
                        </a>
                    </div>
                </div>
        </div>
    </div>
    );
}
export default BoxSlider;