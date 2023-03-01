# Data

## Data Layer

### Client

- username: string
- email: string
- isLogged: boolean
- shoppingCart: Paintings[]
- orders: Orders[]

### Paintings

- name: string
- artist: string
- price: number
- image: string
- description: string
- isAvailable: boolean

### Orders

- Status: pending, delivered, returned, lost, cancelled

## Data Modifications

### User

- Set isLogged
- Unset isLogged
- Modify username
- Modify email address
- Add a painting to shoppingCart
- Remove a painting from shoppingCart
- Add an order to the list of orders
- Remove an order from the list of orders

### Paintings

- Set isAvailable
- Unset isAvailable
- Increase price
- Decrease price

### Orders

- Create an order
- Set state to pending
- Set state to delivered
- Set state to returned
- Set state to lost
- Set state to cancelled
