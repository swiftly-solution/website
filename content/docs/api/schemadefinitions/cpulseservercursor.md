---
title: CPulseServerCursor
---

# Interface CPulseServerCursor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseServerCursor.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CPulseServerCursor : CPulseExecCursor, ISchemaClass<CPulseExecCursor>, ISchemaClass<CPulseServerCursor>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CPulseExecCursor](/docs/api/schemadefinitions/cpulseexeccursor)
- [ISchemaClass<CPulseExecCursor>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPulseServerCursor>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Activator

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseServerCursor.cs#L18)

```csharp
ref CHandle<CBaseEntity> Activator { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBaseEntity](/docs/api/schemadefinitions/cbaseentity)>

### Caller

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseServerCursor.cs#L20)

```csharp
ref CHandle<CBaseEntity> Caller { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBaseEntity](/docs/api/schemadefinitions/cbaseentity)>

