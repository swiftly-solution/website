---
title: CParticleVecInput
---

```csharp
public interface CParticleVecInput : CParticleInput, ISchemaClass<CParticleInput>, ISchemaClass<CParticleVecInput>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### CPRelativeDir

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L40)

```csharp
ref Vector CPRelativeDir { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### CPRelativePosition

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L38)

```csharp
ref Vector CPRelativePosition { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### CPValueScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L36)

```csharp
ref Vector CPValueScale { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### ControlPoint

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L32)

```csharp
ref int ControlPoint { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DeltaControlPoint

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L34)

```csharp
ref int DeltaControlPoint { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FloatComponentX

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L42)

```csharp
CParticleFloatInput FloatComponentX { get; }
```

#### Property Value

- [CParticleFloatInput](/docs/api/shared/schemadefinitions/cparticlefloatinput)

### FloatComponentY

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L44)

```csharp
CParticleFloatInput FloatComponentY { get; }
```

#### Property Value

- [CParticleFloatInput](/docs/api/shared/schemadefinitions/cparticlefloatinput)

### FloatComponentZ

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L46)

```csharp
CParticleFloatInput FloatComponentZ { get; }
```

#### Property Value

- [CParticleFloatInput](/docs/api/shared/schemadefinitions/cparticlefloatinput)

### FloatInterp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L48)

```csharp
CParticleFloatInput FloatInterp { get; }
```

#### Property Value

- [CParticleFloatInput](/docs/api/shared/schemadefinitions/cparticlefloatinput)

### FollowNamedValue

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L26)

```csharp
ref bool FollowNamedValue { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Gradient

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L59)

```csharp
SchemaUntypedField Gradient { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### InterpInput0

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L50)

```csharp
ref float InterpInput0 { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### InterpInput1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L52)

```csharp
ref float InterpInput1 { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### InterpOutput0

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L54)

```csharp
ref Vector InterpOutput0 { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### InterpOutput1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L56)

```csharp
ref Vector InterpOutput1 { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### LiteralColor

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L21)

```csharp
ref Color LiteralColor { get; }
```

#### Property Value

- [Color](/docs/api/shared/natives/color)

### LiteralValue

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L19)

```csharp
ref Vector LiteralValue { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### NamedValue

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L24)

```csharp
SchemaUntypedField NamedValue { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### RandomMax

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L63)

```csharp
ref Vector RandomMax { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### RandomMin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L61)

```csharp
ref Vector RandomMin { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### Type

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L17)

```csharp
ref ParticleVecType_t Type { get; }
```

#### Property Value

- [ParticleVecType_t](/docs/api/shared/schemadefinitions/particlevectype_t)

### VectorAttribute

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L28)

```csharp
ParticleAttributeIndex_t VectorAttribute { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

### VectorAttributeScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L30)

```csharp
ref Vector VectorAttributeScale { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

