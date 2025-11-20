---
title: C_INIT_ScreenSpacePositionOfTarget
---

```csharp
public interface C_INIT_ScreenSpacePositionOfTarget : CParticleFunctionInitializer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionInitializer>, ISchemaClass<C_INIT_ScreenSpacePositionOfTarget>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BehindFieldOutput

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_ScreenSpacePositionOfTarget.cs#L22)

```csharp
ParticleAttributeIndex_t BehindFieldOutput { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

### BehindOutputRemap

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_ScreenSpacePositionOfTarget.cs#L24)

```csharp
CParticleRemapFloatInput BehindOutputRemap { get; }
```

#### Property Value

- [CParticleRemapFloatInput](/docs/api/shared/schemadefinitions/cparticleremapfloatinput)

### OututBehindness

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_ScreenSpacePositionOfTarget.cs#L20)

```csharp
ref bool OututBehindness { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TargetPosition

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_ScreenSpacePositionOfTarget.cs#L18)

```csharp
CPerParticleVecInput TargetPosition { get; }
```

#### Property Value

- [CPerParticleVecInput](/docs/api/shared/schemadefinitions/cperparticlevecinput)

