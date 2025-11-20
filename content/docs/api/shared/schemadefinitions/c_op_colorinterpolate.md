---
title: C_OP_ColorInterpolate
---

```csharp
public interface C_OP_ColorInterpolate : CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<C_OP_ColorInterpolate>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ColorFade

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ColorInterpolate.cs#L18)

```csharp
ref Color ColorFade { get; }
```

#### Property Value

- [Color](/docs/api/shared/natives/color)

### EaseInOut

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ColorInterpolate.cs#L26)

```csharp
ref bool EaseInOut { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FadeEndTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ColorInterpolate.cs#L22)

```csharp
ref float FadeEndTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FadeStartTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ColorInterpolate.cs#L20)

```csharp
ref float FadeStartTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FieldOutput

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ColorInterpolate.cs#L24)

```csharp
ParticleAttributeIndex_t FieldOutput { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

