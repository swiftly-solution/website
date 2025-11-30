---
title: AnimationSnapshotBase_t
---

# Interface AnimationSnapshotBase_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AnimationSnapshotBase_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface AnimationSnapshotBase_t : ISchemaClass<AnimationSnapshotBase_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<AnimationSnapshotBase_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BoneSetupMask

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AnimationSnapshotBase_t.cs#L24)

```csharp
ref CUtlVector<uint> BoneSetupMask { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### BoneTransforms

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AnimationSnapshotBase_t.cs#L26)

```csharp
ref CUtlVector<matrix3x4_t> BoneTransforms { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[matrix3x4_t](/docs/api/natives/matrix3x4_t)>

### BonesInWorldSpace

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AnimationSnapshotBase_t.cs#L22)

```csharp
ref bool BonesInWorldSpace { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DecodeDump

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AnimationSnapshotBase_t.cs#L34)

```csharp
AnimationDecodeDebugDumpElement_t DecodeDump { get; }
```

#### Property Value

- [AnimationDecodeDebugDumpElement_t](/docs/api/schemadefinitions/animationdecodedebugdumpelement_t)

### FlexControllers

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AnimationSnapshotBase_t.cs#L28)

```csharp
ref CUtlVector<float> FlexControllers { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### HasDecodeDump

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AnimationSnapshotBase_t.cs#L32)

```csharp
ref bool HasDecodeDump { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RealTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AnimationSnapshotBase_t.cs#L18)

```csharp
ref float RealTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### RootToWorld

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AnimationSnapshotBase_t.cs#L20)

```csharp
ref matrix3x4_t RootToWorld { get; }
```

#### Property Value

- [matrix3x4_t](/docs/api/natives/matrix3x4_t)

### SnapshotType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AnimationSnapshotBase_t.cs#L30)

```csharp
ref AnimationSnapshotType_t SnapshotType { get; }
```

#### Property Value

- [AnimationSnapshotType_t](/docs/api/schemadefinitions/animationsnapshottype_t)

