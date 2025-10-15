---
title: C_INIT_VelocityFromCP
---

```csharp
public interface C_INIT_VelocityFromCP : CParticleFunctionInitializer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionInitializer>, ISchemaClass<C_INIT_VelocityFromCP>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### DirectionOnly

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_VelocityFromCP.cs#L23)

```csharp
ref bool DirectionOnly { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TransformInput

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_VelocityFromCP.cs#L19)

```csharp
CParticleTransformInput TransformInput { get; }
```

#### Property Value

- [CParticleTransformInput](/docs/api/shared/schemadefinitions/cparticletransforminput)

### VelocityInput

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_VelocityFromCP.cs#L17)

```csharp
CParticleCollectionVecInput VelocityInput { get; }
```

#### Property Value

- [CParticleCollectionVecInput](/docs/api/shared/schemadefinitions/cparticlecollectionvecinput)

### VelocityScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_VelocityFromCP.cs#L21)

```csharp
ref float VelocityScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

