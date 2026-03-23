export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/";

export const LOGO_URL =
  "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png";

// API URLs
export const CORS_PROXY = "https://corsproxy.io/";

export const SWIGGY_API_BASE = "https://www.swiggy.com";

export const RESTAURANT_SEARCH_API = 
  `${CORS_PROXY}${SWIGGY_API_BASE}/dapi/restaurants/search/v3?lat=22.56430&lng=88.36930&str=mumbai&trackingId=undefined&submitAction=ENTER&queryUniqueId=0337bbe6-d2e9-acee-b486-cc1d2564c72e&selectedPLTab=RESTAURANT`;

export const RESTAURANT_MENU_API = 
  `${SWIGGY_API_BASE}/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.56430&lng=88.36930&restaurantId=`;
