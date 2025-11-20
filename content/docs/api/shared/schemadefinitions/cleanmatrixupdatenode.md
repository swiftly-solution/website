---
title: CLeanMatrixUpdateNode
---

```csharp
public interface CLeanMatrixUpdateNode : CLeafUpdateNode, CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CLeafUpdateNode>, ISchemaClass<CLeanMatrixUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BlendSource

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLeanMatrixUpdateNode.cs#L26)

```csharp
ref AnimVectorSource BlendSource { get; }
```

#### Property Value

- [AnimVectorSource](/docs/api/shared/schemadefinitions/animvectorsource)

### Damping

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLeanMatrixUpdateNode.cs#L24)

```csharp
CAnimInputDamping Damping { get; }
```

#### Property Value

- [CAnimInputDamping](/docs/api/shared/schemadefinitions/caniminputdamping)

### FrameCorners

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLeanMatrixUpdateNode.cs#L19)

```csharp
SchemaUntypedField FrameCorners { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### HorizontalAxis

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLeanMatrixUpdateNode.cs#L32)

```csharp
ref Vector HorizontalAxis { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### MaxValue

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLeanMatrixUpdateNode.cs#L36)

```csharp
ref float MaxValue { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ParamIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLeanMatrixUpdateNode.cs#L28)

```csharp
CAnimParamHandle ParamIndex { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

### Poses

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLeanMatrixUpdateNode.cs#L22)

```csharp
SchemaUntypedField Poses { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### Sequence

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLeanMatrixUpdateNode.cs#L34)

```csharp
HSequence Sequence { get; }
```

#### Property Value

- [HSequence](/docs/api/shared/schemadefinitions/hsequence)

### SequenceMaxFrame

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLeanMatrixUpdateNode.cs#L38)

```csharp
ref int SequenceMaxFrame { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### VerticalAxis

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLeanMatrixUpdateNode.cs#L30)

```csharp
ref Vector VerticalAxis { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

