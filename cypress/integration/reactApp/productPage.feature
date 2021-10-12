Feature: Product Page Workflow
    As a user
    I would like to be able to view products in product page
    And filter them by different filtering options
    so that I can add them to my shopping cart
        
    Background: Navigate to react app
        Given I am in react app landing page
        Then I should be able to see the different products listed  

        Scenario: Filter products by size
            When I filter products by XL size
            Then I should be able to see products listed by specified size

        Scenario: Filter products by price
            When I filter products by lowest price
            Then I should be able to see products listed by lowest price        