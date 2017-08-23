# Embeddable widgets built with Node.js microservices and Docker

## Getting started:
Clone the project:
`git clone https://github.com/technoboom/node-microservices-widgets`

## Services:
1. Users - RESTful API for users authorization, registration, etc.
2. Web - represents Web UI for clients. Provides an ability to manage
widgets and their contents.
3. Notifications - Common interface for delivering notifications to users.
4. Admin - represents Web UI for administrators. Provides an ability to
manage users, projects, widgets, etc.
5. Chat - provides an access to chat content via RESTful API.

## Resources:
1. RAML (https://raml.org/) - RESTful API Modeling Language (RAML)
makes it easy to manage the whole API lifecycle from design to sharing.
It's concise - you only write what you need to define - and reusable.
It is machine readable API design that is actually human friendly.