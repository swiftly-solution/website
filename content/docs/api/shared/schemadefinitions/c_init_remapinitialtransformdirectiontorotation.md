---
title: C_INIT_RemapInitialTransformDirectionToRotation
---

```csharp
public interface C_INIT_RemapInitialTransformDirectionToRotation : CParticleFunctionInitializer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionInitializer>, ISchemaClass<C_INIT_RemapInitialTransformDirectionToRotation>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Component

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_RemapInitialTransformDirectionToRotation.cs#L23)

```csharp
ref int Component { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FieldOutput

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_RemapInitialTransformDirectionToRotation.cs#L19)

```csharp
ParticleAttributeIndex_t FieldOutput { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

### OffsetRot

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_RemapInitialTransformDirectionToRotation.cs#L21)

```csharp
ref float OffsetRot { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TransformInput

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_RemapInitialTransformDirectionToRotation.cs#L17)

```csharp
CParticleTransformInput TransformInput { get; }
```

#### Property Value

- [CParticleTransformInput](/docs/api/shared/schemadefinitions/cparticletransforminput)

