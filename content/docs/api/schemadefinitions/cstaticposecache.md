---
title: CStaticPoseCache
---

# Interface CStaticPoseCache

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStaticPoseCache.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CStaticPoseCache : ISchemaClass<CStaticPoseCache>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CStaticPoseCache>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BoneCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStaticPoseCache.cs#L20)

```csharp
ref int BoneCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MorphCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStaticPoseCache.cs#L22)

```csharp
ref int MorphCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Poses

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStaticPoseCache.cs#L18)

```csharp
ref CUtlVector<CCachedPose> Poses { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CCachedPose](/docs/api/schemadefinitions/ccachedpose)>

