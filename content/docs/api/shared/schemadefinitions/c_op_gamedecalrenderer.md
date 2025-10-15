---
title: C_OP_GameDecalRenderer
---

```csharp
public interface C_OP_GameDecalRenderer : CParticleFunctionRenderer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionRenderer>, ISchemaClass<C_OP_GameDecalRenderer>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### CollisionGroup

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_GameDecalRenderer.cs#L23)

```csharp
ref ParticleCollisionGroup_t CollisionGroup { get; }
```

#### Property Value

- [ParticleCollisionGroup_t](/docs/api/shared/schemadefinitions/particlecollisiongroup_t)

### DecalGroupIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_GameDecalRenderer.cs#L33)

```csharp
CPerParticleFloatInput DecalGroupIndex { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### DecalGroupName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_GameDecalRenderer.cs#L17)

```csharp
ref CGlobalSymbol DecalGroupName { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)

### DecalRotation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_GameDecalRenderer.cs#L35)

```csharp
CPerParticleFloatInput DecalRotation { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### DecalSize

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_GameDecalRenderer.cs#L31)

```csharp
CPerParticleFloatInput DecalSize { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### EndPos

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_GameDecalRenderer.cs#L27)

```csharp
CPerParticleVecInput EndPos { get; }
```

#### Property Value

- [CPerParticleVecInput](/docs/api/shared/schemadefinitions/cperparticlevecinput)

### EventType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_GameDecalRenderer.cs#L19)

```csharp
ref EventTypeSelection_t EventType { get; }
```

#### Property Value

- [EventTypeSelection_t](/docs/api/shared/schemadefinitions/eventtypeselection_t)

### InteractionMask

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_GameDecalRenderer.cs#L21)

```csharp
ref ParticleCollisionMask_t InteractionMask { get; }
```

#### Property Value

- [ParticleCollisionMask_t](/docs/api/shared/schemadefinitions/particlecollisionmask_t)

### ModulationColor

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_GameDecalRenderer.cs#L37)

```csharp
CPerParticleVecInput ModulationColor { get; }
```

#### Property Value

- [CPerParticleVecInput](/docs/api/shared/schemadefinitions/cperparticlevecinput)

### NoDecalsOnOwner

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_GameDecalRenderer.cs#L45)

```csharp
ref bool NoDecalsOnOwner { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RandomDecalRotation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_GameDecalRenderer.cs#L41)

```csharp
ref bool RandomDecalRotation { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RandomlySelectDecalInGroup

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_GameDecalRenderer.cs#L43)

```csharp
ref bool RandomlySelectDecalInGroup { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StartPos

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_GameDecalRenderer.cs#L25)

```csharp
CPerParticleVecInput StartPos { get; }
```

#### Property Value

- [CPerParticleVecInput](/docs/api/shared/schemadefinitions/cperparticlevecinput)

### TraceBloat

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_GameDecalRenderer.cs#L29)

```csharp
CPerParticleFloatInput TraceBloat { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### UseGameDefaultDecalSize

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_GameDecalRenderer.cs#L39)

```csharp
ref bool UseGameDefaultDecalSize { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### VisualizeTraces

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_GameDecalRenderer.cs#L47)

```csharp
ref bool VisualizeTraces { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

