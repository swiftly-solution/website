---
title: CParticleModelInput
---

# Interface CParticleModelInput

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleModelInput.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CParticleModelInput : CParticleInput, ISchemaClass<CParticleInput>, ISchemaClass<CParticleModelInput>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CParticleInput](/docs/api/schemadefinitions/cparticleinput)
- [ISchemaClass<CParticleInput>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CParticleModelInput>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ControlPoint

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleModelInput.cs#L23)

```csharp
ref int ControlPoint { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NamedValue

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleModelInput.cs#L21)

```csharp
SchemaUntypedField NamedValue { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### Type

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleModelInput.cs#L18)

```csharp
ref ParticleModelType_t Type { get; }
```

#### Property Value

- [ParticleModelType_t](/docs/api/schemadefinitions/particlemodeltype_t)

