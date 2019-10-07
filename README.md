
## ArQL ops

Very simple library to build ArQL for queries for Arweave <https://www.github.com/ArweaveTeam/arweave-js>

Packged up with <https://github.com/pikapkg/pack>, for web, node, typescript and even deno! 

For fun, it's published on the on the arweave blockchain itself :)

`npm install https://kybjhezuyftg.arweave.net/ITTPLYoxidZzAJP50FQ03QJUSkkh9iKHcmMcLZOvqtQ` 

- PROS: exact dependency pinning 
- CONS: not exactly easy to remember install line :D and manual upgrades 

Will be published to npm soon.

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


Works fine with `require()` style and Javascript too. 


 
