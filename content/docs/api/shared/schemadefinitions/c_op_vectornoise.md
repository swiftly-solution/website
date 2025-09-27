---
title: C_OP_VectorNoise
---

```csharp
public interface C_OP_VectorNoise : CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<C_OP_VectorNoise>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**Additive** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_VectorNoise.cs#L24)

```csharp
ref bool Additive { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**FieldOutput** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_VectorNoise.cs#L16)

```csharp
ParticleAttributeIndex_t FieldOutput { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

**Fl4NoiseScale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_VectorNoise.cs#L22)

```csharp
ref float Fl4NoiseScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**NoiseAnimationTimeScale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_VectorNoise.cs#L28)

```csharp
ref float NoiseAnimationTimeScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Offset** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_VectorNoise.cs#L26)

```csharp
ref bool Offset { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**OutputMax** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_VectorNoise.cs#L20)

```csharp
ref Vector OutputMax { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**OutputMin** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_VectorNoise.cs#L18)

```csharp
ref Vector OutputMin { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

