---
title: CRopeOverlapHit
---

# Interface CRopeOverlapHit

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRopeOverlapHit.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CRopeOverlapHit : ISchemaClass<CRopeOverlapHit>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CRopeOverlapHit>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Entity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRopeOverlapHit.cs#L18)

```csharp
ref CHandle<CBaseEntity> Entity { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBaseEntity](/docs/api/schemadefinitions/cbaseentity)>

### OverlappingLinks

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRopeOverlapHit.cs#L20)

```csharp
ref CUtlVector<int> OverlappingLinks { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

