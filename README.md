# Mongoose-assignment-2

## Questions and Answers

### 1: What is the purpose of creating a model with an interface and schema in MongoDB? How does it help in defining the structure of a collection?

In MongoDB, creating a model with an interface & schema has multiple uses.

- The first benefit of using a model is that it offers a high-level abstraction for interacting with the database collection. It serves as a bridge between the application & the database, simplifying CRUD operations.

- The structure, data types & validation policies for the documents in a collection are also specified by a schema. It promotes consistency & guarantees that the data conforms to a predetermined structure. I can uphold data integrity & stop erroneous or inconsistent data from being added to the collection by defining a schema.

- A model with an interface also offers a means of creating & running complex queries, aggregations, & updates on the collection. It contains the collection's logic & behavior, making it simpler to work with the data consistently throughout the application.

Overall, In MongoDB, building a model with an interface & schema improves code organization, & data validation, & makes using the database collection easier.

### 2. Explain the concept of field filtering in MongoDB. How can you specify which fields to include or exclude in the returned documents?

Field filtering in MongoDB allows us to specify which fields to include or exclude from the documents returned in a query result.

To specify which fields to include or exclude, we can use the projection parameter in MongoDB queries. The projection parameter can take two forms: inclusion or exclusion.

- For inclusion, we explicitly list the fields you want to include by setting their value to one in the projection parameter.

`db.books.find({}, { title: 1, price: 1 })`

This query will return documents with only the specified fields (title & price) included.

- For exclusion, you explicitly list the fields you want to exclude by setting their value to 0 in the projection parameter. For example:

`db.books.find({}, { title: 0, price: 0 })`

This query will return documents with all fields except the specified ones (title & price).

Field filtering allows us to control the structure of the returned documents, reducing the network overhead & improving query performance by fetching only the necessary data.

### 3. What are instance methods in MongoDB models? Provide an example of a custom instance method and explain its purpose.

Instance methods in MongoDB models are functions that can be specified on specific documents (instances) within a model. These methods can be used to carry out operations particular to those documents & are available on document instances.

Let's look at an illustration. Let's say we have a model in MongoDB for a "User" collection, & we want to define a special instance method called "getFullName" that returns a user's full name by combining their first name & last name fields.

```
import { Model, Schema, model } from 'mongoose';

interface IUser {
  firstName: string;
  lastName: string;
}

interface IUserMethods {
  fullName(): string;
}

type UserModel = Model<IUser, {}, IUserMethods>;

const schema = new Schema<IUser, UserModel, IUserMethods>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true }
});

schema.method('getFullName ', function getFullName() {
  return this.firstName + ' ' + this.lastName;
});

const User = model<IUser, UserModel>('User', schema);
```

In this example, I define the "getFullName" function using the methods property of the userSchema. The function is defined as a regular JavaScript function, and it accesses the firstName & lastName fields of the document using the this keyword.

Once the instance method is defined, we can use it on individual user documents:

```
const user = new User({ firstName: 'John', lastName: 'Doe' });
console.log(user.getFullName());
```

The purpose of this custom instance method is to encapsulate logic specific to an individual document. In this case, it provides a convenient way to retrieve the full name of a user without having to manually concatenate the first name & last name fields every time.

### 4. How do you use comparison operators like "$ne," "$gt," "$lt," "$gte," and "$lte" in MongoDB queries? Provide examples to illustrate their usage.

The usage of comparison operators "$ne", "$gt", "$lt", "$gte", "$lte" in mongodb is written below with examples.

- "$ne": This operator matches values that are not equal to a specific value

          `Example: database.BookList.find({genre: {$ne: "Fantasy"}});`

- "$gt": This operator matches values that are greater than a specific value

          `Example: database.BookList.find({publicationYear: {$gt: 2010}});`

- "$lt": This operator matches values that are less than a specific value

          `Example: database.BookList.find({rating: {$lt: 4.0}});`

- "$gte": This operator matches values that are greater than or equal to a specific value

          `Example: database.BookList.find({price: {$gte: 50}});`

- "$lte": This operator matches values that are less than or equal to a specific value

          `Example: database.BookList.find({publicationYear: {$lte: 2015}});`

### 5. What are MongoDB’s "$in" and "$nin" operators? How can you use them to match values against an array of values or exclude values from a given array?

The mongodb operators "$in" & "$nin" are used to match values inside an array or exclude values from a given array respectively. A separate description with examples are given below.

    1. By using "$in" operator we can match values of an array in all the documents inside a collection.
    Example: database.BookList.find({genre: {$in: ["Mystery", "Thriller"]}});

    2. using "$nin" operator we can match the documents in which inside an array no value matches the value specified.
    Example: database.BookList.find({genre: {$in: ["Romance", "Science Fiction"]}});
