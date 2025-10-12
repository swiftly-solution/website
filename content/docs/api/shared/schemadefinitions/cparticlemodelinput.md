---
title: CParticleModelInput
---

```csharp
public interface CParticleModelInput : CParticleInput, ISchemaClass<CParticleInput>, ISchemaClass<CParticleModelInput>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ControlPoint

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleModelInput.cs#L21)

```csharp
ref int ControlPoint { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NamedValue

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleModelInput.cs#L19)

```csharp
SchemaUntypedField NamedValue { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### Type

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleModelInput.cs#L16)

```csharp
ref ParticleModelType_t Type { get; }
```

#### Property Value

- [ParticleModelType_t](/docs/api/shared/schemadefinitions/particlemodeltype_t)

