---
title: C_OP_RenderVRHapticEvent
---

```csharp
public interface C_OP_RenderVRHapticEvent : CParticleFunctionRenderer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionRenderer>, ISchemaClass<C_OP_RenderVRHapticEvent>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Amplitude

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderVRHapticEvent.cs#L23)

```csharp
CPerParticleFloatInput Amplitude { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### Hand

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderVRHapticEvent.cs#L17)

```csharp
ref ParticleVRHandChoiceList_t Hand { get; }
```

#### Property Value

- [ParticleVRHandChoiceList_t](/docs/api/shared/schemadefinitions/particlevrhandchoicelist_t)

### OutputField

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderVRHapticEvent.cs#L21)

```csharp
ref int OutputField { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutputHandCP

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderVRHapticEvent.cs#L19)

```csharp
ref int OutputHandCP { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

