---
title: C_INIT_RemapTransformOrientationToRotations
---

```csharp
public interface C_INIT_RemapTransformOrientationToRotations : CParticleFunctionInitializer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionInitializer>, ISchemaClass<C_INIT_RemapTransformOrientationToRotations>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Rotation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_RemapTransformOrientationToRotations.cs#L19)

```csharp
ref Vector Rotation { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### TransformInput

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_RemapTransformOrientationToRotations.cs#L17)

```csharp
CParticleTransformInput TransformInput { get; }
```

#### Property Value

- [CParticleTransformInput](/docs/api/shared/schemadefinitions/cparticletransforminput)

### UseQuat

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_RemapTransformOrientationToRotations.cs#L21)

```csharp
ref bool UseQuat { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### WriteNormal

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_RemapTransformOrientationToRotations.cs#L23)

```csharp
ref bool WriteNormal { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

