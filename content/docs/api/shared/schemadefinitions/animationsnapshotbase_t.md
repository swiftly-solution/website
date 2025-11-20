---
title: AnimationSnapshotBase_t
---

```csharp
public interface AnimationSnapshotBase_t : ISchemaClass<AnimationSnapshotBase_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BoneSetupMask

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AnimationSnapshotBase_t.cs#L24)

```csharp
ref CUtlVector<uint> BoneSetupMask { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### BoneTransforms

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AnimationSnapshotBase_t.cs#L26)

```csharp
ref CUtlVector<matrix3x4_t> BoneTransforms { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[matrix3x4_t](/docs/api/shared/natives/matrix3x4_t)>

### BonesInWorldSpace

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AnimationSnapshotBase_t.cs#L22)

```csharp
ref bool BonesInWorldSpace { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DecodeDump

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AnimationSnapshotBase_t.cs#L34)

```csharp
AnimationDecodeDebugDumpElement_t DecodeDump { get; }
```

#### Property Value

- [AnimationDecodeDebugDumpElement_t](/docs/api/shared/schemadefinitions/animationdecodedebugdumpelement_t)

### FlexControllers

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AnimationSnapshotBase_t.cs#L28)

```csharp
ref CUtlVector<float> FlexControllers { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### HasDecodeDump

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AnimationSnapshotBase_t.cs#L32)

```csharp
ref bool HasDecodeDump { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RealTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AnimationSnapshotBase_t.cs#L18)

```csharp
ref float RealTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### RootToWorld

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AnimationSnapshotBase_t.cs#L20)

```csharp
ref matrix3x4_t RootToWorld { get; }
```

#### Property Value

- [matrix3x4_t](/docs/api/shared/natives/matrix3x4_t)

### SnapshotType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AnimationSnapshotBase_t.cs#L30)

```csharp
ref AnimationSnapshotType_t SnapshotType { get; }
```

#### Property Value

- [AnimationSnapshotType_t](/docs/api/shared/schemadefinitions/animationsnapshottype_t)

