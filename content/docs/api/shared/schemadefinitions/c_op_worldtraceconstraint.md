---
title: C_OP_WorldTraceConstraint
---

```csharp
public interface C_OP_WorldTraceConstraint : CParticleFunctionConstraint, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionConstraint>, ISchemaClass<C_OP_WorldTraceConstraint>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BounceAmount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_WorldTraceConstraint.cs#L49)

```csharp
CPerParticleFloatInput BounceAmount { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### BrushOnly

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_WorldTraceConstraint.cs#L31)

```csharp
ref bool BrushOnly { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CP

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_WorldTraceConstraint.cs#L17)

```csharp
ref int CP { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CollisionConfirmationSpeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_WorldTraceConstraint.cs#L43)

```csharp
ref float CollisionConfirmationSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### CollisionGroupName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_WorldTraceConstraint.cs#L27)

```csharp
string CollisionGroupName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### CollisionMode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_WorldTraceConstraint.cs#L21)

```csharp
ref ParticleCollisionMode_t CollisionMode { get; }
```

#### Property Value

- [ParticleCollisionMode_t](/docs/api/shared/schemadefinitions/particlecollisionmode_t)

### CollisionModeMin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_WorldTraceConstraint.cs#L23)

```csharp
ref ParticleCollisionMode_t CollisionModeMin { get; }
```

#### Property Value

- [ParticleCollisionMode_t](/docs/api/shared/schemadefinitions/particlecollisionmode_t)

### CpMovementTolerance

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_WorldTraceConstraint.cs#L37)

```csharp
ref float CpMovementTolerance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### CpOffset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_WorldTraceConstraint.cs#L19)

```csharp
ref Vector CpOffset { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### DecayBounce

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_WorldTraceConstraint.cs#L55)

```csharp
ref bool DecayBounce { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EntityStickDataField

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_WorldTraceConstraint.cs#L67)

```csharp
ParticleAttributeIndex_t EntityStickDataField { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

### EntityStickNormalField

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_WorldTraceConstraint.cs#L69)

```csharp
ParticleAttributeIndex_t EntityStickNormalField { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

### IgnoreCP

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_WorldTraceConstraint.cs#L35)

```csharp
ref int IgnoreCP { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### IncludeWater

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_WorldTraceConstraint.cs#L33)

```csharp
ref bool IncludeWater { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### KillonContact

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_WorldTraceConstraint.cs#L57)

```csharp
ref bool KillonContact { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MaxTracesPerFrame

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_WorldTraceConstraint.cs#L45)

```csharp
ref float MaxTracesPerFrame { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MinSpeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_WorldTraceConstraint.cs#L59)

```csharp
ref float MinSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### RadiusScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_WorldTraceConstraint.cs#L47)

```csharp
CPerParticleFloatInput RadiusScale { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### RandomDirScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_WorldTraceConstraint.cs#L53)

```csharp
CPerParticleFloatInput RandomDirScale { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### RetestRate

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_WorldTraceConstraint.cs#L39)

```csharp
ref float RetestRate { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SetNormal

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_WorldTraceConstraint.cs#L61)

```csharp
ref bool SetNormal { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SlideAmount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_WorldTraceConstraint.cs#L51)

```csharp
CPerParticleFloatInput SlideAmount { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### StickOnCollisionField

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_WorldTraceConstraint.cs#L63)

```csharp
ParticleAttributeIndex_t StickOnCollisionField { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

### StopSpeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_WorldTraceConstraint.cs#L65)

```csharp
CPerParticleFloatInput StopSpeed { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### TraceSet

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_WorldTraceConstraint.cs#L25)

```csharp
ref ParticleTraceSet_t TraceSet { get; }
```

#### Property Value

- [ParticleTraceSet_t](/docs/api/shared/schemadefinitions/particletraceset_t)

### TraceTolerance

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_WorldTraceConstraint.cs#L41)

```csharp
ref float TraceTolerance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### WorldOnly

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_WorldTraceConstraint.cs#L29)

```csharp
ref bool WorldOnly { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

