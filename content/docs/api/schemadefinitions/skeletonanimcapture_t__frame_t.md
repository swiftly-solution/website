---
title: SkeletonAnimCapture_t__Frame_t
---

# Interface SkeletonAnimCapture_t__Frame_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t__Frame_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface SkeletonAnimCapture_t__Frame_t : ISchemaClass<SkeletonAnimCapture_t__Frame_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<SkeletonAnimCapture_t__Frame_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### CompositeBones

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t__Frame_t.cs#L26)

```csharp
ref CUtlVector<CTransform> CompositeBones { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CTransform](/docs/api/natives/ctransform)>

### FeModelAnims

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t__Frame_t.cs#L30)

```csharp
ref CUtlVector<CTransform> FeModelAnims { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CTransform](/docs/api/natives/ctransform)>

### FeModelPos

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t__Frame_t.cs#L32)

```csharp
ref CUtlVector<Vector> FeModelPos { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[Vector](/docs/api/natives/vector)>

### FlexControllerWeights

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t__Frame_t.cs#L34)

```csharp
ref CUtlVector<float> FlexControllerWeights { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### SimStateBones

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t__Frame_t.cs#L28)

```csharp
ref CUtlVector<CTransform> SimStateBones { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CTransform](/docs/api/natives/ctransform)>

### Stamp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t__Frame_t.cs#L20)

```csharp
SkeletonAnimCapture_t__FrameStamp_t Stamp { get; }
```

#### Property Value

- [SkeletonAnimCapture_t__FrameStamp_t](/docs/api/schemadefinitions/skeletonanimcapture_t__framestamp_t)

### Teleport

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t__Frame_t.cs#L24)

```csharp
ref bool Teleport { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Time

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t__Frame_t.cs#L18)

```csharp
ref float Time { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Transform

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t__Frame_t.cs#L22)

```csharp
ref CTransform Transform { get; }
```

#### Property Value

- [CTransform](/docs/api/natives/ctransform)

