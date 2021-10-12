Feature: Shopping Cart Workflow
    As a user
    I would like to be able to update my shopping cart
    so that I am able to proceed with checkout
        
    Background: Navigate to react app
        Given I am in react app landing page
        Then I should be able to see the different products listed  

        Scenario: Add products to shopping cart
            When I add a product to cart
            Then I should be able to see it in shopping cart
 
         Scenario: Increment products in shopping cart
            When I increase a product quantity in cart
            Then I should be able to see the amount updated

        Scenario: Remove products from shopping cart
            When I remove a product from cart
            Then I should not be able to see it in shopping cart