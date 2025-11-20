---
title: C_OP_RemapDensityToVector
---

```csharp
public interface C_OP_RemapDensityToVector : CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<C_OP_RemapDensityToVector>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### DensityMax

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapDensityToVector.cs#L24)

```csharp
ref float DensityMax { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DensityMin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapDensityToVector.cs#L22)

```csharp
ref float DensityMin { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FieldOutput

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapDensityToVector.cs#L20)

```csharp
ParticleAttributeIndex_t FieldOutput { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

### OutputMax

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapDensityToVector.cs#L28)

```csharp
ref Vector OutputMax { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### OutputMin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapDensityToVector.cs#L26)

```csharp
ref Vector OutputMin { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### RadiusScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapDensityToVector.cs#L18)

```csharp
ref float RadiusScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### UseParentDensity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapDensityToVector.cs#L30)

```csharp
ref bool UseParentDensity { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### VoxelGridResolution

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapDensityToVector.cs#L32)

```csharp
ref int VoxelGridResolution { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

