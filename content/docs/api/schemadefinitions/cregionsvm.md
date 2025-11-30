---
title: CRegionSVM
---

# Interface CRegionSVM

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRegionSVM.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CRegionSVM : ISchemaClass<CRegionSVM>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CRegionSVM>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Nodes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRegionSVM.cs#L20)

```csharp
ref CUtlVector<uint> Nodes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### Planes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRegionSVM.cs#L18)

```csharp
ref CUtlVector<RnPlane_t> Planes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[RnPlane_t](/docs/api/schemadefinitions/rnplane_t)>

