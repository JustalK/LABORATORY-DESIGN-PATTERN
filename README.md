# LABORATORY-DESIGN-PATTERN

This project is a documentation for sharing some of the pattern I use in my different project and some patern I consider interesting to know. You might find the same information on differente pages accros the web, I try to make a list at one place that I can easily consultate from time to time.

## Plan

## Patterns

### Database Pattern

#### Data Mapper

```
*PRO*
- Easy to implement
- Reduce the tech debt in case of change of ORM/ODM
```

#### Domain Object Assembler

```
*PRO*
- Reduce the number of data and collection in the database
*CONS*
- Increase the number of read
```

#### Lazy Load

```
*PRO*
- Can reduce simultaneous read at the database
```

#### Unit of Work

A very nice one to use everytime !

```
*PRO*
- Reduce the load on the database by grouping queries with bulk
- Reduce the number of inconsistencies by allowing to rollback with transaction
```

### Generating Objects

#### Abstract Factory Pattern
#### Factory Pattern
#### Singleton Pattern

### Schema Pattern

#### Approximation Pattern

```
*PRO*
- Fewer write to the database

*CONS*
- Value approximated is not the exact value at all time
- Implementation has to be done inside the app
```

#### Attribute Pattern

```
*PRO*
- Less indexes
- Make queries easier to write
```

#### Bucket Pattern

```
*PRO*
- Reduce the number of document in a collection
- Improve index performance
```

#### Computed Pattern

```
*PRO*
- Reduce the load on the server
- Queries easier to write
- Particularly good when a very long calculation value need to be shown or get many time

*CONS*
- Increase the number of write
```

#### Document Versioning Pattern

```
*PRO*
- Reduce the number of document on one database
- Faster the queries

*CONS*
- Double the number of write
```

#### Extended Reference Pattern

```
*PRO*
- Reduce the number of join
- Faster the queries

*CONS*
- Duplicate the data
- Make the update more complex
```

#### Outliner Pattern

```
*PRO*
- Faster the read queries

*CONS*
- Increase the number of write (double db)
- Harder to implement
```

#### Polymorphic Pattern

```
*PRO*
- Reduce the number of read

*CONS*
- Increase the size of document
```

#### Schema Versioning Pattern

This pattern should be utilized in every database.

```
*PRO*
- Make it easy to control a shema migration
- Easy to implement
- Reduce the technical debt
```

#### Tree Pattern

```
*PRO*
- Faster the read queries by removing join

*CONS*
- Update becomes complexe
```

## Links

[Abstract Factory Pattern vs Factory Pattern](https://pediaa.com/what-is-the-difference-between-factory-pattern-and-abstract-factory-pattern/)
