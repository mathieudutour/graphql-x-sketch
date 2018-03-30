# GraphQL x Sketch

Querying a [Sketch](https://sketchapp.com) file with the flexibility of [GraphQL](http://graphql.org)

![dziqgfjx4aafxnl jpg-large](https://user-images.githubusercontent.com/3254314/38148368-7eac0150-3456-11e8-8ab2-49188d9575e6.jpeg)

## Installation

```bash
npm install -g graphql-x-sketch
```

## Usage

### Server

```bash
graphql-x-sketch path/to/your/sketch/file
```

You can either point to a sketch file directly or to a folder that contains multiple Sketch files. You can also pass multiple paths.

This will spawn a local GraphQL server (and a GraphiQL instance so that you can play with it).

The server will also serve the bitmaps bundled in the Sketch files. The `image` field of a `BitmapLayer` will be the URL to the image for example.

The server will also watch the paths for new/updates Sketch files.

### Single query

You can also directly run a GraphQL query without spwaning a server:

```
graphql-x-sketch path/to/your/sketch/file --run="my-graphql-query" --variables="{\"myVariable\": 3}"
```

That could serve as an alternative to [`sketchtool`](https://developer.sketchapp.com/guides/sketchtool/) for example (and runs on any platform since it doesn't have any dependency to Sketch)

## Contributing

The graphQL schemas are in [`/lib/schema`](./lib/schema)
