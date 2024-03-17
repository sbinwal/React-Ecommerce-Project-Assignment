About Project

Folder Structure
1. src -> components -> Auth(For user authentication) , CartItem(For Shoing Cart Items), Footer, Header, Modal,Product(Store Information about product like PDP,PLP),routes(contain routes information),services(For maupulating the data in the server),Slice(For creating slices for redux store), Store(for creating redux store)

2. utils - Contain two files APIRoutes(for storing API end points), Constants(For storing constants file like baseurl,webhookurl,webhookId,products information etc)

3. src -> pages(for showing the UI to user) -> Login(For Login Page), Product(For product info),Shopping Cart(For showing cart info)

4. Login Flow
   Created a login page with email field and password field and when user click on login button than handle submit function is called which is handling the API Call to the server. The token received from API response is stored in localstorage. Login API is called

5. Product Listing Page
   Product Listing data is shown using productlisting component. I have made json for product data and map it in productlisting component.

6. Product Decsription Page
   Product Description page contain the information of a perticular product. When user clicks on a perticular card in PLP than using the state provided by react-router-dom I have passed that data to the product description page using useLocation hook, Using useLocation hook I have extracted the product data in PDP page.

7. ADD TO CART
   In PDP page I have add to cart button and when I click on that button than the product data object is stored in the redux store and local storage inside an array. I have initialised the state of cartSlice to the data which is present in the localstorage. By doing this if we refresh the page than also the cart data will persist.

8. 


