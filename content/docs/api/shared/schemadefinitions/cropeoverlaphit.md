---
title: CRopeOverlapHit
---

```csharp
public interface CRopeOverlapHit : ISchemaClass<CRopeOverlapHit>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Entity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRopeOverlapHit.cs#L17)

```csharp
ref CHandle<CBaseEntity> Entity { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### OverlappingLinks

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRopeOverlapHit.cs#L19)

```csharp
ref CUtlVector<int> OverlappingLinks { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

