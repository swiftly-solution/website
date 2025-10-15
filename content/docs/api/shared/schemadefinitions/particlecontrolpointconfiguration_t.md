---
title: ParticleControlPointConfiguration_t
---

```csharp
public interface ParticleControlPointConfiguration_t : ISchemaClass<ParticleControlPointConfiguration_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Drivers

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticleControlPointConfiguration_t.cs#L19)

```csharp
ref CUtlVector<ParticleControlPointDriver_t> Drivers { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ParticleControlPointDriver_t](/docs/api/shared/schemadefinitions/particlecontrolpointdriver_t)>

### Name

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticleControlPointConfiguration_t.cs#L17)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### PreviewState

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticleControlPointConfiguration_t.cs#L21)

```csharp
ParticlePreviewState_t PreviewState { get; }
```

#### Property Value

- [ParticlePreviewState_t](/docs/api/shared/schemadefinitions/particlepreviewstate_t)

