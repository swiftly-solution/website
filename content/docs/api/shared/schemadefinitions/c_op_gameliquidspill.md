---
title: C_OP_GameLiquidSpill
---

```csharp
public interface C_OP_GameLiquidSpill : CParticleFunctionRenderer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionRenderer>, ISchemaClass<C_OP_GameLiquidSpill>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**AmountAttribute** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_GameLiquidSpill.cs#L20)

```csharp
ParticleAttributeIndex_t AmountAttribute { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

**ExpirationTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_GameLiquidSpill.cs#L18)

```csharp
CParticleCollectionFloatInput ExpirationTime { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

**LiquidContentsField** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_GameLiquidSpill.cs#L16)

```csharp
CParticleCollectionFloatInput LiquidContentsField { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

