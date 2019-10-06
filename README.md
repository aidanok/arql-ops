
## ArQL ops

Very simple library to build ArQL for queries for Arweave <https://www.github.com/ArweaveTeam/arweave-js>

Also wanted to try out <https://github.com/pikapkg/pack>

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

