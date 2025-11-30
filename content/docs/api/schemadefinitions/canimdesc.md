---
title: CAnimDesc
---

# Interface CAnimDesc

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDesc.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CAnimDesc : ISchemaClass<CAnimDesc>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CAnimDesc>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ActivityArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDesc.cs#L32)

```csharp
ref CUtlVector<CAnimActivity> ActivityArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CAnimActivity](/docs/api/schemadefinitions/canimactivity)>

### BoneWorldMax

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDesc.cs#L44)

```csharp
ref CUtlVector<Vector> BoneWorldMax { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[Vector](/docs/api/natives/vector)>

### BoneWorldMin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDesc.cs#L42)

```csharp
ref CUtlVector<Vector> BoneWorldMin { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[Vector](/docs/api/natives/vector)>

### Data

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDesc.cs#L24)

```csharp
CAnimEncodedFrames Data { get; }
```

#### Property Value

- [CAnimEncodedFrames](/docs/api/schemadefinitions/canimencodedframes)

### EventArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDesc.cs#L30)

```csharp
ref CUtlVector<CAnimEventDefinition> EventArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CAnimEventDefinition](/docs/api/schemadefinitions/canimeventdefinition)>

### Flags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDesc.cs#L20)

```csharp
CAnimDesc_Flag Flags { get; }
```

#### Property Value

- [CAnimDesc_Flag](/docs/api/schemadefinitions/canimdesc_flag)

### Fps

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDesc.cs#L22)

```csharp
ref float Fps { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Framestalltime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDesc.cs#L36)

```csharp
ref float Framestalltime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### HierarchyArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDesc.cs#L34)

```csharp
ref CUtlVector<CAnimLocalHierarchy> HierarchyArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CAnimLocalHierarchy](/docs/api/schemadefinitions/canimlocalhierarchy)>

### MovementArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDesc.cs#L26)

```csharp
ref CUtlVector<CAnimMovement> MovementArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CAnimMovement](/docs/api/schemadefinitions/canimmovement)>

### Name

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDesc.cs#L18)

```csharp
ref CBufferString Name { get; }
```

#### Property Value

- [CBufferString](/docs/api/natives/cbufferstring)

### RootMax

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDesc.cs#L40)

```csharp
ref Vector RootMax { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### RootMin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDesc.cs#L38)

```csharp
ref Vector RootMin { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### SequenceParams

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDesc.cs#L46)

```csharp
CAnimSequenceParams SequenceParams { get; }
```

#### Property Value

- [CAnimSequenceParams](/docs/api/schemadefinitions/canimsequenceparams)

### XInitialOffset

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDesc.cs#L28)

```csharp
ref CTransform XInitialOffset { get; }
```

#### Property Value

- [CTransform](/docs/api/natives/ctransform)

