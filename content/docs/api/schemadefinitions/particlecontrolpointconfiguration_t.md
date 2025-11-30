---
title: ParticleControlPointConfiguration_t
---

# Interface ParticleControlPointConfiguration_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticleControlPointConfiguration_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface ParticleControlPointConfiguration_t : ISchemaClass<ParticleControlPointConfiguration_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<ParticleControlPointConfiguration_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Drivers

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticleControlPointConfiguration_t.cs#L20)

```csharp
ref CUtlVector<ParticleControlPointDriver_t> Drivers { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[ParticleControlPointDriver_t](/docs/api/schemadefinitions/particlecontrolpointdriver_t)>

### Name

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticleControlPointConfiguration_t.cs#L18)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### PreviewState

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticleControlPointConfiguration_t.cs#L22)

```csharp
ParticlePreviewState_t PreviewState { get; }
```

#### Property Value

- [ParticlePreviewState_t](/docs/api/schemadefinitions/particlepreviewstate_t)

