---
title: C_OP_DistanceBetweenTransforms
---

# Interface C_OP_DistanceBetweenTransforms

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_DistanceBetweenTransforms.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface C_OP_DistanceBetweenTransforms : CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<C_OP_DistanceBetweenTransforms>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CParticleFunctionOperator](/docs/api/schemadefinitions/cparticlefunctionoperator)
- [CParticleFunction](/docs/api/schemadefinitions/cparticlefunction)
- [ISchemaClass<CParticleFunction>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CParticleFunctionOperator>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<C_OP_DistanceBetweenTransforms>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### CollisionGroupName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_DistanceBetweenTransforms.cs#L36)

```csharp
string CollisionGroupName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### FieldOutput

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_DistanceBetweenTransforms.cs#L18)

```csharp
ParticleAttributeIndex_t FieldOutput { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/schemadefinitions/particleattributeindex_t)

### InputMax

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_DistanceBetweenTransforms.cs#L26)

```csharp
CPerParticleFloatInput InputMax { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/schemadefinitions/cperparticlefloatinput)

### InputMin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_DistanceBetweenTransforms.cs#L24)

```csharp
CPerParticleFloatInput InputMin { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/schemadefinitions/cperparticlefloatinput)

### LOS

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_DistanceBetweenTransforms.cs#L40)

```csharp
ref bool LOS { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LOSScale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_DistanceBetweenTransforms.cs#L34)

```csharp
ref float LOSScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MaxTraceLength

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_DistanceBetweenTransforms.cs#L32)

```csharp
ref float MaxTraceLength { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OutputMax

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_DistanceBetweenTransforms.cs#L30)

```csharp
CPerParticleFloatInput OutputMax { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/schemadefinitions/cperparticlefloatinput)

### OutputMin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_DistanceBetweenTransforms.cs#L28)

```csharp
CPerParticleFloatInput OutputMin { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/schemadefinitions/cperparticlefloatinput)

### SetMethod

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_DistanceBetweenTransforms.cs#L42)

```csharp
ref ParticleSetMethod_t SetMethod { get; }
```

#### Property Value

- [ParticleSetMethod_t](/docs/api/schemadefinitions/particlesetmethod_t)

### TraceSet

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_DistanceBetweenTransforms.cs#L38)

```csharp
ref ParticleTraceSet_t TraceSet { get; }
```

#### Property Value

- [ParticleTraceSet_t](/docs/api/schemadefinitions/particletraceset_t)

### TransformEnd

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_DistanceBetweenTransforms.cs#L22)

```csharp
CParticleTransformInput TransformEnd { get; }
```

#### Property Value

- [CParticleTransformInput](/docs/api/schemadefinitions/cparticletransforminput)

### TransformStart

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_DistanceBetweenTransforms.cs#L20)

```csharp
CParticleTransformInput TransformStart { get; }
```

#### Property Value

- [CParticleTransformInput](/docs/api/schemadefinitions/cparticletransforminput)

