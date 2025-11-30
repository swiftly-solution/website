---
title: C_OP_PercentageBetweenTransformLerpCPs
---

# Interface C_OP_PercentageBetweenTransformLerpCPs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_PercentageBetweenTransformLerpCPs.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface C_OP_PercentageBetweenTransformLerpCPs : CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<C_OP_PercentageBetweenTransformLerpCPs>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CParticleFunctionOperator](/docs/api/schemadefinitions/cparticlefunctionoperator)
- [CParticleFunction](/docs/api/schemadefinitions/cparticlefunction)
- [ISchemaClass<CParticleFunction>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CParticleFunctionOperator>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<C_OP_PercentageBetweenTransformLerpCPs>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ActiveRange

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_PercentageBetweenTransformLerpCPs.cs#L38)

```csharp
ref bool ActiveRange { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FieldOutput

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_PercentageBetweenTransformLerpCPs.cs#L18)

```csharp
ParticleAttributeIndex_t FieldOutput { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/schemadefinitions/particleattributeindex_t)

### InputMax

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_PercentageBetweenTransformLerpCPs.cs#L22)

```csharp
ref float InputMax { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### InputMin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_PercentageBetweenTransformLerpCPs.cs#L20)

```csharp
ref float InputMin { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OutputEndCP

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_PercentageBetweenTransformLerpCPs.cs#L32)

```csharp
ref int OutputEndCP { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutputEndField

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_PercentageBetweenTransformLerpCPs.cs#L34)

```csharp
ref int OutputEndField { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutputStartCP

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_PercentageBetweenTransformLerpCPs.cs#L28)

```csharp
ref int OutputStartCP { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutputStartField

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_PercentageBetweenTransformLerpCPs.cs#L30)

```csharp
ref int OutputStartField { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RadialCheck

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_PercentageBetweenTransformLerpCPs.cs#L40)

```csharp
ref bool RadialCheck { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetMethod

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_PercentageBetweenTransformLerpCPs.cs#L36)

```csharp
ref ParticleSetMethod_t SetMethod { get; }
```

#### Property Value

- [ParticleSetMethod_t](/docs/api/schemadefinitions/particlesetmethod_t)

### TransformEnd

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_PercentageBetweenTransformLerpCPs.cs#L26)

```csharp
CParticleTransformInput TransformEnd { get; }
```

#### Property Value

- [CParticleTransformInput](/docs/api/schemadefinitions/cparticletransforminput)

### TransformStart

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_PercentageBetweenTransformLerpCPs.cs#L24)

```csharp
CParticleTransformInput TransformStart { get; }
```

#### Property Value

- [CParticleTransformInput](/docs/api/schemadefinitions/cparticletransforminput)

