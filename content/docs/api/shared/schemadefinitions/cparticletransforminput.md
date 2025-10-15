---
title: CParticleTransformInput
---

```csharp
public interface CParticleTransformInput : CParticleInput, ISchemaClass<CParticleInput>, ISchemaClass<CParticleTransformInput>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ControlPoint

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleTransformInput.cs#L28)

```csharp
ref int ControlPoint { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ControlPointRangeMax

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleTransformInput.cs#L30)

```csharp
ref int ControlPointRangeMax { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### EndCPGrowthTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleTransformInput.cs#L32)

```csharp
ref float EndCPGrowthTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FollowNamedValue

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleTransformInput.cs#L22)

```csharp
ref bool FollowNamedValue { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NamedValue

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleTransformInput.cs#L20)

```csharp
SchemaUntypedField NamedValue { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### SupportsDisabled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleTransformInput.cs#L24)

```csharp
ref bool SupportsDisabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Type

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleTransformInput.cs#L17)

```csharp
ref ParticleTransformType_t Type { get; }
```

#### Property Value

- [ParticleTransformType_t](/docs/api/shared/schemadefinitions/particletransformtype_t)

### UseOrientation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleTransformInput.cs#L26)

```csharp
ref bool UseOrientation { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

