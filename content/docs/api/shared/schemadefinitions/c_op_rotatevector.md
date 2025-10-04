---
title: C_OP_RotateVector
---

```csharp
public interface C_OP_RotateVector : CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<C_OP_RotateVector>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**FieldOutput** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RotateVector.cs#L16)

```csharp
ParticleAttributeIndex_t FieldOutput { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

**Normalize** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RotateVector.cs#L26)

```csharp
ref bool Normalize { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**RotAxisMax** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RotateVector.cs#L20)

```csharp
ref Vector RotAxisMax { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**RotAxisMin** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RotateVector.cs#L18)

```csharp
ref Vector RotAxisMin { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**RotRateMax** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RotateVector.cs#L24)

```csharp
ref float RotRateMax { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**RotRateMin** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RotateVector.cs#L22)

```csharp
ref float RotRateMin { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Scale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RotateVector.cs#L28)

```csharp
CPerParticleFloatInput Scale { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

