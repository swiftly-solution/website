---
title: EntityKeyValueData_t
---

# Interface EntityKeyValueData_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EntityKeyValueData_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface EntityKeyValueData_t : ISchemaClass<EntityKeyValueData_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<EntityKeyValueData_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Connections

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EntityKeyValueData_t.cs#L18)

```csharp
ref CUtlVector<EntityIOConnectionData_t> Connections { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[EntityIOConnectionData_t](/docs/api/schemadefinitions/entityioconnectiondata_t)>

### KeyValuesData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EntityKeyValueData_t.cs#L20)

```csharp
ref CUtlBinaryBlock KeyValuesData { get; }
```

#### Property Value

- [CUtlBinaryBlock](/docs/api/natives/cutlbinaryblock)

