---
title: C_OP_Diffusion
---

```csharp
public interface C_OP_Diffusion : CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<C_OP_Diffusion>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### FieldOutput

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_Diffusion.cs#L19)

```csharp
ParticleAttributeIndex_t FieldOutput { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

### RadiusScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_Diffusion.cs#L17)

```csharp
ref float RadiusScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### VoxelGridResolution

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_Diffusion.cs#L21)

```csharp
ref int VoxelGridResolution { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

