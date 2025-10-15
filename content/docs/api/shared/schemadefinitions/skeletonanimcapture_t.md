---
title: SkeletonAnimCapture_t
---

```csharp
public interface SkeletonAnimCapture_t : ISchemaClass<SkeletonAnimCapture_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### CaptureName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t.cs#L25)

```csharp
string CaptureName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### EntIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t.cs#L17)

```csharp
ref uint EntIndex { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### EntParent

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t.cs#L19)

```csharp
ref uint EntParent { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### FeModelInitPose

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t.cs#L29)

```csharp
ref CUtlVector<SkeletonAnimCapture_t__Bone_t> FeModelInitPose { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[SkeletonAnimCapture_t__Bone_t](/docs/api/shared/schemadefinitions/skeletonanimcapture_t__bone_t)>

### FlexControllers

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t.cs#L31)

```csharp
ref int FlexControllers { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Frames

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t.cs#L35)

```csharp
ref CUtlVector<SkeletonAnimCapture_t__Frame_t> Frames { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[SkeletonAnimCapture_t__Frame_t](/docs/api/shared/schemadefinitions/skeletonanimcapture_t__frame_t)>

### ImportedCollision

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t.cs#L21)

```csharp
ref CUtlVector<uint> ImportedCollision { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### ModelBindPose

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t.cs#L27)

```csharp
ref CUtlVector<SkeletonAnimCapture_t__Bone_t> ModelBindPose { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[SkeletonAnimCapture_t__Bone_t](/docs/api/shared/schemadefinitions/skeletonanimcapture_t__bone_t)>

### ModelName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t.cs#L23)

```csharp
string ModelName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Predicted

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t.cs#L33)

```csharp
ref bool Predicted { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

