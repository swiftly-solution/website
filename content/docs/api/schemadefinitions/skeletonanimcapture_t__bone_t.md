---
title: SkeletonAnimCapture_t__Bone_t
---

# Interface SkeletonAnimCapture_t__Bone_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t__Bone_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface SkeletonAnimCapture_t__Bone_t : ISchemaClass<SkeletonAnimCapture_t__Bone_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<SkeletonAnimCapture_t__Bone_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BindPose

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t__Bone_t.cs#L20)

```csharp
ref CTransform BindPose { get; }
```

#### Property Value

- [CTransform](/docs/api/natives/ctransform)

### Name

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t__Bone_t.cs#L18)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Parent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t__Bone_t.cs#L22)

```csharp
ref int Parent { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

