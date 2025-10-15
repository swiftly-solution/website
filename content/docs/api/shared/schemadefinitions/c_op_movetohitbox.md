---
title: C_OP_MoveToHitbox
---

```csharp
public interface C_OP_MoveToHitbox : CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<C_OP_MoveToHitbox>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### HitboxSetName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MoveToHitbox.cs#L27)

```csharp
string HitboxSetName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Interpolation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MoveToHitbox.cs#L33)

```csharp
CPerParticleFloatInput Interpolation { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### LerpType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MoveToHitbox.cs#L31)

```csharp
ref HitboxLerpType_t LerpType { get; }
```

#### Property Value

- [HitboxLerpType_t](/docs/api/shared/schemadefinitions/hitboxlerptype_t)

### LifeTimeLerpEnd

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MoveToHitbox.cs#L23)

```csharp
ref float LifeTimeLerpEnd { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LifeTimeLerpStart

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MoveToHitbox.cs#L21)

```csharp
ref float LifeTimeLerpStart { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ModelInput

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MoveToHitbox.cs#L17)

```csharp
CParticleModelInput ModelInput { get; }
```

#### Property Value

- [CParticleModelInput](/docs/api/shared/schemadefinitions/cparticlemodelinput)

### PrevPosScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MoveToHitbox.cs#L25)

```csharp
ref float PrevPosScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TransformInput

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MoveToHitbox.cs#L19)

```csharp
CParticleTransformInput TransformInput { get; }
```

#### Property Value

- [CParticleTransformInput](/docs/api/shared/schemadefinitions/cparticletransforminput)

### UseBones

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MoveToHitbox.cs#L29)

```csharp
ref bool UseBones { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

