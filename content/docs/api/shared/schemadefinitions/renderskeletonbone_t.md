---
title: RenderSkeletonBone_t
---

```csharp
public interface RenderSkeletonBone_t : ISchemaClass<RenderSkeletonBone_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Bbox

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RenderSkeletonBone_t.cs#L23)

```csharp
SkeletonBoneBounds_t Bbox { get; }
```

#### Property Value

- [SkeletonBoneBounds_t](/docs/api/shared/schemadefinitions/skeletonbonebounds_t)

### BoneName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RenderSkeletonBone_t.cs#L17)

```csharp
string BoneName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### InvBindPose

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RenderSkeletonBone_t.cs#L21)

```csharp
ref matrix3x4_t InvBindPose { get; }
```

#### Property Value

- [matrix3x4_t](/docs/api/shared/natives/matrix3x4_t)

### ParentName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RenderSkeletonBone_t.cs#L19)

```csharp
string ParentName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### SphereRadius

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RenderSkeletonBone_t.cs#L25)

```csharp
ref float SphereRadius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

