---
title: CAnimDesc
---

```csharp
public interface CAnimDesc : ISchemaClass<CAnimDesc>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ActivityArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDesc.cs#L32)

```csharp
ref CUtlVector<CAnimActivity> ActivityArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CAnimActivity](/docs/api/shared/schemadefinitions/canimactivity)>

### BoneWorldMax

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDesc.cs#L44)

```csharp
ref CUtlVector<Vector> BoneWorldMax { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[Vector](/docs/api/shared/natives/vector)>

### BoneWorldMin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDesc.cs#L42)

```csharp
ref CUtlVector<Vector> BoneWorldMin { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[Vector](/docs/api/shared/natives/vector)>

### Data

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDesc.cs#L24)

```csharp
CAnimEncodedFrames Data { get; }
```

#### Property Value

- [CAnimEncodedFrames](/docs/api/shared/schemadefinitions/canimencodedframes)

### EventArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDesc.cs#L30)

```csharp
ref CUtlVector<CAnimEventDefinition> EventArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CAnimEventDefinition](/docs/api/shared/schemadefinitions/canimeventdefinition)>

### Flags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDesc.cs#L20)

```csharp
CAnimDesc_Flag Flags { get; }
```

#### Property Value

- [CAnimDesc_Flag](/docs/api/shared/schemadefinitions/canimdesc_flag)

### Fps

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDesc.cs#L22)

```csharp
ref float Fps { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Framestalltime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDesc.cs#L36)

```csharp
ref float Framestalltime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### HierarchyArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDesc.cs#L34)

```csharp
ref CUtlVector<CAnimLocalHierarchy> HierarchyArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CAnimLocalHierarchy](/docs/api/shared/schemadefinitions/canimlocalhierarchy)>

### MovementArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDesc.cs#L26)

```csharp
ref CUtlVector<CAnimMovement> MovementArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CAnimMovement](/docs/api/shared/schemadefinitions/canimmovement)>

### Name

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDesc.cs#L18)

```csharp
ref CBufferString Name { get; }
```

#### Property Value

- [CBufferString](/docs/api/shared/natives/cbufferstring)

### RootMax

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDesc.cs#L40)

```csharp
ref Vector RootMax { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### RootMin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDesc.cs#L38)

```csharp
ref Vector RootMin { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### SequenceParams

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDesc.cs#L46)

```csharp
CAnimSequenceParams SequenceParams { get; }
```

#### Property Value

- [CAnimSequenceParams](/docs/api/shared/schemadefinitions/canimsequenceparams)

### XInitialOffset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDesc.cs#L28)

```csharp
ref CTransform XInitialOffset { get; }
```

#### Property Value

- [CTransform](/docs/api/shared/natives/ctransform)

