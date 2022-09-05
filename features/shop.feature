Feature: Shop a backpack and tshirt

@smoke
Scenario: Are in inventory page and need to add diferents products in a cart and checkout

Given Login
When put in cart backpack and tshirt
When click in cart button
Then validate items in the cart
Then proceed with checkout
Then fill the data and continue
Then Verify the price and finish