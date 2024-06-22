# Microservice Patterns to Know
- we were building our application using Microservice Pattern the other way we can build is monolithic 
- Microservices design patterns provide tried-and-true fundamental building blocks that can help write code for microservices.
- By utilizing patterns during the development process, you save time and ensure a higher level of accuracy versus writing code for your microservices app from scratch.
-   Creation of an application architecture that’s independently deployable and decentralized
-   Massive scalability when and if needed
-   New versions of microservices that can be rolled out incrementally, thus reducing downtime
-   Detecting unwanted behavior before an old application version is completely replaced
-   Use of multiple coding languages
-   Prevention of systemic failure due to a root cause in an isolated component
-   Real-time load balancing

Lets Discuss about Most used Design Patterns 
###  1. Database per service pattern:
![A diagram of database per service, a popular microservices design pattern.](https://miro.medium.com/v2/resize:fit:1400/1*G7R53rLa3PdKcAWexO2s1Q.png)
- A database dedicated to one service can’t be accessed by other services. This is one of the reasons that makes it much easier to scale and understand from a whole end-to-end business aspect.

### 2.  API gateway pattern:
- For large applications with multiple clients, implementing an API gateway pattern is a compelling option One of the largest benefits is that it insulates the client from needing to know how services have been partitioned. 
- However, different teams will value the API gateway pattern for different reasons. One of these possible reasons is because it grants a single entry point for a group of microservices by working as a reverse proxy between client apps and the services. 
- Another is that clients don’t need to know how services are partitioned, and service boundaries can evolve independently since the client knows nothing about them.
- The client also doesn’t need to know how to find or communicate with a multitude of ever-changing services. 
- You can also create a gateway for specific types of clients (for example, backends for frontends) which improve ergonomics and reduce the number of roundtrips needed to fetch data. Plus, an API gateway pattern can take care of crucial tasks like authentication, SSL termination and caching, which makes your app more secure and user-friendly.

### 3. Aggregator design pattern:
- An aggregator design pattern is used to collect pieces of data from various microservices and returns an aggregate for processing.
- To complete tasks, the aggregator pattern receives a request and sends out requests to multiple services, based on the tasks it was assigned. Once every service has answered the requests, this design pattern combines the results and initiates a response to the original request.

### 4. Asynchronous messaging:
- If a service doesn’t need to wait for a response and can continue running its code post-failure, asynchronous messaging can be used. Using this design pattern, microservices can communicate in a way that’s fast and responsive. Sometimes this pattern is referred to as event-driven communication.
- To achieve the fastest, most responsive app, developers can use a message queue to maximize efficiency while minimizing response delays. This pattern can help connect multiple microservices without creating dependencies or tightly coupling them. While there are tradeoffs one makes with async communication (such as eventual consistency), it’s still a flexible, scalable approach to designing a microservices architecture.
### 5.Strangler:
- Developers mostly use the strangler design pattern to incrementally transform a monolith application to microservices. This is accomplished by replacing old functionality with a new service — and, consequently, this is how the pattern receives its name. Once the new service is ready to be executed, the old service is “strangled” so the new one can take over.
- To accomplish this successful transfer from monolith to microservices, a facade interface is used by developers that allows them to expose individual services and functions. The targeted functions are broken free from the monolith so they can be “strangled” and replaced.


### 6.Circuit Breaker:

### 7. CQRS:

### 8. Decomposition:

