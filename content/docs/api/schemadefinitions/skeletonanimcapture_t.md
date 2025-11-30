---
title: SkeletonAnimCapture_t
---

# Interface SkeletonAnimCapture_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface SkeletonAnimCapture_t : ISchemaClass<SkeletonAnimCapture_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<SkeletonAnimCapture_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### CaptureName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t.cs#L26)

```csharp
string CaptureName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### EntIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t.cs#L18)

```csharp
ref uint EntIndex { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### EntParent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t.cs#L20)

```csharp
ref uint EntParent { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### FeModelInitPose

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t.cs#L30)

```csharp
ref CUtlVector<SkeletonAnimCapture_t__Bone_t> FeModelInitPose { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[SkeletonAnimCapture_t__Bone_t](/docs/api/schemadefinitions/skeletonanimcapture_t__bone_t)>

### FlexControllers

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t.cs#L32)

```csharp
ref int FlexControllers { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Frames

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t.cs#L36)

```csharp
ref CUtlVector<SkeletonAnimCapture_t__Frame_t> Frames { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[SkeletonAnimCapture_t__Frame_t](/docs/api/schemadefinitions/skeletonanimcapture_t__frame_t)>

### ImportedCollision

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t.cs#L22)

```csharp
ref CUtlVector<uint> ImportedCollision { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### ModelBindPose

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t.cs#L28)

```csharp
ref CUtlVector<SkeletonAnimCapture_t__Bone_t> ModelBindPose { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[SkeletonAnimCapture_t__Bone_t](/docs/api/schemadefinitions/skeletonanimcapture_t__bone_t)>

### ModelName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t.cs#L24)

```csharp
string ModelName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Predicted

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t.cs#L34)

```csharp
ref bool Predicted { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

