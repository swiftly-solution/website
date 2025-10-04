---
title: C_OP_InheritFromParentParticlesV2
---

```csharp
public interface C_OP_InheritFromParentParticlesV2 : CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<C_OP_InheritFromParentParticlesV2>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**FieldOutput** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_InheritFromParentParticlesV2.cs#L18)

```csharp
ParticleAttributeIndex_t FieldOutput { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

**Increment** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_InheritFromParentParticlesV2.cs#L20)

```csharp
CPerParticleFloatInput Increment { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

**Interpolation** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_InheritFromParentParticlesV2.cs#L28)

```csharp
CPerParticleFloatInput Interpolation { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

**MissingParentBehavior** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_InheritFromParentParticlesV2.cs#L26)

```csharp
ref MissingParentInheritBehavior_t MissingParentBehavior { get; }
```

#### Property Value

- [MissingParentInheritBehavior_t](/docs/api/shared/schemadefinitions/missingparentinheritbehavior_t)

**RandomDistribution** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_InheritFromParentParticlesV2.cs#L22)

```csharp
ref bool RandomDistribution { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**Reverse** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_InheritFromParentParticlesV2.cs#L24)

```csharp
ref bool Reverse { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**Scale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_InheritFromParentParticlesV2.cs#L16)

```csharp
CPerParticleFloatInput Scale { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

