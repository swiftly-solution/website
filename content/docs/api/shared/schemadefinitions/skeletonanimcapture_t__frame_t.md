---
title: SkeletonAnimCapture_t__Frame_t
---

```csharp
public interface SkeletonAnimCapture_t__Frame_t : ISchemaClass<SkeletonAnimCapture_t__Frame_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### CompositeBones

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t__Frame_t.cs#L24)

```csharp
ref CUtlVector<CTransform> CompositeBones { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CTransform](/docs/api/shared/natives/ctransform)>

### FeModelAnims

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t__Frame_t.cs#L28)

```csharp
ref CUtlVector<CTransform> FeModelAnims { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CTransform](/docs/api/shared/natives/ctransform)>

### FeModelPos

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t__Frame_t.cs#L30)

```csharp
ref CUtlVector<Vector> FeModelPos { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[Vector](/docs/api/shared/natives/vector)>

### FlexControllerWeights

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t__Frame_t.cs#L32)

```csharp
ref CUtlVector<float> FlexControllerWeights { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### SimStateBones

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t__Frame_t.cs#L26)

```csharp
ref CUtlVector<CTransform> SimStateBones { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CTransform](/docs/api/shared/natives/ctransform)>

### Stamp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t__Frame_t.cs#L18)

```csharp
SkeletonAnimCapture_t__FrameStamp_t Stamp { get; }
```

#### Property Value

- [SkeletonAnimCapture_t__FrameStamp_t](/docs/api/shared/schemadefinitions/skeletonanimcapture_t__framestamp_t)

### Teleport

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t__Frame_t.cs#L22)

```csharp
ref bool Teleport { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Time

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t__Frame_t.cs#L16)

```csharp
ref float Time { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Transform

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonAnimCapture_t__Frame_t.cs#L20)

```csharp
ref CTransform Transform { get; }
```

#### Property Value

- [CTransform](/docs/api/shared/natives/ctransform)

