---
title: C_OP_LerpVector
---

```csharp
public interface C_OP_LerpVector : CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<C_OP_LerpVector>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### EndTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_LerpVector.cs#L24)

```csharp
ref float EndTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FieldOutput

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_LerpVector.cs#L18)

```csharp
ParticleAttributeIndex_t FieldOutput { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

### Output

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_LerpVector.cs#L20)

```csharp
ref Vector Output { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### SetMethod

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_LerpVector.cs#L26)

```csharp
ref ParticleSetMethod_t SetMethod { get; }
```

#### Property Value

- [ParticleSetMethod_t](/docs/api/shared/schemadefinitions/particlesetmethod_t)

### StartTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_LerpVector.cs#L22)

```csharp
ref float StartTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

