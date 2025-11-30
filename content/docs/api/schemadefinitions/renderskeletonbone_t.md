---
title: RenderSkeletonBone_t
---

# Interface RenderSkeletonBone_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RenderSkeletonBone_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface RenderSkeletonBone_t : ISchemaClass<RenderSkeletonBone_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<RenderSkeletonBone_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Bbox

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RenderSkeletonBone_t.cs#L24)

```csharp
SkeletonBoneBounds_t Bbox { get; }
```

#### Property Value

- [SkeletonBoneBounds_t](/docs/api/schemadefinitions/skeletonbonebounds_t)

### BoneName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RenderSkeletonBone_t.cs#L18)

```csharp
string BoneName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### InvBindPose

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RenderSkeletonBone_t.cs#L22)

```csharp
ref matrix3x4_t InvBindPose { get; }
```

#### Property Value

- [matrix3x4_t](/docs/api/natives/matrix3x4_t)

### ParentName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RenderSkeletonBone_t.cs#L20)

```csharp
string ParentName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### SphereRadius

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RenderSkeletonBone_t.cs#L26)

```csharp
ref float SphereRadius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

