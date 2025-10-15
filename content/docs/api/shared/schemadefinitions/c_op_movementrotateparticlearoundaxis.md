---
title: C_OP_MovementRotateParticleAroundAxis
---

```csharp
public interface C_OP_MovementRotateParticleAroundAxis : CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<C_OP_MovementRotateParticleAroundAxis>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### LocalSpace

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MovementRotateParticleAroundAxis.cs#L23)

```csharp
ref bool LocalSpace { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RotAxis

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MovementRotateParticleAroundAxis.cs#L17)

```csharp
CParticleCollectionVecInput RotAxis { get; }
```

#### Property Value

- [CParticleCollectionVecInput](/docs/api/shared/schemadefinitions/cparticlecollectionvecinput)

### RotRate

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MovementRotateParticleAroundAxis.cs#L19)

```csharp
CParticleCollectionFloatInput RotRate { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

### TransformInput

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MovementRotateParticleAroundAxis.cs#L21)

```csharp
CParticleTransformInput TransformInput { get; }
```

#### Property Value

- [CParticleTransformInput](/docs/api/shared/schemadefinitions/cparticletransforminput)

