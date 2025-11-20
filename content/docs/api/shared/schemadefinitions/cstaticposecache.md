---
title: CStaticPoseCache
---

```csharp
public interface CStaticPoseCache : ISchemaClass<CStaticPoseCache>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BoneCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStaticPoseCache.cs#L20)

```csharp
ref int BoneCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MorphCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStaticPoseCache.cs#L22)

```csharp
ref int MorphCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Poses

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStaticPoseCache.cs#L18)

```csharp
ref CUtlVector<CCachedPose> Poses { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CCachedPose](/docs/api/shared/schemadefinitions/ccachedpose)>

