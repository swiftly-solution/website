---
title: CRenderSkeleton
---

# Interface CRenderSkeleton

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRenderSkeleton.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CRenderSkeleton : ISchemaClass<CRenderSkeleton>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CRenderSkeleton>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BoneParents

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRenderSkeleton.cs#L20)

```csharp
ref CUtlVector<int> BoneParents { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### BoneWeightCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRenderSkeleton.cs#L22)

```csharp
ref int BoneWeightCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Bones

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRenderSkeleton.cs#L18)

```csharp
ref CUtlVector<RenderSkeletonBone_t> Bones { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[RenderSkeletonBone_t](/docs/api/schemadefinitions/renderskeletonbone_t)>

