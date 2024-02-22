import PropTypes from 'prop-types';

export default function Header({ cartCount, favoriteCount }){

    return(
        <header className="header">
            <div className="header_logo">BeerKongo</div>
            <div className='header_info'>
                <div className="cart">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="10" cy="20" r="1"></circle>
                    <circle cx="18" cy="20" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 1.92 1.61H18"></path>
                    <path d="M16 5l-1-3H5a1 1 0 0 0 0 2h10.1"></path>
                    </svg>
                    <p>{cartCount}</p>
                </div>
                <div className="favorite">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <p>{favoriteCount}</p>
                </div>
            </div>
        </header>
    );
}

Header.PropTypes ={
    cartCount : PropTypes.number.isRequired,
    favoriteCount : PropTypes.number.isRequired
};