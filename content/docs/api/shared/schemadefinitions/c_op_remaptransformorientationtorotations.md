---
title: C_OP_RemapTransformOrientationToRotations
---

```csharp
public interface C_OP_RemapTransformOrientationToRotations : CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<C_OP_RemapTransformOrientationToRotations>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Rotation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapTransformOrientationToRotations.cs#L18)

```csharp
ref Vector Rotation { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### TransformInput

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapTransformOrientationToRotations.cs#L16)

```csharp
CParticleTransformInput TransformInput { get; }
```

#### Property Value

- [CParticleTransformInput](/docs/api/shared/schemadefinitions/cparticletransforminput)

### UseQuat

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapTransformOrientationToRotations.cs#L20)

```csharp
ref bool UseQuat { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### WriteNormal

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapTransformOrientationToRotations.cs#L22)

```csharp
ref bool WriteNormal { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

