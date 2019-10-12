
## ArQL ops

Very tiny (53 lines including whitespace) library to build ArQL for queries for Arweave <https://www.github.com/ArweaveTeam/arweave-js>

Packaged up with <https://github.com/pikapkg/pack>, for web, node, typescript and even deno! 

For fun, it's published on the on the arweave blockchain itself :)

`npm install https://kybjhezuyftg.arweave.net/ITTPLYoxidZzAJP50FQ03QJUSkkh9iKHcmMcLZOvqtQ` 

- PROS: exact dependency pinning, immutable blockchain so package can't be removed or 
        replaced with something malicious. (although npm lockfiles and exact versions will take of this too)
- CONS: not exactly easy to remember install line :D manual upgrades

This works because npm can install a .tgz file from any url, so it was just a matter of running `pika build`, tar'ing the pkg/ folder it produces, and uploading to arweave.



### Usage examples


```typescript
import { and, or, equals } from 'arql-ops';

const myQuery = and(
  equals('from', 'awalletaddressXyz'),
  equals('App-Name', 'super-app'),
  or(
    equals('someTag', '4'),
    equals('someTag', '5'),
    equals('someTag', '6')
  )
);

const results = await arweave.arql(myQuery);

```


With spread operators:

```typescript

const myQuery = and(
  equals('App-Name', 'my-app'), 
  equals('myFooTag', 'bar'),
  or(
    ...listOfPossibleSomeTagValues.map(val => equals('someTag', val))
  )
);

const results = await arweave.arql(myQuery);

```

`and()` and `or()` will take any number of arguments and produce the correct Json of nested expressions: 

```typescript

const query = and(
  equals('my-super-tag', '1'),
  or(                                     
    equals('my-color-tag', 'red'), 
    equals('my-color-tag', 'blue'),
    equals('my-color-tag', 'purple'),
    equals('my-color-tag', 'orange'),
    equals('my-color-tag', 'white'),
    equals('my-color-tag', 'black'),
  )
);

```

This will produce a query that matches TXs with the tag 'my-super-tag'=1 , AND any of the color values that match 'my-color-tag' 


Output Json:

```json
{
  "op": "and",
  "expr1": {
    "op": "equals",
    "expr1": "my-super-tag",
    "expr2": "1"
  },
  "expr2": {
    "op": "or",
    "expr1": {
      "op": "equals",
      "expr1": "my-color-tag",
      "expr2": "red"
    },
    "expr2": {
      "op": "or",
      "expr1": {
        "op": "equals",
        "expr1": "my-color-tag",
        "expr2": "blue"
      },
      "expr2": {
        "op": "or",
        "expr1": {
          "op": "equals",
          "expr1": "my-color-tag",
          "expr2": "purple"
        },
        "expr2": {
          "op": "or",
          "expr1": {
            "op": "equals",
            "expr1": "my-color-tag",
            "expr2": "orange"
          },
          "expr2": {
            "op": "or",
            "expr1": {
              "op": "equals",
              "expr1": "my-color-tag",
              "expr2": "white"
            },
            "expr2": {
              "op": "equals",
              "expr1": "my-color-tag",
              "expr2": "black"
            }
          }
        }
      }
    }
  }
}

```





 
