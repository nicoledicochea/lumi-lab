Routes
    LogIn
    SignUp
    Inventory
    Restock
    ItemPage (Add/Edit)
    New Inventory Item leads to BLANK Item Page
    Auth

LogIn
    GET LogIn page
    Link to googleAuth

SignUp
    GET SignUp page
    Link to googleAuth signUp

Auth
    Google Auth
    GET /auth/google

    Google auth callback 
    GET auth/google/callback

    Logout user
    GET /auth/logout

Inventory  
    GET Inventory page
    GET Inventory Items
    Link to Add Inventory Item Page

ItemPage
    GET inventory item information
        Item name
        Item pic
        Sku
        Status: In stock, reorder, upcoming
        Quantity Left

        Category (ie. Blood Lab, Assays) (editable text box)
            GET categories from database
            PUT updated categories 
        Usage (PUT)
            Quantity Used
            Date Used
        Reorder at (PUT)
            Quantity
            Unity
        Notes (editable text box)
            GET notes from database
            PUT updated notes
        Order Tracking (UPDATE previous orders (PUT))
            Item name
            Supplier
            Quantity
            Cost
        Previous Orders (GET)
            Item Name
            Supplier
            Quantity
            Cost

AddItem
    GET blank ItemPage


Restock
    GET Inventory items
        Filter: display items with status
            Reorder
            Upcoming