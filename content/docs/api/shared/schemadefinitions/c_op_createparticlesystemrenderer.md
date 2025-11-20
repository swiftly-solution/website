---
title: C_OP_CreateParticleSystemRenderer
---

```csharp
public interface C_OP_CreateParticleSystemRenderer : CParticleFunctionRenderer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionRenderer>, ISchemaClass<C_OP_CreateParticleSystemRenderer>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AggregationPos

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_CreateParticleSystemRenderer.cs#L26)

```csharp
CPerParticleVecInput AggregationPos { get; }
```

#### Property Value

- [CPerParticleVecInput](/docs/api/shared/schemadefinitions/cperparticlevecinput)

### CPs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_CreateParticleSystemRenderer.cs#L22)

```csharp
ref CUtlLeanVector<CPAssignment_t, int> CPs { get; }
```

#### Property Value

- [CUtlLeanVector](/docs/api/shared/natives/cutlleanvector-2)<[CPAssignment_t](/docs/api/shared/schemadefinitions/cpassignment_t), [int](https://learn.microsoft.com/dotnet/api/system.int32)>

### Effect

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_CreateParticleSystemRenderer.cs#L18)

```csharp
ref CStrongHandle<InfoForResourceTypeIParticleSystemDefinition> Effect { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeIParticleSystemDefinition](/docs/api/shared/schemadefinitions/infoforresourcetypeiparticlesystemdefinition)>

### EventType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_CreateParticleSystemRenderer.cs#L20)

```csharp
ref EventTypeSelection_t EventType { get; }
```

#### Property Value

- [EventTypeSelection_t](/docs/api/shared/schemadefinitions/eventtypeselection_t)

### ParticleConfig

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_CreateParticleSystemRenderer.cs#L24)

```csharp
string ParticleConfig { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

