---
title: CRegionSVM
---

```csharp
public interface CRegionSVM : ISchemaClass<CRegionSVM>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Nodes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRegionSVM.cs#L20)

```csharp
ref CUtlVector<uint> Nodes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### Planes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRegionSVM.cs#L18)

```csharp
ref CUtlVector<RnPlane_t> Planes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[RnPlane_t](/docs/api/shared/schemadefinitions/rnplane_t)>

