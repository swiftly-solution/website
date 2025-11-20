---
title: EntityKeyValueData_t
---

```csharp
public interface EntityKeyValueData_t : ISchemaClass<EntityKeyValueData_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Connections

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EntityKeyValueData_t.cs#L18)

```csharp
ref CUtlVector<EntityIOConnectionData_t> Connections { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[EntityIOConnectionData_t](/docs/api/shared/schemadefinitions/entityioconnectiondata_t)>

### KeyValuesData

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EntityKeyValueData_t.cs#L20)

```csharp
ref CUtlBinaryBlock KeyValuesData { get; }
```

#### Property Value

- [CUtlBinaryBlock](/docs/api/shared/natives/cutlbinaryblock)

